import React from 'react';
import AvailableShuttles from './AvailableShuttles';

export default function Shuttlescard() {
  return (
    <div className="flex w-full items-center flex-col gap-8 px-10 py-5 bg-slate-50">
      <AvailableShuttles />
      <AvailableShuttles />
      <AvailableShuttles />
      <AvailableShuttles />
    </div>
  );
}
