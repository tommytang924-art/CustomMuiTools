"use client"

import NumberField from "@/components/common/NumberField"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button } from "@mui/material"
import { useForm } from "react-hook-form"

import * as yup from "yup"

const schema = yup.object({
    price: yup.number()
        // .transform((value, originalValue) => originalValue === '' ? undefined : value)
        .required("Price is required")
        .min(1, "Price must be at least 1")
        .max(100, "Price cannot exceed 100")
})

type NumberForm = yup.InferType<typeof schema>

export default function NumberFieldDemo() {

    const form = useForm<NumberForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            price: 0,
        }
    })

    const handleSubmit = (data: NumberForm) => {
        console.log(data);
    }

    return (
        <>
            <Box
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <NumberField
                    form={form}
                    formFieldName="price"
                    label="Price"
                    max={100}
                    min={1}
                    step={0.01}
                />
                <Box sx={{ mt: 3 }}>
                    <Button type="submit" variant="outlined">
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}