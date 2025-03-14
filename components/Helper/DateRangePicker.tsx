// components/DateRangePicker.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar1Icon, DeleteIcon } from "lucide-react";

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
            "lg:w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {
            date?.from ? (
              <div className="flex items-center justify-between w-full">
                <span>
                  {date.to
                    ? `${format(date.from, "PPP")} - ${format(date.to, "PPP")}`
                    : format(date.from, "PPP")}
                </span>
                <DeleteIcon className="w-6 h-6 cursor-pointer ml-2" />
              </div>
            )
              :
              (
                <section className="flex justify-between items-center w-full">
                  <div className="flex items-center  justify-between  gap-10 w-full">
                    <div className="flex items-center gap-9">
                      <span>Start date </span>
                      <span>End Date</span>
                    </div>


                    <Calendar1Icon className="w-6 h-6" />
                  </div>
                </section>
              )
          }
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
