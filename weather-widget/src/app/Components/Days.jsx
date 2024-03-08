import React from "react";

export default function Days() {
    const getDay = () => {
        let currentDate = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let currentDay = days[currentDate.getDay()];

        return currentDay;
    }

    const dayOfWeek = getDay();

    return <p className="text-center mt-16 text-xl">{dayOfWeek}</p>
}