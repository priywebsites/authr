import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface LocationData {
  id: string;
  name: string;
  address: string;
  phone: string;
  googleMapsLink: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  logoPath?: string;
}

const locations: LocationData[] = [
  {
    id: 'kissimmee',
    name: 'Authentic Cuts Barbershop',
    address: '2417 13th St, St Cloud, FL 34769, United States',
    phone: '+14077447328',
    googleMapsLink: 'https://www.google.com/maps/place/Authentic+Cuts+Barbershop/@28.247,-81.311,17z',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 'stcloud',
    name: 'Authentic Cuts Barbershop II',
    address: '3445 13th St, St Cloud, FL 34769, United States',
    phone: '+14075936622',
    googleMapsLink: 'https://www.google.com/maps/place/Authentic+Cuts+Barbershop+II/@28.2470583,-81.3117598,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd8fcb543c1aa7:0xabe4cc5952655871!8m2!3d28.2470536!4d-81.3091849!16s%2Fg%2F11r9qjnmxh?entry=ttu',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed'
    },
    logoPath: '@assets/image0 (2)_1753129890740.png'
  }
];

interface LocationContextType {
  currentLocation: LocationData;
  locations: LocationData[];
  switchLocation: (locationId: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocationId, setCurrentLocationId] = useState('kissimmee');
  
  const currentLocation = locations.find(loc => loc.id === currentLocationId) || locations[0];
  
  const switchLocation = (locationId: string) => {
    setCurrentLocationId(locationId);
  };

  return (
    <LocationContext.Provider value={{
      currentLocation,
      locations,
      switchLocation
    }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}