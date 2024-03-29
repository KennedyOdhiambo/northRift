'use client';

import Image from 'next/image';
import TripSelection from '@/app/features/booking/TripSelection';
import ScheduledDepartures from './features/booking/ScheduledDepartures';
import Booking from './features/booking/Booking';
import { useState } from 'react';
import ModalWindow from './components/ModalWindow';

import WhyUsSection from './features/whyUs/WhyUsSection';
import TestimonialsSection from './features/testimonials/TestimonialsSection';
import Footer from './components/Footer';

export default function Home() {
  const [bookingModal, setBookingModal] = useState(false);
  return (
    <>
      <main className="">
        <div className="relative text-center">
          <Image src="/heroImage.svg" alt="bus image" width={2000} height={500} />
          <div className="absolute z-50 inset-x-0 bottom-0 transform translate-y-10">
            <TripSelection />
          </div>
          <div className=" absolute mt-28 w-full">
            <div className="flex flex-col justify-center items-center gap-20 px-10 ">
              <ScheduledDepartures />
              {/* <Shuttlescard setBookingModal={setBookingModal} /> */}
              <WhyUsSection />
              <TestimonialsSection />
            </div>
            <Footer />
          </div>
        </div>
      </main>

      <ModalWindow showmodal={bookingModal}>{<Booking onModalClose={() => setBookingModal(false)} />}</ModalWindow>
    </>
  );
}
