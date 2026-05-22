"use client"

import CustTableWithSearch from "@/components/common/CustTableWithSearch";
import { Box } from "@mui/material";

interface PropDesc {
    name: string;
    type: string;
    required: string;
    description: string;
}

interface HeadCell {
    id: keyof PropDesc;
    label: string;
    disableSorting: boolean;   // default true → sorting disabled
    disableSearch: boolean;
}

export default function FormPropsTable() {


    const headCells: HeadCell[] = [
        {
            id: 'name',
            label: 'Prop Name',
            disableSorting: true,    // usually the most useful to sort
            disableSearch: true,
        },
        {
            id: 'type',
            label: 'Type',
            disableSorting: true,
            disableSearch: true,
        },
        {
            id: 'required',
            label: 'Required',
            disableSorting: false,
            disableSearch: true,
        },
        {
            id: 'description',
            label: 'Description',
            disableSorting: true,
            disableSearch: true,
        },
    ];

    const data: PropDesc[] = [
        {
            name: 'form',
            type: "UseFormReturn<any>",
            required: "true",
            description: 'The react-hook-form form instance used to manage form state and validation.',
        },
        {
            name: 'fields',
            type: "Array<{ name: string; label: string; type: string; optionLst?: Array<{ id: string; value: string }>; disabled?: boolean; optional?: string; multline?: boolean; maxRow?: number; useLabel?: boolean; NumberSettingLst?: { min: number; max: number; step: number } }>",
            required: "true",
            description: 'Array defining each form field: input type, label, options (for select), number constraints, etc.',
        },
        {
            name: 'title',
            type: "string",
            required: "true",
            description: 'Title displayed at the top of the form/modal/dialog.',
        },
        {
            name: 'handleUpdate',
            type: "(data: any) => void",
            required: "true",
            description: 'Callback function called when the form is submitted with valid data.',
        },
        {
            name: 'size',
            type: '"small" | "medium"',
            required: "false",
            description: 'Controls the overall size/spacing of form fields and buttons (default: "medium").',
        },
        {
            name: 'headerBgColor',
            type: "string",
            required: "false",
            description: 'Background color of the form header/title area.',
        },
        {
            name: 'headerFontColor',
            type: "string",
            required: "false",
            description: 'Text color of the form title/header.',
        },
        {
            name: 'formBgColor',
            type: "string",
            required: "false",
            description: 'Background color of the entire form content area.',
        },
    ];


    return (
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Box>
                <h3>Form Props</h3>
            </Box>
            <CustTableWithSearch
                rows={data}
                headCells={headCells}
                maxHeight={"500px"}
                needSelect={false}
            />
        </Box>
    )
}