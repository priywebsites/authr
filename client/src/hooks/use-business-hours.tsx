import { useState, useEffect } from "react";
import { useLocation } from "@/contexts/location-context";

export interface BusinessHours {
  [key: number]: {
    open: number;
    close: number;
    name: string;
  };
}

export function useBusinessHours() {
  const { currentLocation } = useLocation();
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    statusText: string;
  }>({ isOpen: false, statusText: "Checking..." });

  const schedule: BusinessHours = {
    0: { open: 9 * 60, close: 12 * 60, name: "Sunday" }, // Sunday
    1: { open: 9 * 60, close: 18 * 60, name: "Monday" }, // Monday
    2: { open: 9 * 60, close: 18 * 60, name: "Tuesday" }, // Tuesday
    3: { open: 9 * 60, close: 18 * 60, name: "Wednesday" }, // Wednesday
    4: { open: 9 * 60, close: 18 * 60, name: "Thursday" }, // Thursday
    5: { open: 8 * 60, close: 18 * 60, name: "Friday" }, // Friday
    6: { open: 8 * 60, close: 16 * 60, name: "Saturday" }, // Saturday
  };

  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute; // Convert to minutes for easier comparison

      const todaySchedule = schedule[day];

      if (currentTime >= todaySchedule.open && currentTime < todaySchedule.close) {
        setCurrentStatus({
          isOpen: true,
          statusText: "Currently Open",
        });
      } else {
        setCurrentStatus({
          isOpen: false,
          statusText: "Currently Closed",
        });
      }
    }

    updateStatus();
    // Update every minute
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, [currentLocation]);

  const getScheduleDisplay = () => [
    { day: "Saturday", hours: currentLocation.hours.saturday },
    { day: "Sunday", hours: currentLocation.hours.sunday },
    { day: "Monday", hours: currentLocation.hours.monday },
    { day: "Tuesday", hours: currentLocation.hours.tuesday },
    { day: "Wednesday", hours: currentLocation.hours.wednesday },
    { day: "Thursday", hours: currentLocation.hours.thursday },
    { day: "Friday", hours: currentLocation.hours.friday },
  ];

  return {
    currentStatus,
    schedule: getScheduleDisplay(),
  };
}
