"use client"
import CustomSelect from "@/components/common/CustomSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { clientsList } from "../../templateData/clientSelectLst"
import { useState } from "react";
import CodeViewer from "@/components/common/CodeViewer";
import { Box, Button } from "@mui/material";

const schema = yup.object({
    singleSelect: yup.string().required(),
    multipleSelect: yup
    .array()
    .min(1, 'You must have at least one item in the array') // Validates minimum length
    .required('The array field is required') // Ensures the array is defined
})

type SelectForm = yup.InferType<typeof schema>

export default function SelectDemo() {

    const form = useForm<SelectForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            singleSelect: "",
            multipleSelect: [],
        }
    })

    const [selectCode, setSCode] = useState<string>(`
          <CustomSelect
                form={form}
                formFieldName="singleSelect"
                optionslist={clientsList}
                // label="Select Client"
                label="Select Client"
                width="250px"
            />
            <CustomSelect
                form={form}
                formFieldName="multipleSelect"
                optionslist={clientsList}
                // label="Select Client"
                label="Select Clients"
                width="250px"
                multiple={true}
            />
        `)
    const setContent = (content: string) => {
        setSCode(content);
    }

    const handleSubmit = (data: SelectForm) => {
        console.log(data);
    }
    return (
        <>
            <Box
                component="form"
                onSubmit={form.handleSubmit(handleSubmit)}
                sx={{ display: "flex", gap: "20px", flexDirection: "column", width: "fit-content" }}
            >
                <CustomSelect
                    form={form}
                    formFieldName="singleSelect"
                    optionslist={clientsList}
                    // label="Select Client"
                    label="Select Client"
                    width="250px"
                />
                <CustomSelect
                    form={form}
                    formFieldName="multipleSelect"
                    optionslist={clientsList}
                    // label="Select Client"
                    label="Select Clients"
                    width="250px"
                    multiple={true}
                />

                <Box sx={{ mt: 3 }}>
                    <Button type="submit" variant="outlined">
                        Submit
                    </Button>
                </Box>
            </Box>

            <CodeViewer
                content={selectCode}
                setContent={setContent}
            />
        </>
    )
}