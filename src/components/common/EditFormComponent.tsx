"use client"
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from "date-fns";
import CustomTextField from "./CustomTextField";

interface EditFormProps {
    form: UseFormReturn<any>;
    fields: Array<{ name: string; label: string; type: string, disabled?: boolean, optional?: string; multline?:boolean, maxRow?:number; useLabel?:boolean}>;
    title: string;
    handleUpdate: (data: any) => void;
}

export default function EditFormComponent({ form, fields, title, handleUpdate }: EditFormProps) {
    return (
        <>
            <Box sx={{ mt: 4 }}>  {/* Only add spacing here, no Container */}
                <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}>
                    <Typography variant="h6" sx={{ backgroundColor: '#b8b7b4', color: '#000', p: 1, mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                            {fields.map((fieldConfig) => (
                                <div key={fieldConfig.name}>
                                    <Controller
                                        name={fieldConfig.name}
                                        control={form.control}
                                        render={({ field: formField, fieldState: { error } }) => (
                                            fieldConfig.type === "datepicker" ?
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        {...formField}
                                                        format="dd/MM/yyyy"
                                                        // FIXED: Pass Date | null directly; no || null needed
                                                        value={formField.value ? new Date(formField.value) : null}
                                                        // FIXED: onChange now receives Date | null; update state directly
                                                        onChange={formField.onChange}
                                                        
                                                        slotProps={{
                                                            field: {
                                                                openPickerButtonPosition: 'end',
                                                            },
                                                            textField: {
                                                                // FIXED: fullWidth: false to fit inline; adjust as needed
                                                                fullWidth: true,
                                                                error: !!error,
                                                                helperText: error?.message,
                                                                InputProps: {
                                                                    style: { height: '2.5em', backgroundColor: 'white', },
                                                                },
                                                                sx: {
                                                                    '& .MuiOutlinedInput-notchedOutline': { // FIXED: Corrected class name
                                                                        border: '1px solid #000',
                                                                    },
                                                                },
                                                            },
                                                        }}

                                                    />
                                                </LocalizationProvider>
                                                :
                                                <CustomTextField
                                                    label={fieldConfig.label}
                                                    placeholder={fieldConfig.label}
                                                    size="small"
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
                                        )}
                                    />
                                </div>
                            ))}
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