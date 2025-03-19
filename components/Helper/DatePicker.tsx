"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar1Icon, Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {

  const [date, setDate] = React.useState<DateRange | undefined>(undefined);


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full lg:w-[280px] justify-start text-left font-normal text-black",
            !date && "bg-gray-800/40 border-none text-white"
          )}
        >
          
          {
            date?.from ?
              (date.to ?
                (`${format(date.from, "PPP")} - ${format(date.to, "PPP")}`) : (format(date.from, "PPP"))
              )
              : (<section className="flex justify-between items-center w-full ">
                <div className="flex items-center  justify-between  gap-10 w-full">
                  <div className="flex items-center gap-9">
                    <span>Start date </span>
                    <span>End Date</span>
                  </div>


                  <Calendar1Icon className="w-6 h-6" />
                </div>
              </section>)
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
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
  )
}
