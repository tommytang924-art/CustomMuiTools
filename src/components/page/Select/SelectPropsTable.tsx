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

export default function SelectAPITable() {

    const headCells: HeadCell[] = [
        {
            id: 'name',
            label: 'Prop Name',
            disableSorting: false,    // most useful to sort alphabetically by name
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
            name: 'optionslist',
            type: "Array<{ id: string; value: string }>",
            required: "true",
            description: 'List of selectable options. Each option must have an "id" (used as value) and "value" (display text).',
        },
        {
            name: 'autoWidth',
            type: "boolean",
            required: "false",
            description: 'If true, the select will adjust its width based on the selected item (default: false).',
        },
        {
            name: 'label',
            type: "string",
            required: "false",
            description: 'The floating label text displayed inside the select field when using outlined/filled variant.',
        },
        {
            name: 'inputTitle',
            type: "string",
            required: "false",
            description: 'Title shown above the select component.',
        },
        {
            name: 'variant',
            type: '"standard" | "filled" | "outlined"',
            required: "false",
            description: 'Visual style of the select field (default: "outlined").',
        },
        {
            name: 'size',
            type: '"small" | "medium"',
            required: "false",
            description: 'Size of the select input (default: "medium").',
        },
        {
            name: 'multiple',
            type: "boolean",
            required: "false",
            description: 'If true, allows selecting multiple options (turns into multi-select chip mode).',
        },
        {
            name: 'form',
            type: "UseFormReturn<any>",
            required: "true",
            description: 'The react-hook-form instance used to control this field.',
        },
        {
            name: 'formFieldName',
            type: "string",
            required: "true",
            description: 'The field name registered in react-hook-form (controller name).',
        },
        {
            name: 'width',
            type: "string",
            required: "false",
            description: 'Custom width of the select component (e.g. "180px", "100%", "20rem").',
        },
        {
            name: 'inputTitleColor',
            type: "string",
            required: "false",
            description: 'Color of the inputTitle label text (default: inherit or black in some implementations).',
        },
        {
            name: 'disabled',
            type: "boolean",
            required: "false",
            description: 'If true, the select field will be disabled.',
        },
    ];

    return (
        <>
            <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
                <Box>
                    <h3>Select Props</h3>
                </Box>
                <CustTableWithSearch
                    rows={data}
                    headCells={headCells}
                    maxHeight={"500px"}
                    needSelect={false}
                    selectedRowId=""
                    handleRowClick={() => { }}
                />
            </Box>
        </>
    )
}