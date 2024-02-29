import Image from 'next/image';
import TripSelection from '@/app/booking/components/TripSelection';
import ScheduledDepartures from './booking/components/ScheduledDepartures';
import Shuttlescard from './shuttles/components/Shuttlescard';

export default function Home() {
  return (
    <main className="">
      <div className="relative text-center">
        <Image src="/heroImage.svg" alt="bus image" width={2000} height={500} />
        <div className="absolute z-50 inset-x-0 bottom-0 transform translate-y-10">
          <TripSelection />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 absolute mt-12 w-full max-w-full  p-10">
          <ScheduledDepartures />
          <Shuttlescard />
        </div>
      </div>
    </main>
  );
}
