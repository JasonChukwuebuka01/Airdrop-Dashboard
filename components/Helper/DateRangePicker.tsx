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
}




const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange }) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);




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

          {
            date?.from ?
              (date.to ?
                (`${format(date.from, "PPP")} - ${format(date.to, "PPP")}`) : (format(date.from, "PPP"))
              )
              : (<span>Pick a date</span>)
          }
          <Calendar1Icon className="ml-5 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
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
