"use client"

import CustTableNormal from "@/components/common/CustTableNormal";
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
}

export default function TimePickerPropsTable(){

    
    const headCells: HeadCell[] = [
    {
        id: 'name',
        label: 'Prop Name',
        disableSorting: true,    // usually the most useful to sort
    },
    {
        id: 'type',
        label: 'Type',
        disableSorting: true,
    },
    {
        id: 'required',
        label: 'Required',
        disableSorting: false,
    },
    {
        id: 'description',
        label: 'Description',
        disableSorting: true,
    },
];

const data:PropDesc[] = [
    { name: 'label',          type: "string",             required: "true",  description: 'Floating label' },
    { name: 'form',           type: "UseFormReturn<any>", required: "true",  description: 'react-hook-form instance' },
    { name: 'formFieldName',  type: "string",             required: "true",  description: 'Field name in form' },
    { name: 'ampm',           type: "boolean",            required: "true",  description: '12-hour (true) or 24-hour (false) format' },
    { name: 'format',         type: "string",             required: "false", description: 'Time format e.g. "HH:mm", "hh:mm a"' },
    { name: 'minTime',        type: "Date",               required: "false", description: 'Earliest selectable time' },
    { name: 'maxTime',        type: "Date",               required: "false", description: 'Latest selectable time' },
    { name: 'minutesStep',    type: "number",             required: "false", description: 'Minute increment step' },
    { name: 'disablePast',    type: "boolean",            required: "false", description: 'Disable times before now' },
    { name: 'disableFuture',  type: "boolean",            required: "false", description: 'Disable times after now' },
    { name: 'size',           type: '"small" | "medium"', required: "false", description: 'Input size' },
    { name: 'inputTitle',     type: "string",             required: "false", description: 'Title above field' },
    { name: 'width',          type: "string",             required: "false", description: 'Custom width' },
    { name: 'views',          type: "('hours'|'minutes'|'seconds')[]", required: "false", description: 'Picker view sequence' },
];


    return(
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Box>
                <h3>Time Picker Props</h3>
            </Box>
                <CustTableNormal
                    rows={data}
                    headCells={headCells}
                    maxHeight={"500px"}
                    needSelect={false}
                />
            </Box>
    )
}