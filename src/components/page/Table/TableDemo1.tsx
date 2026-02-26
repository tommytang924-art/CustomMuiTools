"use client"
import CustTable from "@/components/common/CustTable";
import { Client } from "../../templateData/client.types"
import { clients } from "../../templateData/client.types"
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditFormComponent from "@/components/common/EditFormComponent";
import CodeViewer from "@/components/common/CodeViewer";

interface HeadCell {
    id: keyof Client;
    label: string;
    disableSorting?: boolean; // Default is true (disabled)
    disableSearch?: boolean; // Default is false (search enabled)
}

const schema = yup.object({
    clientCode: yup.string().required("Client code is required"),
    fullName: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required"),

    phone: yup.string().required("Phone is required"),
    dateOfBirth: yup.string().required("Birth is required"),
    gender: yup.string().required("Gender is required"),
    address: yup.string().required("Address is required")
})


type ClientForm = yup.InferType<typeof schema>

const headCells: readonly HeadCell[] = [
    {
        id: "clientCode",
        label: "Client Code",
        disableSorting: false,
        disableSearch: false,
    },
    {
        id: "email",
        label: "Email",
        disableSorting: false,
        disableSearch: true,
    },
    {
        id: "phone",
        label: "Role",
        disableSorting: false,
        disableSearch: false,
    },
    {
        id: "dateOfBirth",
        label: "Birth",
        disableSorting: false,
        disableSearch: false,
    },
    {
        id: "gender",
        label: "Gender",
        disableSorting: true,
        disableSearch: true,
    },
    {
        id: "address",
        label: "Address",
        disableSorting: true,
        disableSearch: true,
    },
];


export default function Table() {
    const [selectedRowId, setSelectedRowId] = useState<string>("")
    const [rows, setRows] = useState<Client[]>(clients)

    const [TableCode, setTableCode] = useState<string>(`
        "use client"
        import CustTable from "@/components/common/CustTable";
        import {Client} from "../../templateData/client.types"
        import {clients} from "../../templateData/client.types"
        import { useState } from "react";
        import * as yup from "yup";
        import { yupResolver } from "@hookform/resolvers/yup";
        import { useForm } from "react-hook-form";
        import EditFormComponent from "@/components/common/EditFormComponent";

        interface HeadCell {
            id: keyof Client;
            label: string;
            disableSorting?: boolean; // Default is true (disabled)
            disableSearch?: boolean; // Default is false (search enabled)
        }

        const schema = yup.object({
            clientCode: yup.string().required("Client code is required"),
            fullName: yup.string().required("Full name is required"),
            email: yup.string().required("Email is required"),
            
            phone: yup.string().required("Phone is required"),
            dateOfBirth: yup.string().required("Birth is required"),
            gender: yup.string().required("Gender is required"),
            address: yup.string().required("Address is required")
        })


        type ClientForm = yup.InferType<typeof schema>

        const headCells: readonly HeadCell[] = [
            {
                id: "clientCode",
                label: "Client Code",
                disableSorting: false,
                disableSearch: false,
            },
            {
                id: "email",
                label: "Email",
                disableSorting: false,
                disableSearch: true,
            },
            {
                id: "phone",
                label: "Role",
                disableSorting: false,
                disableSearch: false,
            },
                {
                id: "dateOfBirth",
                label: "Birth",
                disableSorting: false,
                disableSearch: false,
            },
            {
                id: "gender",
                label: "Gender",
                disableSorting: true,
                disableSearch: true,
            },
            {
                id: "address",
                label: "Address",
                disableSorting: true,
                disableSearch: true,
            },
        ];


        export default function Table(){
            const [selectedRowId, setSelectedRowId] = useState<string>("")
            const [rows, setRows] = useState<Client[]>(clients)
            const handleRowClick = (id: string) => {
                const row = rows.find((row) => row.id === id);
                setSelectedRowId(id)
                form.reset({
                    clientCode: row?.clientCode,
                    fullName: row?.fullName,
                    email: row?.email,
                    phone: row?.phone,
                    
                    dateOfBirth: row?.dateOfBirth,
                    gender: row?.gender,
                    address: row?.address
                });
            }

            const form = useForm<ClientForm>({
                resolver: yupResolver(schema),
                defaultValues:{
                    
                    clientCode: "",
                    fullName: "",
                    email: "",

                    phone: "",
                    dateOfBirth: "",
                    gender: "",
                    address: ""

                }
            })

            const handleSubmit = async (data: any)=>{
                console.log(data)
            }

                const Formfields: Array<{ name: string; label: string; type: string, disabled?: boolean, optional?: string, multline?:boolean, maxRow?:number;}> = [
                { name: "clientCode", label: "Client Code", type: "text", disabled: true },
                { name: "fullName", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "text" },
                { name: "phone", label: "Phone", type: "text" },
                { name: "dateOfBirth", label: "Date of Birth", type: "text" },
                { name: "gender", label: "Gender", type: "text" },
                { name: "address", label: "Address", type: "text", multline:true, maxRow:4},
            ]

            return(
                <>
                    <CustTable
                    rows={clients}
                    headCells={headCells}
                    selectedRowId={selectedRowId}
                    handleRowClick={handleRowClick}
                    />
                    <EditFormComponent
                    form={form}
                    fields={Formfields}
                    title={"Client Form"}
                    handleUpdate={handleSubmit}
                    />
                </>
            )  
    `)

    const updateContent = (content:string) =>{
        
        setTableCode(content)

    }

    const handleRowClick = (id: string) => {
        const row = rows.find((row) => row.id === id);
        setSelectedRowId(id)
        form.reset({
            clientCode: row?.clientCode,
            fullName: row?.fullName,
            email: row?.email,
            phone: row?.phone,

            dateOfBirth: row?.dateOfBirth,
            gender: row?.gender,
            address: row?.address
        });
    }

    const form = useForm<ClientForm>({
        resolver: yupResolver(schema),
        defaultValues: {

            clientCode: "",
            fullName: "",
            email: "",

            phone: "",
            dateOfBirth: "",
            gender: "",
            address: ""

        }
    })

    const handleSubmit = async (data: any) => {
        console.log(data)
    }

    const Formfields: Array<{ name: string; label: string; type: string, disabled?: boolean, optional?: string, multline?: boolean, maxRow?: number; }> = [
        { name: "clientCode", label: "Client Code", type: "text", disabled: true },
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "text" },
        { name: "phone", label: "Phone", type: "text" },
        { name: "dateOfBirth", label: "Date of Birth", type: "text" },
        { name: "gender", label: "Gender", type: "text" },
        { name: "address", label: "Address", type: "text", multline: true, maxRow: 4 },
    ]

    return (
        <>
            <CustTable
                rows={clients}
                headCells={headCells}
                selectedRowId={selectedRowId}
                handleRowClick={handleRowClick}
            />
            <EditFormComponent
                form={form}
                fields={Formfields}
                title={"Client Form"}
                handleUpdate={handleSubmit}
            />
            <CodeViewer
            content={TableCode}
            setContent={updateContent}
            />
        </>
    )

}