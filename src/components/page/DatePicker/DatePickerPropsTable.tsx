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
    disableSearch: boolean,
}

export default function DatePickerPropsTable() {

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
            description: 'react-hook-form form instance used to control and validate the date field.',
        },
        {
            name: 'formFieldName',
            type: "string",
            required: "true",
            description: 'The name of the field in the react-hook-form schema / Controller.',
        },
        {
            name: 'label',
            type: "string",
            required: "false",
            description: 'Floating label text shown inside the input when using outlined/filled variant.',
        },
        {
            name: 'inputTitle',
            type: "string",
            required: "false",
            description: 'Static title/label displayed above the date picker field (via InputLabel).',
        },
        {
            name: 'fullWidth',
            type: "boolean",
            required: "false",
            description: 'If true, the input stretches to fill the parent container width (default often true).',
        },
        {
            name: 'width',
            type: "string",
            required: "false",
            description: 'Explicit width of the picker input (e.g. "180px", "100%", "20rem").',
        },
        {
            name: 'borderColor',
            type: "string",
            required: "false",
            description: 'Custom border color for the outline/underline of the input.',
        },
        {
            name: 'bgColor',
            type: "string",
            required: "false",
            description: 'Background color of the input field area.',
        },
        {
            name: 'minDate',
            type: "Date",
            required: "false",
            description: 'Earliest date that can be selected.',
        },
        {
            name: 'maxDate',
            type: "Date",
            required: "false",
            description: 'Latest date that can be selected.',
        },
        {
            name: 'formatDate',
            type: "string",
            required: "false",
            description: 'Date format string (e.g. "yyyy-MM-dd", "dd/MM/yyyy", "MMM d, yyyy").',
        },
        {
            name: 'openPickerIcon',
            type: "React.ElementType",
            required: "false",
            description: 'Custom icon component to open the date picker (replaces default calendar icon).',
        },
        {
            name: 'PickerPosition',
            type: '"end" | "start"',
            required: "false",
            description: 'Position of the picker trigger icon (default: "end").',
        },
        {
            name: 'disablePast',
            type: "boolean",
            required: "false",
            description: 'If true, disables all dates before today.',
        },
        {
            name: 'disableFuture',
            type: "boolean",
            required: "false",
            description: 'If true, disables all dates after today.',
        },
        {
            name: 'shouldDisableDate',
            type: "(day: Date) => boolean",
            required: "false",
            description: 'Custom function to disable specific dates (return true to disable).',
        },
        {
            name: 'shouldDisableMonth',
            type: "(month: Date) => boolean",
            required: "false",
            description: 'Custom function to disable entire months in month view.',
        },
        {
            name: 'shouldDisableYear',
            type: "(year: Date) => boolean",
            required: "false",
            description: 'Custom function to disable entire years in year view.',
        },
        {
            name: 'timezone',
            type: "string",
            required: "false",
            description: 'IANA timezone name (e.g. "Asia/Hong_Kong") to display dates in specific timezone.',
        },
        {
            name: 'views',
            type: "(\'day\' | \'month\' | \'year\')[]",
            required: "false",
            description: 'Sequence of views to show in the picker (e.g. ["year", "month", "day"]).',
        },
        {
            name: 'yearsOrder',
            type: "'asc' | 'desc'",
            required: "false",
            description: 'Order of years in the year picker view (default usually "desc").',
        },
        {
            name: 'yearsPerRow',
            type: "number | [number, number]",
            required: "false",
            description: 'Number of years per row in year view (can be tuple for [desktop, mobile]).',
        },
        {
            name: 'height',
            type: "string",
            required: "false",
            description: 'Explicit height of the input field (rarely used).',
        },
        {
            name: 'inputTitleColor',
            type: "string",
            required: "false",
            description: 'Color of the inputTitle label text.',
        },
        {
            name: 'size',
            type: '"small" | "medium"',
            required: "false",
            description: 'Size variant of the input field (default: "medium").',
        },
        {
            name: 'labelColor',
            type: "string",
            required: "false",
            description: 'Color of the floating/shrunk label text.',
        },
    ];
    return (
        <>
            <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
                <Box>
                    <h3>Date Picker Props</h3>
                </Box>
                <CustTableWithSearch
                    rows={data}
                    headCells={headCells}
                    usePagination={false}
                    maxHeight={"500px"}
                    needSelect={false}
                />
            </Box>
        </>
    )
}