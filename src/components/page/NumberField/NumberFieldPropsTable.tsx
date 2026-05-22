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
    disableSearch:boolean;
}

export default function NumberFieldPropsTable() {

    const headCells: readonly HeadCell[] = [
        { id: 'name', label: 'Name', disableSorting: true, disableSearch: true },
        { id: 'type', label: 'Type', disableSorting: true,disableSearch: true },
        { id: 'required', label: 'Required', disableSorting: false, disableSearch: true },
        { id: 'description', label: 'Description', disableSorting: true, disableSearch: true },
    ];

    const data: PropDesc[] = [
        {
            name: 'placeholder',
            type: "string",
            required: "false",
            description: 'Placeholder text shown when the field is empty.',
        },
        {
            name: 'size',
            type: '"medium" | "small"',
            required: "false",
            description: 'Size of the input field (default: "medium").',
        },
        {
            name: 'variant',
            type: '"outlined" | "filled" | "standard"',
            required: "false",
            description: 'Visual style variant of the field (default: "outlined").',
        },
        {
            name: 'label',
            type: "string",
            required: "false",
            description: 'Floating label text displayed inside the field.',
        },
        {
            name: 'disabled',
            type: "boolean",
            required: "false",
            description: 'Disables the number input when true.',
        },
        {
            name: 'IconComponent',
            type: "React.ElementType",
            required: "false",
            description: 'MUI icon component to display as adornment (e.g. PercentIcon, AttachMoneyIcon).',
        },
        {
            name: 'iconPosition',
            type: '"start" | "end"',
            required: "false",
            description: 'Position of the icon adornment (default: "end").',
        },
        {
            name: 'fullWidth',
            type: "boolean",
            required: "false",
            description: 'If true, the input takes full width of its container (default: true in most cases).',
        },
        {
            name: 'borderColor',
            type: "string",
            required: "false",
            description: 'Custom border color for the input outline/underline.',
        },
        {
            name: 'textColor',
            type: "string",
            required: "false",
            description: 'Text (input value) color.',
        },
        {
            name: 'bgColor',
            type: "string",
            required: "false",
            description: 'Background color of the input area.',
        },
        {
            name: 'form',
            type: "UseFormReturn<any>",
            required: "true",
            description: 'react-hook-form form instance (required for controlled field).',
        },
        {
            name: 'inputTitle',
            type: "string",
            required: "false",
            description: 'Title/label displayed above the field (using InputLabel).',
        },
        {
            name: 'formFieldName',
            type: "string",
            required: "true",
            description: 'Name of the field in the react-hook-form schema.',
        },
        {
            name: 'multiline',
            type: "boolean",
            required: "false",
            description: 'If true, renders as textarea (rarely used for number inputs).',
        },
        {
            name: 'rows',
            type: "number",
            required: "false",
            description: 'Number of visible rows when multiline is true.',
        },
        {
            name: 'maxRows',
            type: "number",
            required: "false",
            description: 'Maximum number of rows when multiline is true.',
        },
        {
            name: 'multilineLabelOffset',
            type: "number",
            required: "false",
            description: 'Pixel offset for shrunk label position in multiline mode (default: ~12).',
        },
        {
            name: 'fontSize',
            type: "number",
            required: "false",
            description: 'Font size of the input value in pixels (default: 16).',
        },
        {
            name: 'labelFontSize',
            type: "number",
            required: "false",
            description: 'Font size of the label in pixels (default: 16).',
        },
        {
            name: 'labelColor',
            type: "string",
            required: "false",
            description: 'Color of the label text.',
        },
        {
            name: 'borderWidth',
            type: "number",
            required: "false",
            description: 'Border width in pixels (default: 1).',
        },
        {
            name: 'hoverBorderColor',
            type: "string",
            required: "false",
            description: 'Border color when hovering over the field.',
        },
        {
            name: 'focusedBorderColor',
            type: "string",
            required: "false",
            description: 'Border color when the field is focused.',
        },
        {
            name: 'margin',
            type: '"none" | "normal" | "dense"',
            required: "false",
            description: 'Margin density of the form control (default: "dense").',
        },
        {
            name: 'inputTitleColor',
            type: "string",
            required: "false",
            description: 'Color of the inputTitle label (default: black or inherit).',
        },
        {
            name: 'min',
            type: "number",
            required: "true",
            description: 'Minimum allowed value for the number input.',
        },
        {
            name: 'max',
            type: "number",
            required: "true",
            description: 'Maximum allowed value for the number input.',
        },
        {
            name: 'step',
            type: "number",
            required: "true",
            description: 'Step increment/decrement value (e.g. 1, 0.01, 5).',
        },
    ];

    return (
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Box>
                <h3>Number Field Props</h3>
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
    );
}