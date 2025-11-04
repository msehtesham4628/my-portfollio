import React from 'react';

export default function SolarSystem() {
  return (
    <div className="solar-system" aria-hidden="true">
      <div className="sun" />

      <div className="orbit orbit-1">
        <div className="planet mercury" />
      </div>

      <div className="orbit orbit-2">
        <div className="planet venus" />
      </div>

      <div className="orbit orbit-3">
        <div className="planet earth" />
        <div className="moon orbiting" />
      </div>

      <div className="orbit orbit-4">
        <div className="planet mars" />
      </div>

      <div className="orbit orbit-5">
        <div className="planet jupiter" />
      </div>

      <div className="orbit orbit-6">
        <div className="planet saturn" />
        <div className="ring" />
      </div>

      <div className="orbit orbit-7">
        <div className="planet uranus" />
      </div>

      <div className="orbit orbit-8">
        <div className="planet neptune" />
      </div>
    </div>
  );
}
