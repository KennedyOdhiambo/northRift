import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import useOutsideClick from '../../hooks/useOutsideClick';

import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
  selectedDate: Date | null;
  handleDateChange: (date: Date) => void;
  text: string;
};

export default function CustomDatePicker({ selectedDate, handleDateChange, text }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useOutsideClick(() => setIsOpen(false), isOpen) as React.RefObject<HTMLDivElement>;

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center h-14 justify-between w-fit border-b bg-white p-3 text-gray-400 ${
          isOpen ? 'border-cyan-600' : 'border-gray-400'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center">
          <span className="ml-2 text-base">{selectedDate ? selectedDate.toLocaleDateString() : text}</span>
        </div>
        {isOpen ? <RiArrowDropUpLine className="h-6 w-6" /> : <RiArrowDropDownLine className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div ref={datePickerRef} className="absolute left-0 right-0 z-10">
          <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
        </div>
      )}
    </div>
  );
}
