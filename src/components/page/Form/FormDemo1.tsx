"use client"

import CodeViewer from "@/components/common/CodeViewer"
import EditFormComponent from "@/components/common/EditFormComponent"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup.object({
    price: yup.number().required("Price is required")
        .min(1, "Price must be at least 1")
        .max(100, "Price cannot exceed 100")
    ,
    product: yup.string().required("Product name is required"),
    deployDate: yup.string().required("Date is required"),
    productTypeLst: yup.string().required("Product Type is required"),
})

type FormData = yup.InferType<typeof schema>



export default function FormDemo1() {

    const [formCode, setFormCode] = useState(`
    const schema = yup.object({
        price: yup.number().required("Price is required")
            .min(1, "Price must be at least 1")
            .max(100, "Price cannot exceed 100")
        ,
        product: yup.string().required("Product name is required"),
        deployDate: yup.string().required("Date is required"),
        productTypeLst: yup.string().required("Product Type is required"),
    })

    type FormData = yup.InferType<typeof schema>
    const form = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            price: 0,
            product: "",
            deployDate: "",
            productTypeLst: ""
        }
    })


    const handleSubmit = async (data: FormData) => {
        console.log(data)
    }
    const Formfields: Array<{ name: string; label: string; type: string, optionLst?: Array<{ id: string; value: string }>, disabled?: boolean, optional?: string; multline?: boolean, maxRow?: number; useLabel?: boolean, NumberSettingLst?: { min: number, max: number, step: number } }> = [
        { name: "price", label: "Price", type: "number", NumberSettingLst: { min: 1, max: 100, step: 0.01 } },
        { name: "product", label: "Product Name", type: "text" },
        { name: "deployDate", label: "Date", type: "datepicker" },
        { name: "productTypeLst", label: "Product Type", type: "select", optionLst: [{ value: "1", id: "Type 1" }, { value: "2", id: "Type 2" }] }
    ]
        
     <EditFormComponent
        form={form}
        fields={Formfields}
        title={"Product Form"}
        handleUpdate={handleSubmit}
        size="small"
    />
    `)

    const form = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            price: 0,
            product: "",
            deployDate: "",
            productTypeLst: ""
        }
    })

    const changContent = (code: string) => {
        setFormCode(code)
    }

    const handleSubmit = async (data: FormData) => {
        console.log(data)
    }
    const Formfields: Array<{ name: string; label: string; type: string, optionLst?: Array<{ id: string; value: string }>, disabled?: boolean, optional?: string; multline?: boolean, maxRow?: number; useLabel?: boolean, NumberSettingLst?: { min: number, max: number, step: number } }> = [
        { name: "price", label: "Price", type: "number", NumberSettingLst: { min: 1, max: 100, step: 0.01 } },
        { name: "product", label: "Product Name", type: "text" },
        { name: "deployDate", label: "Date", type: "datepicker" },
        { name: "productTypeLst", label: "Product Type", type: "select", optionLst: [{ value: "1", id: "Type 1" }, { value: "2", id: "Type 2" }] }
    ]
    return (
        <>
            <EditFormComponent
                form={form}
                fields={Formfields}
                title={"Product Form"}
                handleUpdate={handleSubmit}
                size="small"
            />

            <br />
            <CodeViewer
                content={formCode}
                setContent={changContent}
            />
        </>
    )
}