"use client"

import CodeViewer from "@/components/common/CodeViewer"
import CustomDatePicker from "@/components/common/CustDatePicker"
import CustTimePicker from "@/components/common/CustTimePicker"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"

import * as yup from "yup"
const schema = yup.object({
    MS: yup.string().required("Minutes and Second is required"),
    ampm: yup.string().required("AM / PM is required"),
    twentyFourHour: yup.string().required("24 hour is required")
})

type TimePickerForm = yup.InferType<typeof schema>
export default function DatePickerDemo1() {

    const [dpCode, setDPCode] = useState<string>(`
       const schema = yup.object({
         MS: yup.string().required("MS is required"),
         normal: yup.string().required("normal is required"),

       })

        type TimePickerForm = yup.InferType<typeof schema>
                const form = useForm<TimePickerForm>({
                resolver: yupResolver(schema),
                defaultValues: {
                    MS: "",
                    normal: ""
                }
            })
            <CustTimePicker
                form={form}
                formFieldName={"MS"}
                label="Mintues : Second"
                views={['minutes', 'seconds']}
                format="mm:ss"
            />
            <CustTimePicker
                form={form}
                formFieldName={"normal"}
                label="Normal" 
                minTime={new Date()}
            />
        `)

    const form = useForm<TimePickerForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            MS: "",
            ampm: "",
            twentyFourHour: "",
        }
    })

    const ModifyDP = (code: string) => {
        setDPCode(code);
    }

    
    const handleSubmit = (data: TimePickerForm) => {
        console.log(data);
    }


    return (
        <>
            <Box
                sx={{
                        display: "flex",
                        gap: 2,
                        mb: 3
                    }}
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <CustTimePicker
                    form={form}
                    formFieldName={"MS"}
                    label="Mintues : Second"
                    views={['minutes', 'seconds']}
                    format="mm:ss"
                    ampm={true}
                />
                <CustTimePicker
                    form={form}
                    formFieldName={"ampm"}
                    label="AM / PM "
                    ampm={true}

                    minTime={new Date()}
                />
                  <CustTimePicker
                    form={form}
                    formFieldName={"twentyFourHour"}
                    label="24H"
                    ampm={false}

                    minTime={new Date()}
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