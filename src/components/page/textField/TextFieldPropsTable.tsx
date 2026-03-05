"use client"

import CustTableNormal from "@/components/common/CustTableNormal";
import { Box } from "@mui/material";

interface PropDesc {
    name: string;                    // UUID or internal ID
    type: string;            // e.g. "C2024-0789", "VIP-1241"
    description: string;
    required: string;
}

interface HeadCell {
    id: keyof PropDesc;
    label: string;
    disableSorting: boolean; // Default is true (disabled)
}

export default function TextFieldAPITable() {


    const data: PropDesc[] = [
        {
            name: 'placeholder',
            type: "string",
            required: "true",
            description: 'Placeholder of the text field.',
        },
        {
            name: 'size',
            type: `"small" | "medium"`,
            required: "false",
            description: 'Size of the select input (default: "medium").',
        },
        {
            name: 'variant',
            type: `"standard" | "filled" | "outlined"`,
            required: "false",
            description: 'Visual style of the select field (default: "outlined").',
        },
        {
            name: 'label',
            type: "string",
            required: "false",
            description: 'The label of the TextField.',
        },
        {
            name: 'disabled',
            type: "boolean",
            required: "false",
            description: 'If true, the select field will be disabled.',
        },
        {
            name: 'StartAndornment',
            type: "React.ReactNode | string",
            required: "false",
            description: 'Content (icon, text, etc.) to display at the start of the input',
        },
        {
            name: 'EndAndornment',
            type: "React.ReactNode | string",
            required: "false",
            description: 'Content (icon, text, etc.) to display at the end of the input',
        },
        {
            name: 'fullWidth',
            type: "boolean",
            required: "false",
            description: 'If true, the field will take up the full width of its container.',
        },
        {
            name: 'borderColor',
            type: "string",
            required: "false",
            description: 'Control the width of TextField is fill all space or not',
        },
        {
            name: 'textColor',
            type: "string",
            required: "false",
            description: 'Color of the text',
        },
        {
            name: 'bgColor',
            type: "string",
            required: "false",
            description: 'Background color of the field.',
        },
        {
            name: 'form',
            type: "UseFormReturn<any>",
            required: "true",
            description: 'The form object from react-hook-form for controlling the field.',
        },
        {
            name: 'inputTitle',
            type: "string",
            required: "false",
            description: 'Title displayed above the text field.',
        },
        {
            name: 'formFieldName',
            type: "string",
            required: "true",
            description: 'Name of the form field used by react-hook-form.',
        },
        {
            name: 'multiline',
            type: "boolean",
            required: "false",
            description: 'If true, the text field allows multiple lines (textarea mode).',
        },
        {
            name: 'rows',
            type: "number",
            required: "false",
            description: 'The number of rows to display when multiline is true.',
        },
        {
            name: 'maxRows',
            type: "number",
            required: "false",
            description: 'The maximum number of rows to display when multiline is true.',
        },
        {
            name: 'multilineLabelOffset',
            type: "number",
            required: "false",
            description: 'The pixel offset to adjust the shrunk label position in multiline mode (default: 12).',
        },
        {
            name: 'fontSize',
            type: "number",
            required: "false",
            description: 'The font size of the input content (default: 16).',
        },
        {
            name: 'labelFontSize',
            type: "number",
            required: "false",
            description: 'The font size of the label (default: 16).',
        },
        {
            name: 'labelColor',
            type: "string",
            required: "false",
            description: 'The color of the label.',
        },
        {
            name: 'borderWidth',
            type: "number",
            required: "false",
            description: 'The width of the border (default: 1).',
        },
        {
            name: 'hoverBorderColor',
            type: "string",
            required: "false",
            description: 'The border color on hover.',
        },
        {
            name: 'focusedBorderColor',
            type: "string",
            required: "false",
            description: 'The border color when focused.',
        },
        {
            name: 'margin',
            type: "string",
            required: "false",
            description: 'The margin of the text field - none, normal, dense (default: dense).',
        },
        {
            name: 'inputTitleColor',
            type: "string",
            required: "false",
            description: 'The color of the input title (default: black).',
        },
        {
            name: 'type',
            type: "string",
            required: "false",
            description: 'The type of the input, such as text, password, etc.',
        },
        {
            name: 'ref',
            type: "React.Ref<HTMLDivElement>",
            required: "false",
            description: 'A ref to the text field component.',
        }

    ]

    const headCells: HeadCell[] = [
        {
            id: 'name',
            label: 'Prop Name',
            disableSorting: true,    // usually want to allow sorting by name
        },
        {
            id: 'type',
            label: 'Type',
            disableSorting: true,     // sorting by type string is rarely useful
        },
        {
            id: 'required',
            label: 'Required',
            disableSorting: false,     // usually just Yes/No → sorting not very meaningful
        },
        {
            id: 'description',
            label: 'Description',
            disableSorting: true,     // long text → sorting doesn't make sense
        }
    ];

    return (
        <>
            <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
                <Box>
                    <h3>TextField Props</h3>
                </Box>
                <CustTableNormal
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