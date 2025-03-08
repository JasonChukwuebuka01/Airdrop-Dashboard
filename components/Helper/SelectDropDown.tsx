"use client";

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectDropDownProps {
    setSelectedValue: (value: string) => void;
}

export default function SelectDropDown({ setSelectedValue }: SelectDropDownProps) {
    const [value, setValue] = React.useState("")




    const handleValueChange = (selectedValue: string) => {
        setValue(selectedValue)
        setSelectedValue(selectedValue)
    };




    return (
        <Select onValueChange={handleValueChange} value={value}>
            <SelectTrigger className="lg:w-[180px]">
                <SelectValue placeholder="All Campaign" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="All Campaign">All Campaign</SelectItem>
                    <SelectItem value="kilo cycle">Kilo Cycle</SelectItem>
                    <SelectItem value="mega cycle">Mega Cycle</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
