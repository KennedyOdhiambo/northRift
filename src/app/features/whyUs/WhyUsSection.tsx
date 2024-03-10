import React from 'react';
import WhyUsCard from './WhyUsCard';

export default function WhyUsSection() {
  return (
    <div className="px-10 mb-5 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">
        Why <span className="text-red-400">Choose</span> Us ?
      </h1>

      <div className="flex fex-row w-full justify-center gap-32 items-center">
        <WhyUsCard
          imageSrc="/seats.svg"
          heading="Comfort Seats"
          description=" Our buses are equipped with large and comfortable seats."
        />
        <WhyUsCard
          imageSrc="/payment.svg"
          heading="Flexible Payment"
          description="Pay conveniently via M-pesa or mobile banking options"
        />
        <WhyUsCard
          imageSrc="/route.svg"
          heading="Extensive Route"
          description="We are well equipesd with an large bus network."
        />
      </div>
    </div>
  );
}
