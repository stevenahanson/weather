"use client";

import React from "react";
import { BeatLoader } from 'react-spinners';

import WeatherWidget from "./Components/WeatherWidget";
import WeatherData from "./Components/WeatherData";

export default function Home() {
  const { weather, loading } = WeatherData();

  return (
    <div className='flex w-full h-full content-around'>
      {loading ? (
        <BeatLoader color={'#123abc'} loading={loading} />
      ) : weather ? (
        <WeatherWidget weather={weather}/>
      ) : (
        <p>Error: Unable to get weather, Please try again</p>
      )}
    </div>
  );
}
