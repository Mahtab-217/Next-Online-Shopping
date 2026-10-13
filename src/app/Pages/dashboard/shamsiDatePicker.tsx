import { Input } from '@/components/ui/input';
import React from 'react'
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


 function ShamsiDatePicker({
    date,
    setDate,
 }:
{
    date:any;
    setDate: any;
}
) {
  return (
    <DatePicker
    value={date}
    onChange={setDate}
    calendar={persian}
    locale= {persian_fa}
    calendarPosition="bottom-right"
    format="YYYY/MM/DD"
    render={<CustomInput/>}
    />
  );
}

function CustomInput(props: any){
const  {openCalendar, onOpen, ...inputProps} = props;
return (
    <Input 
    {...inputProps}
    readOnly
    className='w-full'
    />
)
}

export default ShamsiDatePicker
