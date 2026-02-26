"use client"

import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    outlinedSmall: yup.string().required("outlinedSmall is required"),
    outlinedMedium: yup.string().required("outlinedMedium is required"),
    standardSmall: yup.string().required("standardSmall is required"),
    standardMedium: yup.string().required("outLinedWithLabel  is required"),
    filledSmall: yup.string().required("filledWithLabel  is required"),
    filledNormal: yup.string().required("standardWithLabel is required"),
})

type DiffSizeForm = yup.InferType<typeof schema>


export default function DiffSize() {

    const [DiffSizeCode, setDSCode] = useState<string>(`
                <Box sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",          
                    gap: "32px",                     
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Outlined Small"
                            form={form}
                            formFieldName="outlinedSmall"
                            fullWidth={false}
                            useLabel={true}
                            label="Outlined Small"
                            size="small"
                            variant="outlined"
                        />
                        <CustomTextField
                            placeholder="Outlined Medium"
                            form={form}
                            formFieldName="outlinedMedium"
                            fullWidth={false}
                            useLabel={true}
                            label="Outlined Medium"
                            size="medium"
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Standard Small"
                            form={form}
                            formFieldName="standardSmall"
                            fullWidth={false}
                            useLabel={true}
                            label="Standard Small"
                            size="small"
                            variant="standard"
                        />
                        <CustomTextField
                            placeholder="Standard Medium"
                            form={form}
                            formFieldName="standardMedium"
                            fullWidth={false}
                            useLabel={true}
                            label="Standard Medium"
                            size="medium"
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Filled Small"
                            form={form}
                            formFieldName="filledSmall"
                            fullWidth={false}
                            useLabel={true}
                            label="Filled Small"
                            size="small"
                            variant="filled"
                        />
                        <CustomTextField
                            placeholder="Filled Medium"
                            form={form}
                            formFieldName="filledMedium"
                            fullWidth={false}
                            useLabel={true}
                            label="Filled Medium"
                            size="medium"
                            variant="filled"
                        />
                    </Box>
                </Box>
        `)

    const form = useForm<DiffSizeForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            outlinedSmall: "",
            outlinedMedium: "",
            standardSmall: "",
            standardMedium: "",
            filledSmall: "",
            filledNormal: "",
        }
    })

    const changeDiff = (content: string) => {
        setDSCode(content);
    }


    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',
                    minHeight: "200px"
                }} >
                <h3>Different Size TextFields</h3>
                <br />
                There are two size: medium(default) and small
                <Box sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",           // ← key: align baselines
                    gap: "32px",                      // wider gap looks better in demos
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Outlined Small"
                            form={form}
                            formFieldName="outlinedSmall"
                            fullWidth={false}
                            label="Outlined Small"
                            size="small"
                            variant="outlined"
                        />
                        <CustomTextField
                            placeholder="Outlined Medium"
                            form={form}
                            formFieldName="outlinedMedium"
                            fullWidth={false}
                            label="Outlined Medium"
                            size="medium"
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Standard Small"
                            form={form}
                            formFieldName="standardSmall"
                            fullWidth={false}
                            label="Standard Small"
                            size="small"
                            variant="standard"
                        />
                        <CustomTextField
                            placeholder="Standard Medium"
                            form={form}
                            formFieldName="standardMedium"
                            fullWidth={false}
                            label="Standard Medium"
                            size="medium"
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <CustomTextField
                            placeholder="Filled Small"
                            form={form}
                            formFieldName="filledSmall"
                            fullWidth={false}
                            label="Filled Small"
                            size="small"
                            variant="filled"
                        />
                        <CustomTextField
                            placeholder="Filled Medium"
                            form={form}
                            formFieldName="filledMedium"
                            fullWidth={false}
                            label="Filled Medium"
                            size="medium"
                            variant="filled"
                        />
                    </Box>
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
                    content={DiffSizeCode}
                    setContent={changeDiff}
                />
            </Box>
        </>)
}