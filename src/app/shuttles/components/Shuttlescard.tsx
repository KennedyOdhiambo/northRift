import React from 'react';
import AvailableShuttles from './AvailableShuttles';

export default function Shuttlescard() {
  return (
    <div className="flex flex-col gap-8 px-10 py-5">
      <AvailableShuttles />
      <AvailableShuttles />
      <AvailableShuttles />
      <AvailableShuttles />
      <AvailableShuttles />
    </div>
  );
}
