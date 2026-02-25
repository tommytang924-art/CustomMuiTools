"use client"

import { InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, UseFormReturn } from "react-hook-form";
import { enGB } from "date-fns/locale/en-GB";

interface DatePickerProps {
    form: UseFormReturn<any>;
    formFieldName: string;
    label?: string;
    inputTitle?: string;
    fullWidth?: boolean;
    width?: string;
    borderColor?: string;
    bgColor?: string;
    minDate?: Date;
    maxDate?: Date;
    formatDate?: string;
    openPickerIcon?: React.ElementType;
    PickerPosition?: "end" | "start";
    disablePast?: boolean;
    disableFuture?: boolean;
    shouldDisableDate?: (day: Date) => boolean;
    shouldDisableMonth?: (month: Date) => boolean;
    shouldDisableYear?: (year: Date) => boolean;
    timezone?: string; // reference by https://timezonedb.com/time-zones
    views?: ('day' | 'month' | 'year')[];
    yearsOrder?: 'asc' | 'desc';
    yearsPerRow?: number // [desktop, mobile]
    height?: string;
    inputTitleColor?: string;
}


export default function CustomDatePicker({
    form,
    formFieldName,
    label = "Date",
    inputTitle,
    borderColor = "black",
    bgColor = "white",
    minDate,
    maxDate,
    formatDate,
    openPickerIcon,
    PickerPosition = "end",
    disablePast = false,
    disableFuture = false,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    views = ['day', 'month', 'year'],
    yearsOrder = 'asc',
    height = "2.5em",
    inputTitleColor = "black",
    width,

}: DatePickerProps) {


    return (
        <>
            <Controller
                name={formFieldName}
                control={form.control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        {inputTitle && <InputLabel sx={{ color: `${inputTitleColor}` }}>{inputTitle}</InputLabel>}
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                            <DatePicker
                                {...field}
                                label={label}
                                minDate={minDate}
                                maxDate={maxDate}
                                format={formatDate}
                                disablePast={disablePast}
                                disableFuture={disableFuture}
                                shouldDisableDate={shouldDisableDate}
                                shouldDisableMonth={shouldDisableMonth}
                                shouldDisableYear={shouldDisableYear}
                                views={views}
                                yearsOrder={yearsOrder}
                                value={field.value}
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
                                        inputProps: {
                                            style: { height: height, width: width ? width : "100%" }, // FIXED: Adjusted to use width prop
                                        },
                                        helperText: error?.message,
                                        InputProps: {
                                            style: { backgroundColor: `${bgColor}`, },
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
