'use client';
import { useState } from 'react';
import Button from '../../components/Button';
import TravelForm from './TravelForm';

export default function TripSelection() {
  const [isOneWaySelected, setOneWaySelected] = useState(true);
  const [isRoundTripSelected, setRoundTripSelected] = useState(false);
  const [returnTrip, setReturnTrip] = useState(false);

  const handleOneWayClick = () => {
    setOneWaySelected(true);
    setRoundTripSelected(false);
    setReturnTrip(false);
  };

  const handleRoundTripClick = () => {
    setOneWaySelected(false);
    setRoundTripSelected(true);
    setReturnTrip(true);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Button type={'variable'} onClick={handleOneWayClick} selected={isOneWaySelected}>
            One Way
          </Button>
          <Button type={'variable'} onClick={handleRoundTripClick} selected={isRoundTripSelected}>
            Round Trip
          </Button>
        </div>
        <TravelForm returnTrip={returnTrip} />
      </div>
    </div>
  );
}
