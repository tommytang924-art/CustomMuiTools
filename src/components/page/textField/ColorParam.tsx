import CodeViewer from "@/components/common/CodeViewer";
import CustomTextField from "@/components/common/CustomTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
    OltextColor: yup.string().required(),
    FitextColor: yup.string().required(),
    SdtextColor: yup.string().required(),
    OlbrColor: yup.string().required(),
    FibrColor: yup.string().required(),
    SdbrColor: yup.string().required(),
    OlbgColor: yup.string().required(),
    FibgColor: yup.string().required(),
    SdbgColor: yup.string().required(),
    OlLbColor: yup.string().required(),
    FiLbColor: yup.string().required(),
    SdLbColor: yup.string().required(),
})

type ColorParamForm = yup.InferType<typeof schema>
export default function ColorParam() {
    const form = useForm<ColorParamForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            OltextColor: "",
            FitextColor: "",
            SdtextColor: "",
            OlbrColor: "",
            FibrColor: "",
            SdbrColor: "",
            OlbgColor: "",
            FibgColor: "",
            SdbgColor: "",
            OlLbColor: "",
            FiLbColor: "",
            SdLbColor: ""
        }
    })

    const [ColorParamCode, setCPCode] = useState<string>(`
         <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Background Color"
                        form={form}
                        formFieldName="OlbgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Background Color"
                        variant="outlined"
                        bgColor="lightblue"
                    />
                    <CustomTextField
                        placeholder="Filled Background Color"
                        form={form}
                        formFieldName="FibgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Background Color"
                        variant="filled"
                        bgColor="lightblue"
                    />
                    <CustomTextField
                        placeholder="Standard Background Color"
                        form={form}
                        formFieldName="SdbgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Background Color"
                        variant="standard"
                        bgColor="lightblue"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Text Color"
                        form={form}
                        formFieldName="OltextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Text Color"
                        variant="outlined"
                        textColor="red"
                    />
                    <CustomTextField
                        placeholder="Filled Text Color"
                        form={form}
                        formFieldName="FitextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Text Color"
                        variant="filled"
                        textColor="red"
                    />
                    <CustomTextField
                        placeholder="Standard Text Color"
                        form={form}
                        formFieldName="SdtextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Text Color"
                        variant="standard"
                        textColor="red"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Border Color"
                        form={form}
                        formFieldName="OlbrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Border Color"
                        variant="outlined"
                        borderColor="#FFC107"
                    />
                    <CustomTextField
                        placeholder="Filled Border Color"
                        form={form}
                        formFieldName="FibrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Border Color"
                        variant="filled"
                        borderColor="#FFC107"
                    />
                    <CustomTextField
                        placeholder="Standard Border Color"
                        form={form}
                        formFieldName="SdbrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Border Color"
                        variant="standard"
                        borderColor="#FFC107"
                    />
                </Box>
                 <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Label Color"
                        form={form}
                        formFieldName="OlLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Label Color"
                        variant="outlined"
                        labelColor="#ff0707ff"
                    />
                    <CustomTextField
                        placeholder="Filled Label Color"
                        form={form}
                        formFieldName="FiLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Label Color"
                        variant="filled"
                        labelColor="#ff0707ff"
                    />
                    <CustomTextField
                        placeholder="Standard Label Color"
                        form={form}
                        formFieldName="SdLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Label Color"
                        variant="standard"
                        labelColor="#ff0707ff"
                    />
                </Box>
        `)

    const changeCode = (content: string) => {
        setCPCode(content);
    }
    return (
        <>
            <Box
                sx={{
                    mt: 4,
                    minWidth: '856px', // Adjust width as needed
                    borderRadius: '8px',
                    minHeight: "200px",
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column"
                }} >
                <h2>Different Color Param in TextField</h2>
                <br />
                There are four param can be set - textColor, borderColor, labelColor, bgColor
                <br />
                <p style={{ color: "red", textWrap: "revert", }}>* Reminder the bgColor apply to standard variant TextField would bind the placholder. Furthermore, the standard variant need to focus to show the label unlike other variant.
                    So, you cannot see any text in standard variant when applying bgColor
                </p>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Background Color"
                        form={form}
                        formFieldName="OlbgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Background Color"
                        variant="outlined"
                        bgColor="lightblue"
                    />
                    <CustomTextField
                        placeholder="Filled Background Color"
                        form={form}
                        formFieldName="FibgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Background Color"
                        variant="filled"
                        bgColor="lightblue"
                    />
                    <CustomTextField
                        placeholder="Standard Background Color"
                        form={form}
                        formFieldName="SdbgColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Background Color"
                        variant="standard"
                        bgColor="lightblue"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Text Color"
                        form={form}
                        formFieldName="OltextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Text Color"
                        variant="outlined"
                        textColor="red"
                    />
                    <CustomTextField
                        placeholder="Filled Text Color"
                        form={form}
                        formFieldName="FitextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Text Color"
                        variant="filled"
                        textColor="red"
                    />
                    <CustomTextField
                        placeholder="Standard Text Color"
                        form={form}
                        formFieldName="SdtextColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Text Color"
                        variant="standard"
                        textColor="red"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Border Color"
                        form={form}
                        formFieldName="OlbrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Border Color"
                        variant="outlined"
                        borderColor="#FFC107"
                    />
                    <CustomTextField
                        placeholder="Filled Border Color"
                        form={form}
                        formFieldName="FibrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Border Color"
                        variant="filled"
                        borderColor="#FFC107"
                    />
                    <CustomTextField
                        placeholder="Standard Border Color"
                        form={form}
                        formFieldName="SdbrColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Border Color"
                        variant="standard"
                        borderColor="#FFC107"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                    <CustomTextField
                        placeholder="Outlined Label Color"
                        form={form}
                        formFieldName="OlLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Outlined Label Color"
                        variant="outlined"
                        labelColor="#ff0707ff"
                    />
                    <CustomTextField
                        placeholder="Filled Label Color"
                        form={form}
                        formFieldName="FiLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Filled Label Color"
                        variant="filled"
                        labelColor="#ff0707ff"
                    />
                    <CustomTextField
                        placeholder="Standard Label Color"
                        form={form}
                        formFieldName="SdLbColor"
                        fullWidth={false}
                        useLabel={true}
                        label="Standard Label Color"
                        variant="standard"
                        labelColor="#ff0707ff"
                    />
                </Box>
                <CodeViewer
                    content={ColorParamCode}
                    setContent={changeCode}
                />
            </Box>
        </>
    )
}