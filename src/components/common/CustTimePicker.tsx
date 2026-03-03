"use client"

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, UseFormReturn } from "react-hook-form";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { InputLabel } from "@mui/material";
interface CustTimePickerProps {
    label: string;
    form: UseFormReturn<any>;
    formFieldName: string;
    minTime?: Date;
    maxTime?: Date;
    disabled?: boolean;
    inputTitle?: string;
    inputTitleColor?: string;
    bgColor?: string;
    labelColor?: string;
    format?: string;
    disablePast?: boolean;
    disableFuture?: boolean;
    minutesStep?: number;
    openPickerIcon?: React.ElementType;
    PickerPosition?: "end" | "start";
    borderColor?: string;
    width?: string;
    size? : "small" | "medium";
    height?: string;
    views?: ('hours'| 'minutes'| 'seconds')[];
    ampm: boolean;
    timezone?: string;
}


export default function CustTimePicker(
    {
        label,
        form,
        formFieldName,
        minTime,
        maxTime,
        disabled = false,
        inputTitle,
        inputTitleColor,
        borderColor,
        bgColor,
        labelColor,
        format,
        disablePast = false,
        disableFuture = false,
        minutesStep,
        openPickerIcon,
        PickerPosition = "end",
        width,
        size,
        height,
        ampm = false,
        views = ['hours', 'minutes', 'seconds'],
        timezone
    }: CustTimePickerProps
) {
    return (
        <>
            <Controller
                name={formFieldName}
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        {inputTitle && <InputLabel sx={{ color: `${inputTitleColor}` }}>{inputTitle}</InputLabel>}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                timezone={timezone}
                                label={label}
                                disableFuture={disableFuture}
                                disabled={disabled}
                                minTime={minTime}
                                maxTime={maxTime}
                                format={format}
                                views={views}
                                ampm={ampm}
                                minutesStep={minutesStep}
                                disablePast={disablePast}
                                value={field.value ? new Date(field.value) : null}
                                onChange={field.onChange}
                                slots={{ openPickerIcon: openPickerIcon }}
                                slotProps={{
                                    field: {
                                        openPickerButtonPosition: PickerPosition,
                                    },

                                    textField: {
                                        // FIXED: fullWidth: false to fit inline; adjust as needed
                                        fullWidth: width ? false : true,
                                        error: !!error,
                                        size: size,
                                        inputProps: {
                                            style: { height: height, width: width ? width : "100%" }, // FIXED: Adjusted to use width prop
                                        },
                                        helperText: error?.message,
                                        InputProps: {
                                            style: {
                                                backgroundColor: `${bgColor}`,

                                            },
                                        },
                                        InputLabelProps: {
                                            sx: {
                                                color: `${labelColor}`, // Custom color for the label when unfocused
                                            },
                                        },
                                        sx: {
                                            '& .MuiOutlinedInput-notchedOutline': { // FIXED: Corrected class name
                                                border: `1px solid ${borderColor}`,
                                            },
                                        },
                                    },

                                }}
                            />
                        </LocalizationProvider>
                    </>
                )}
            />
        </>
    )
}