import Image from 'next/image';
import TripSelection from '@/app/components/TripSelection';
import ScheduledDepartures from './components/ScheduledDepartures';

export default function Home() {
  return (
    <main className="">
      <div className="relative text-center min-h-full max-w-full">
        <Image src="/heroImage.svg" alt="bus image" width={2000} height={500} />
        <div className="absolute z-50 inset-x-0 bottom-0 transform translate-y-10 max-w-full">
          <TripSelection />
        </div>
        <div className="absolute mt-24 w-full text-center max-w-full">
          <ScheduledDepartures />
        </div>
      </div>
    </main>
  );
}
