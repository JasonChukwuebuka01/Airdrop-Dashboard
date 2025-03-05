// components/DateRangePicker.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar1Icon } from "lucide-react";

interface DateRangePickerProps {
  onDateRangeChange: (dateRange: DateRange | undefined) => void; // Callback function
  initialDateRange?: DateRange | undefined;
}




const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange, initialDateRange }) => {
  const [date, setDate] = useState<DateRange | undefined>(initialDateRange);




  // useEffect to trigger callback when date changes (including initial load)
  useEffect(() => {
    onDateRangeChange(date);
  }, [date, onDateRangeChange]);







  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <Calendar1Icon className="mr-2 h-4 w-4" />
          {
            date?.from ?
              (date.to ?
                (`${format(date.from, "PPP")} - ${format(date.to, "PPP")}`) : (format(date.from, "PPP"))
              )
              : (<span>Pick a date</span>)
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          pagedNavigation
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;

// Function for filtering an array of dates:
export const filterDatesByRange = (
  dates: Date[],
  dateRange: DateRange | undefined
): Date[] => {
  if (!dateRange?.from || !dateRange.to) {
    return dates; // Return original array if no date range is selected
  }

  const { from, to } = dateRange;

  return dates.filter((date) => {
    return date >= from && date <= to;
  });
};