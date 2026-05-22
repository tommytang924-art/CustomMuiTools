"use client"

import { forwardRef, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateInputShowComponent from "./DateInputShowComponent";
import "./css/CustomDateRangePicker.css"
import { UseFormReturn } from "react-hook-form";
import { Button, Box } from "@mui/material";

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
    // Temporary state to hold selection until "Apply" is clicked
    const [tempDateRange, setTempDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const datePickerRef = useRef<any>(null);

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

    // Sync temp state with form state when the calendar opens
    const handleCalendarOpen = () => {
        const currentStart = form.getValues(startDateFormName);
        const currentEnd = form.getValues(endDateFormName);
        setTempDateRange([currentStart || null, currentEnd || null]);
    };

    // Apply button handler
    const handleApply = () => {
        const [start, end] = tempDateRange;
        form.setValue(startDateFormName, start);
        form.setValue(endDateFormName, end);

        if (datePickerRef.current) {
            datePickerRef.current.setOpen(false); // Close the datepicker
        }
    };

    return (
        <DatePicker
            ref={datePickerRef}
            selectsRange={true}
            startDate={tempDateRange[0]}
            endDate={tempDateRange[1]}
            onChange={(update) => setTempDateRange(update)}
            dateFormat="dd/MM/yyyy"
            formatWeekDay={(day) => day.substring(0, 1)}
            wrapperClassName="custom-datepicker-wrapper"
            customInput={<CustomDateInput />}
            monthsShown={2}
            showPopperArrow={false}
            minDate={new Date()}
            popperPlacement="bottom-start"
            shouldCloseOnSelect={false} // Keep open to allow clicking Apply
            onCalendarOpen={handleCalendarOpen}
            renderCustomHeader={({
                monthDate,
                customHeaderCount,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div className="custom-datepicker-header">
                    {/* Left Calendar gets the Prev arrow, Right Calendar gets a spacer */}
                    {customHeaderCount === 0 ? (
                        <button 
                            type="button"
                            className="custom-nav-btn" 
                            onClick={decreaseMonth} 
                            disabled={prevMonthButtonDisabled}
                        >
                            {"<"}
                        </button>
                    ) : <span className="custom-nav-spacer" />}
                    
                    <span className="custom-month-name">
                        {monthDate.toLocaleString('default', { month: 'long' })}
                    </span>

                    {/* Right Calendar gets the Next arrow, Left Calendar gets a spacer */}
                    {customHeaderCount === 1 ? (
                        <button 
                            type="button"
                            className="custom-nav-btn" 
                            onClick={increaseMonth} 
                            disabled={nextMonthButtonDisabled}
                        >
                            {">"}
                        </button>
                    ) : <span className="custom-nav-spacer" />}
                </div>
            )}
        >
            {/* Custom Footer inside DatePicker */}
            <Box className="custom-datepicker-footer">
                <Button 
                    variant="contained" 
                    onClick={handleApply}
                    disableElevation
                    sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        backgroundColor: '#0b57d0',
                        '&:hover': { backgroundColor: '#0a4bb5' },
                        px: 4
                    }}
                >
                    Apply
                </Button>
            </Box>
        </DatePicker>
    );
}