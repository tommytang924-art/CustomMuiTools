"use client"
import CustTableWithSearch from "@/components/common/CustTableWithSearch";
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
    disableSearch: boolean;
}

export default function DateRangePickerPropsTable() {

    const headCells: HeadCell[] = [
        {
            id: 'name',
            label: 'Prop Name',
            disableSorting: true,    // usually want to allow sorting by name
            disableSearch:true,
        },
        {
            id: 'type',
            label: 'Type',
            disableSorting: true,     // sorting by type string is rarely useful
            disableSearch:true,
        },
        {
            id: 'required',
            label: 'Required',
            disableSorting: false,     // usually just Yes/No → sorting not very meaningful
            disableSearch:true,
        },
        {
            id: 'description',
            label: 'Description',
            disableSorting: true,     // long text → sorting doesn't make sense
            disableSearch:true,
        }
    ];

    const data: PropDesc[] = [
        {
            name: 'form',
            type: "UseFormReturn<any>",
            required: "true",
            description: 'react-hook-form form instance used to control both start and end date fields.',
        },
        {
            name: 'startDateFormName',
            type: "string",
            required: "true",
            description: 'The field name in react-hook-form that stores the start date value.',
        },
        {
            name: 'endDateFormName',
            type: "string",
            required: "true",
            description: 'The field name in react-hook-form that stores the end date value.',
        },
        {
            name: 'StartAndornment',
            type: "React.ReactNode | string",
            required: "false",
            description: 'Content (icon, text, etc.) to display at the start of the range input (commonly a calendar icon).',
        },
        {
            name: 'EndAndornment',
            type: "React.ReactNode | string",
            required: "false",
            description: 'Content (icon, text, etc.) to display at the end of the range input (e.g. second calendar icon or arrow).',
        },
    ];

    return (
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Box>
                <h3>Date Range Picker Props</h3>
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