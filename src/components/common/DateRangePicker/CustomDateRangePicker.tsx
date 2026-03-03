"use client"

import { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateInputShowComponent from "./DateInputShowComponent";
import "./css/CustomDateRangePicker.css"
import { UseFormReturn } from "react-hook-form";

interface CustomDateInputProps extends React.HTMLProps<HTMLButtonElement> {
    value?: string;
}

interface CustomDateRangePickerProps {
    form: UseFormReturn<any>;
    startDateFormName: string;
    endDateFormName: string;
    StartAndornment?: React.ReactNode | string;
    EndAndornment?: React.ReactNode | string;
}
export default function CusotmDatePicker({ 
    form, 
    startDateFormName, 
    endDateFormName,
    StartAndornment,
    EndAndornment
}: CustomDateRangePickerProps) {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    const CustomDateInput = forwardRef<HTMLButtonElement, CustomDateInputProps>(
        ({ value, onClick }, ref) => (
            <DateInputShowComponent
                placeholder={value || "Select Date Range"}
                onClick={onClick}
                ref={ref as React.Ref<HTMLDivElement>}
                StartAndornment={StartAndornment}
                EndAndornment={EndAndornment}
            />
        )
    );

    useEffect(() => {
        if (dateRange[0]) {
            setStartDate(dateRange[0]);
            form.setValue(startDateFormName, dateRange[0]);
        } else {
            setStartDate(undefined);
            form.setValue(startDateFormName, undefined);
        }

        if (dateRange[1]) {
            setEndDate(dateRange[1]);
            form.setValue(endDateFormName, dateRange[1]);
        } else {
            setEndDate(undefined);
            form.setValue(endDateFormName, undefined);
        }
    }, [dateRange, form, startDateFormName, endDateFormName]);

    return (
        <>
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            onChange={(update) => {
                setDateRange(update);
            }}
            formatWeekDay={(day) => day.substring(0, 1)}
            wrapperClassName="custom-datepicker-wrapper"
            customInput={<CustomDateInput />}
            monthsShown={2}
            showPopperArrow={false}
            minDate={new Date()}
            popperPlacement="bottom-start"
        />
        </>
    ); 
}
