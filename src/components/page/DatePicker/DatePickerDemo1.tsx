"use client"

import CustomDatePicker from "@/components/common/CustDatePicker"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from "@mui/material"
import { useForm } from "react-hook-form"

import * as yup from "yup"
const schema = yup.object({
    dateBirth: yup.string().required("Date Birth is required"),
    scheduler: yup.string().required(),

})

type DatePickerForm = yup.InferType<typeof schema>
export default function DatePickerDemo1() {
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
            scheduler: ""
        }
    })

    return (
        <>
            <Box
                sx={
                    {
                        display: "flex",
                        gap: 2,
                    }}
            >
                <CustomDatePicker
                    form={form}
                    formFieldName="dateBirth"
                    label="Date of Birth"
                    width="256px"
                    formatDate="yyyy/MM/dd"
                />
                <CustomDatePicker
                    form={form}
                    formFieldName="scheduler"
                    label="Date of installation"
                    width="256px"
                    formatDate="yyyy-MM-dd"
                    minDate={schedulMinDate()}
                />
            </Box>


        </>
    )
}