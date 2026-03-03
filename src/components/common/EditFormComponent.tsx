"use client"
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from "date-fns";
import CustomTextField from "./CustomTextField";
import CustomDatePicker from "./CustDatePicker";
import NumberField from "./NumberField";
import CustomSelect from "./CustomSelect";

interface EditFormProps {
    form: UseFormReturn<any>;
    fields: Array<{ name: string; label: string; type: string, optionLst?: Array<{ id: string; value: string }>, disabled?: boolean, optional?: string; multline?: boolean, maxRow?: number; useLabel?: boolean, NumberSettingLst?: { min: number, max: number, step: number } }>;
    title: string;
    handleUpdate: (data: any) => void;
    size?:  "small" | "medium";
    headerBgColor?: string;
    headerFontColor?: string;
    formBgColor?: string;
}

export default function EditFormComponent({ 
    form, 
    fields, 
    title, 
    handleUpdate, 
    size="medium", 
    headerBgColor="#b8b7b4",
    headerFontColor="#000",
    formBgColor="#f5f5f5"

}: EditFormProps) {


    const formElementMapping = () => {
        return fields.map((fieldConfig) => {

            if (fieldConfig.type === "datepicker") {
                return (
                    <div key={`${fieldConfig.name}=label`}>
                        <CustomDatePicker
                            form={form}
                            formFieldName={fieldConfig.name}
                            label={fieldConfig.label}
                            size={size}

                        />
                    </div>
                );
            } else if (fieldConfig.type === "number") {
                return (
                    <div key={`${fieldConfig.name}=label`}>
                        <NumberField
                            label={fieldConfig.label}
                            placeholder={fieldConfig.label}
                            margin="none"
                            size={size}
                            form={form}
                            formFieldName={fieldConfig.name}
                            min={fieldConfig.NumberSettingLst?.min || 0}
                            max={fieldConfig.NumberSettingLst?.max || 0}
                            step={fieldConfig.NumberSettingLst?.step || 0}
                        />
                    </div>
                );
            }
            else if (fieldConfig.type === "select"){
                return(
                     <div key={`${fieldConfig.name}=label`}>
                        <CustomSelect
                        form={form}
                        label={fieldConfig.label}
                        size={size}
                        formFieldName={fieldConfig.name}
                        optionslist={fieldConfig.optionLst || [{id:"",value:""}]}
                        />
                     </div>
                )
            }

            else {
                return (
                    <div key={`${fieldConfig.name}=label`}>
                        <CustomTextField
                            label={fieldConfig.label}
                            placeholder={fieldConfig.label}
                            size={size}
                            margin="none"
                            form={form}
                            formFieldName={fieldConfig.name}
                            disabled={fieldConfig.disabled}
                            {
                            ...fieldConfig.multline && (
                                { multiline: true, maxRows: fieldConfig.maxRow }
                            )
                            }
                        />
                    </div>
                );
            }
        })
    }


    return (
        <>
            <Box sx={{ mt: 4 }}>  {/* Only add spacing here, no Container */}
                <Paper elevation={3} sx={{ p: 3, backgroundColor: `${formBgColor}`, border: '1px solid #ccc' }}>
                    <Typography variant="h6" sx={{ backgroundColor: `${headerBgColor}`, color: `${headerFontColor}`, p: 1, mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>

                            {formElementMapping()}

                        </div>
                    </Box>
                </Paper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 3, mb: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#f5f5f5",
                        color: "#212121",
                        textTransform: 'none',
                        height: "2.5em",
                        width: "125px"
                    }}
                    onClick={form.handleSubmit(handleUpdate)}
                >
                    Update
                </Button>
            </Box>
        </>
    )
}