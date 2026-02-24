"use client"

import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField"
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    outlined: yup.string().required("Outlined is required"),
    filled: yup.string().required("Filled is required"),
    standard: yup.string().required("Standard is required"),
    outLinedWithLabel: yup.string().required("outLinedWithLabel  is required"),
    filledWithLabel: yup.string().required("filledWithLabel  is required"),
    standardWithLabel: yup.string().required("standardWithLabel is required"),
})

type DiffVariantForm = yup.InferType<typeof schema>



export default function DiffVariant() {
    const form = useForm<DiffVariantForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            outlined: "",
            filled: "",
            standard: "",
            outLinedWithLabel: "",
            filledWithLabel: "",
            standardWithLabel: "",
        }
    })


    const [DiffVariantCode, setDVCode] = useState<string>(`
        <Box
            component="form"
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",           
                gap: "32px",                    
                }}
        >

    {/* Column 1 – Outlined */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CustomTextField
        placeholder="Outlined"
        form={form}
        formFieldName="outlined"
        variant="outlined"
        size="medium"
        fullWidth
        useLabel={false}
        inputTitle="Outlined"           // keep if you want title above
      />
      <CustomTextField
        placeholder="Outlined With Label"
        form={form}
        formFieldName="outLinedWithLabel"
        variant="outlined"
        size="medium"
        fullWidth
        useLabel={true}
        label="Outlined With Label"
      />
    </Box>

    {/* Column 2 – Standard */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CustomTextField
        placeholder="Standard"
        form={form}
        formFieldName="standard"
        variant="standard"
        size="medium"
        fullWidth
        useLabel={false}
        inputTitle="Standard"
      />
      <CustomTextField
        placeholder="Standard With Label"
        form={form}
        formFieldName="standardWithLabel"
        variant="standard"
        size="medium"
        fullWidth
        useLabel={true}
        label="Standard With Label"
      />
    </Box>

    {/* Column 3 – Filled */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CustomTextField
        placeholder="Filled"
        form={form}
        formFieldName="filled"
        variant="filled"
        size="medium"
        fullWidth
        useLabel={false}
        inputTitle="Filled"
      />
      <CustomTextField
        placeholder="Filled With Label"
        form={form}
        formFieldName="filledWithLabel"
        variant="filled"
        size="medium"
        fullWidth
        useLabel={true}
        label="Filled With Label"
      />
    </Box>

  </Box>

  <Box sx={{ mt: 3 }}>
    <Button type="submit" variant="outlined">
      Submit
    </Button>
  </Box>
</Box>
    `)

    const changeDiff = (content: string) => {
        setDVCode(content);
    }

    const handleSubmit = (data: DiffVariantForm) => {
        console.log(data)
    }

    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px',
                    borderRadius: '8px',
                    minHeight: "200px"
                }}
            >
                <h2>Different variant TextField</h2>
                <br />
                There are three variants with label or input title: outlined (default), filled, and standard.
                <br />
                They also have error handling, you can click submit without typing to see it.

                <Box
                    component="form"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    sx={{
                        marginTop: "24px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",           // ← key: align baselines
                        gap: "32px",                      // wider gap looks better in demos
                    }}
                >

                    {/* Column 1 – Outlined */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Outlined"
                            form={form}
                            formFieldName="outlined"
                            variant="outlined"
                            size="medium"
                            fullWidth
                            useLabel={false}
                            inputTitle="Outlined"           // keep if you want title above
                        />
                        <CustomTextField
                            placeholder="Outlined With Label"
                            form={form}
                            formFieldName="outLinedWithLabel"
                            variant="outlined"
                            size="medium"
                            fullWidth
                            useLabel={true}
                            label="Outlined With Label"
                        />
                    </Box>

                    {/* Column 2 – Standard */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Standard"
                            form={form}
                            formFieldName="standard"
                            variant="standard"
                            size="medium"
                            fullWidth
                            useLabel={false}
                            inputTitle="Standard"
                        />
                        <CustomTextField
                            placeholder="Standard With Label"
                            form={form}
                            formFieldName="standardWithLabel"
                            variant="standard"
                            size="medium"
                            fullWidth
                            useLabel={true}
                            label="Standard With Label"
                        />
                    </Box>

                    {/* Column 3 – Filled */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Filled"
                            form={form}
                            formFieldName="filled"
                            variant="filled"
                            size="medium"
                            fullWidth
                            useLabel={false}
                            inputTitle="Filled"
                        />
                        <CustomTextField
                            placeholder="Filled With Label"
                            form={form}
                            formFieldName="filledWithLabel"
                            variant="filled"
                            size="medium"
                            fullWidth
                            useLabel={true}
                            label="Filled With Label"
                        />
                    </Box>

                </Box>

                <Box sx={{ mt: 3 }}>
                    <Button type="submit" variant="outlined">
                        Submit
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: 2,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',
                    overflow: 'hidden', // To handle inner borders cleanly
                }}
            >
                <CodeViewer
                    content={DiffVariantCode}
                    setContent={changeDiff}
                />
            </Box>
        </>
    )
}