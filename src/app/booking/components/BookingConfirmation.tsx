import Button from '@/app/components/Button';
import TransitInfoCard from '@/app/shuttles/components/TransitInfoCard';
import React from 'react';
import { FaCalendar, FaClock, FaRoute } from 'react-icons/fa6';

export default function BookingConfirmation() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-3 items-center">
        <TransitInfoCard title="Route:" details="Nairobi to Eldoret" icon={<FaRoute />} />
        <TransitInfoCard title="Date:" details="01/01/2023" icon={<FaCalendar />} />
        <TransitInfoCard title="Departure:" details="11:45 AM" icon={<FaClock />} />
      </div>
      <h1 className=" text-lg font-bold text-stone-900 w-full text-center">Passenger Details:</h1>
      <p className="text-base font-semibold">
        selected Seat : <span>5</span>
      </p>

      <div className="flex flex-col gap-3">
        <div>
          <label className=" text-stone-600" htmlFor="passenger-name">
            Passenger Name
          </label>
          <input type="text" id="passenger-name" />
        </div>
        <div>
          <label className="text-stone-600" htmlFor="phone-number">
            Phone Number
          </label>
          <input type="tel" id="phone-number" />
        </div>
      </div>

      <Button type="primary">Proceed to Payment </Button>
    </div>
  );
}
