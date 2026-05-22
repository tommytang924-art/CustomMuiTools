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

export default function TablePropsTable() {

    const data: PropDesc[] = [
        {
            name: 'rows',
            type: "Data[]",
            required: "true",
            description: 'Array of data objects to be displayed as table rows. Each object should match the structure expected by headCells.',
        },
        {
            name: 'headCells',
            type: "readonly HeadCell[]",
            required: "true",
            description: 'Column definitions including id (key from Data), label, and optional sorting/search settings.',
        },
        {
            name: 'needSelect',
            type: "boolean",
            required: "true",
            description: 'If true, enables row selection for row editing.',
        },
        {
            name: 'selectedRowId',
            type: "string",
            required: "false",
            description: 'ID of the currently selected row (controlled mode). Usually used with needSelect=true.',
        },
        {
            name: 'handleRowClick',
            type: "(id: string) => void",
            required: "false",
            description: 'Callback fired when a row is clicked. Receives the row’s id as argument.',
        },
        {
            name: 'maxHeight',
            type: "string | number",
            required: "false",
            description: 'Maximum height of the table container (e.g. "500px", 400). Enables vertical scrolling if content exceeds this height.',
        },
        {
            name: 'hoverColor',
            type: "string",
            required: "false",
            description: 'Background color applied when hovering over a row (e.g. "#f5f5f5").',
        },
        {
            name: 'selectedColor',
            type: "string",
            required: "false",
            description: 'Background color for the selected row (when selectedRowId matches).',
        },
        {
            name: 'tableHeaderBgColor',
            type: "string",
            required: "false",
            description: 'Background color of the table header row.',
        },
        {
            name: 'rowHeight',
            type: "string",
            required: "false",
            description: 'Explicit height for each table row (e.g. "48px", "56px").',
        },
        {
            name: 'usePagination',
            type: "boolean",
            required: "false",
            description: 'If true, enables client-side pagination controls below the table.',
        },
        {
            name: 'rowPerPage',
            type: "number",
            required: "false",
            description: 'Default number of rows per page when pagination is enabled.',
        },
        {
            name: 'rowPerPageOpt',
            type: "number[]",
            required: "false",
            description: 'Array of page size options for the user to choose from (e.g. [5, 10, 25, 50]).',
        },
    ];


        const headCells: HeadCell[] = [
        {
            id: 'name',
            label: 'Prop Name',
            disableSorting: true,    // usually want to allow sorting by name
            disableSearch: true,
        },
        {
            id: 'type',
            label: 'Type',
            disableSorting: true,     // sorting by type string is rarely useful
            disableSearch: true,
        },
        {
            id: 'required',
            label: 'Required',
            disableSorting: false,     // usually just Yes/No → sorting not very meaningful
            disableSearch: true,
        },
        {
            id: 'description',
            label: 'Description',
            disableSorting: true,     // long text → sorting doesn't make sense
            disableSearch: true,
        }
    ];

    return (
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Box>
                <h3>Table Props</h3>
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
    )
}