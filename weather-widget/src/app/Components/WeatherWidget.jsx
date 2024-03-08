import React from "react";
import DayToday from '../Components/Days';

export default function WeatherWidget({weather}) {
    return (
        <div className="grid grid-cols-2 grid-rows-3 w-50 h-50 content-around rounded-md bg-gradient-to-r bg-slate-500">
          <DayToday />
          <p className="text-center mt-16 text-xl">{weather.city},{weather.country}</p>
          <div className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
          <p className="text-center mt-16 text-2xl">{weather.description}</p>
          <p className="text-center mt-0 text-4xl">{weather.temperature}°C</p>
        </div>
      );
}
