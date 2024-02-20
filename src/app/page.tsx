import TripType from "@/components/TripType";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main>
      <div className="min-w-full relative text-center">
        <img src="/heroImage.svg" alt="bus image"></img>
        <div className="absolute inset-x-0 bottom-0 transform -translate-y-1/2">
          <TripType />
        </div>
      </div>
    </main>
  );
}
