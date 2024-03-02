import BusSeatComponent from '@/app/shuttles/components/BusSeatComponent';
import React from 'react';

const sampleSeatData = [
  { id: 1, status: 'available' },
  { id: 2, status: 'booked' },
  { id: 3, status: 'available' },
  { id: 4, status: 'selected' },
  { id: 5, status: 'available' },
  { id: 6, status: 'booked' },
  { id: 7, status: 'available' },
  { id: 8, status: 'booked' },
  { id: 9, status: 'available' },
  { id: 10, status: 'booked' },
  { id: 11, status: 'available' },
  { id: 12, status: 'booked' },
  { id: 13, status: 'available' },
  { id: 14, status: 'booked' },
];

export default function Booking() {
  return (
    <div>
      <BusSeatComponent seatData={sampleSeatData} />
    </div>
  );
}
