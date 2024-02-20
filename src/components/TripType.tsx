"use client";
import { useState } from "react";
import Button from "./Button";

export default function TripType() {
  const [isOneWaySelected, setOneWaySelected] = useState(true);
  const [isRoundTripSelected, setRoundTripSelected] = useState(false);

  const handleOneWayClick = () => {
    setOneWaySelected(true);
    setRoundTripSelected(false);
  };

  const handleRoundTripClick = () => {
    setOneWaySelected(false);
    setRoundTripSelected(true);
  };

  return (
    <div>
      <Button onClick={handleOneWayClick} selected={isOneWaySelected}>
        One Way
      </Button>
      <Button onClick={handleRoundTripClick} selected={isRoundTripSelected}>
        Round Trip
      </Button>
    </div>
  );
}
