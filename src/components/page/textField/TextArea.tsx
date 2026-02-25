"use client"

import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    textAreaRowOutlined: yup.string().required(),
    textAreaMaxRowOutlined: yup.string().required(),
    textAreaRowFilled: yup.string().required(),
    textAreaMaxRowFilled: yup.string().required(),
    textAreaRowStandard: yup.string().required(),
    textAreaMaxRowStandard: yup.string().required()
})

const defaultContent = `Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.`
type TextAreaForm = yup.InferType<typeof schema>
export default function TextArea() {
    const form = useForm<TextAreaForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            textAreaRowOutlined: defaultContent,
            textAreaMaxRowOutlined: defaultContent,
            textAreaRowFilled: defaultContent,
            textAreaMaxRowFilled: defaultContent,
            textAreaRowStandard: defaultContent,
            textAreaMaxRowStandard: defaultContent,
        }
    })

    const changeTA = (content: string) => {
        setTACode(content);
    }
    const [TextAreaCode, setTACode] = useState<string>(`
    <Box sx={{
            marginTop: "24px",
            display: "flex"
            gap: "32px",
            flexDirection:"column"                      
        }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                            <CustomTextField
                                placeholder="Outlined Row"
                                form={form}
                                formFieldName="textAreaRowOutlined"
                                fullWidth={false}
                                useLabel={true}
                                label="Outlined Row"
                                variant="outlined"
                                rows={10}
                            />
                            <CustomTextField
                                placeholder="Outlined MaxRow"
                                form={form}
                                formFieldName="textAreaMaxRowOutlined"
                                fullWidth={false}
                                useLabel={true}
                                label="Outlined MaxRow"
                                variant="outlined"
                                maxRows={4}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                            <CustomTextField
                                placeholder="Filled Row"
                                form={form}
                                formFieldName="textAreaRowFilled"
                                fullWidth={false}
                                useLabel={true}
                                label="Filled Row"
                                variant="filled"
                                rows={10}
                            />
                            <CustomTextField
                                placeholder="Filled MaxRow"
                                form={form}
                                formFieldName="textAreaMaxRowFilled"
                                fullWidth={false}
                                useLabel={true}
                                label="Filled MaxRow"
                                variant="filled"
                                maxRows={4}
                            />
                        </Box>
                          <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                            <CustomTextField
                                placeholder="Standard Row"
                                form={form}
                                formFieldName="textAreaRowStandard"
                                fullWidth={false}
                                useLabel={true}
                                label="Standard Row"
                                variant="standard"
                                rows={10}
                            />
                            <CustomTextField
                                placeholder="Standard MaxRow"
                                form={form}
                                formFieldName="textAreaMaxRowStandard"
                                fullWidth={false}
                                useLabel={true}
                                label="Standard MaxRow"
                                variant="standard"
                                maxRows={4}
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
                        content={TextAreaCode}
                        setContent={changeTA}
                    />
                </Box>
        `)
    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',
                    minHeight: "200px"
                }} >
                <h2>TextArea</h2>
                <br />
                There are two param:
                <br />
                rows - config the minimum rows of the textArea
                <br />
                maxRows - config the maximum view rows of the textArea

                <Box sx={{
                    marginTop: "24px",
                    display: "flex",

                    gap: "32px",
                    flexDirection: "column"                      // wider gap looks better in demos
                }}>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                        <CustomTextField
                            placeholder="Outlined Row"
                            form={form}
                            formFieldName="textAreaRowOutlined"
                            fullWidth={false}
                            label="Outlined Row"
                            variant="outlined"
                            rows={10}
                        />
                        <CustomTextField
                            placeholder="Outlined MaxRow"
                            form={form}
                            formFieldName="textAreaMaxRowOutlined"
                            fullWidth={false}
                            label="Outlined MaxRow"
                            variant="outlined"
                            maxRows={4}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                        <CustomTextField
                            placeholder="Filled Row"
                            form={form}
                            formFieldName="textAreaRowFilled"
                            fullWidth={false}
                            label="Filled Row"
                            variant="filled"
                            rows={10}
                        />
                        <CustomTextField
                            placeholder="Filled MaxRow"
                            form={form}
                            formFieldName="textAreaMaxRowFilled"
                            fullWidth={false}
                            label="Filled MaxRow"
                            variant="filled"
                            maxRows={4}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                        <CustomTextField
                            placeholder="Standard Row"
                            form={form}
                            formFieldName="textAreaRowStandard"
                            fullWidth={false}
                            label="Standard Row"
                            variant="standard"
                            rows={10}
                        />
                        <CustomTextField
                            placeholder="Standard MaxRow"
                            form={form}
                            formFieldName="textAreaMaxRowStandard"
                            fullWidth={false}
                            label="Standard MaxRow"
                            variant="standard"
                            maxRows={4}
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
                    content={TextAreaCode}
                    setContent={changeTA}
                />
            </Box>

        </>
    )
}