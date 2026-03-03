"use client"

import CodeViewer from "@/components/common/CodeViewer"
import CustomDateRangePicker from "@/components/common/DateRangePicker/CustomDateRangePicker"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const schema = yup.object({
    startDate: yup.string().required("Start Date is required"),
    endDate: yup.string().required("End Date is required")
})

type DateRangePickerForm = yup.InferType<typeof schema>
export default function DateRangePickerDemo1() {

    const [dpCode, setDPCode] = useState<string>(`
        import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
        const schema = yup.object({
            startDate: yup.string().required("Start Date is required"),
            endDate: yup.string().required("End Date is required")
        })

        type DateRangePickerForm = yup.InferType<typeof schema>
        const form = useForm<DateRangePickerForm>({
        resolver: yupResolver(schema),
            defaultValues: {
                startDate: "",
                endDate: ""
            }
        })
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    marginBottom:"250px"
                }}
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <CustomDateRangePicker
                    form={form}
                    startDateFormName="startDate"
                    endDateFormName="endDate"
                    StartAndornment={<FlightTakeoffIcon/>}
                />
                <Button type="submit" variant="outlined">
                    Submit
                </Button>
            </Box>
        `)


    const form = useForm<DateRangePickerForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            startDate: "",
            endDate: ""
        }
    })

    const ModifyDP = (code: string) => {
        setDPCode(code);
    }

    const handleSubmit = (data: DateRangePickerForm) => {
        console.log(data);
    }


    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    marginBottom:"250px"
                }}
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <CustomDateRangePicker
                    form={form}
                    startDateFormName="startDate"
                    endDateFormName="endDate"
                    StartAndornment={<FlightTakeoffIcon/>}
                />
                <Button type="submit" variant="outlined">
                    Submit
                </Button>
            </Box>
                <CodeViewer
                    content={dpCode}
                    setContent={ModifyDP}
                />
        </>
    )
}