"use client"

import CodeViewer from "@/components/common/CodeViewer"
import CustomDatePicker from "@/components/common/CustDatePicker"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"

import * as yup from "yup"
const schema = yup.object({
    dateBirth: yup.string().required("Date Birth is required"),
    schedule: yup.string().required(),

})

type DatePickerForm = yup.InferType<typeof schema>
export default function DatePickerDemo1() {

    const [dpCode, setDPCode] = useState<string>(`
        const currentDate = new Date();
        const schedulMinDate = () => {
            const minDate = new Date(currentDate);
            if (currentDate.getHours() >= 22) {
                minDate.setDate(currentDate.getDate() + 2);
            } else {
                minDate.setDate(currentDate.getDate() + 1);
            }
            return minDate;
        }
            
        <CustomDatePicker
            form={form}
            formFieldName="dateBirth"
            label="Date of Birth"
            width="256px"
            formatDate="yyyy/MM/dd"
            maxDate={new Date()}
        />
        <CustomDatePicker
            form={form}
            formFieldName="scheduler"
            label="Date of installation"
            width="256px"
            formatDate="yyyy-MM-dd"
            minDate={schedulMinDate()}
        />
        
        `)

    const currentDate = new Date();
    const schedulMinDate = () => {
        const minDate = new Date(currentDate);
        if (currentDate.getHours() >= 22) {
            minDate.setDate(currentDate.getDate() + 2);
        } else {
            minDate.setDate(currentDate.getDate() + 1);
        }
        return minDate;
    }

    const form = useForm<DatePickerForm>({
        resolver: yupResolver(schema),
        defaultValues: {

            dateBirth: "",
            schedule: ""
        }
    })

    const ModifyDP = (code: string) => {
        setDPCode(code);
    }


    const handleSubmit = (data: DatePickerForm) => {
        console.log(data);
    }


    return (
        <>
            <Box
                sx={
                    {
                        display: "flex",
                        gap: 2,
                        mb: 3
                    }}
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <CustomDatePicker
                    form={form}
                    formFieldName="dateBirth"
                    label="Date of Birth"
                    width="256px"
                    formatDate="yyyy/MM/dd"
                    maxDate={new Date()}
                />
                <CustomDatePicker
                    form={form}
                    formFieldName="schedule"
                    label="Date of installation"
                    width="256px"
                    formatDate="yyyy-MM-dd"
                    minDate={schedulMinDate()}
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