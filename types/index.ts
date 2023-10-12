import { MouseEventHandler } from "react";

export interface CustomButtonProps {
 title: string;
 containerStyles?: string;
 handleClick: MouseEventHandler<HTMLButtonElement>;
 btnType?: "button" | "submit";
 textStyles?:string
 isDisabled?: boolean;
 rightIcon?: string
}


export interface searchManufacturerProps {
 manufacturer: string;
 setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
 city_mpg: number;
 class: string;
 combination_mpg: number;
 cylinders: number;
 displacement: number;
 drive: string;
 fuel_type: string;
 highway_mpg: number;
 make: string;
 model: string;
 transmission: string;
 year: number;
}

// parameters for fetch funtion for dynamic api call
export interface FilterProps {
 manufacturer: string;
 year: number;
 fuel: string;
 limit: number;
 model: string;
}


// options prop interface
export interface OptionProps {
 title: string;
 value: string;
}

// filter options props
export interface CustomFilterProps {
 title: string;
 // interface inside another interface
 options: OptionProps[];
}