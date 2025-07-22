import { createContext, useContext, useState, ReactNode } from 'react';

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
    address: '2909 Canoe Creek Rd, St Cloud, FL 34772, United States',
    phone: '+14077447328',
    googleMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.8!2d-81.311!3d28.247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2909%20Canoe%20Creek%20Rd%2C%20St%20Cloud%2C%20FL%2034772!5e0!3m2!1sen!2sus!4v1',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: '9:00 AM - 12:00 PM'
    }
  },
  {
    id: 'stcloud',
    name: 'Authentic Cuts Barbershop II',
    address: '3445 13th St, St Cloud, FL 34769, United States',
    phone: '+14075936622',
    googleMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.8!2d-81.3117598!3d28.2470583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z3445%2013th%20St%2C%20St%20Cloud%2C%20FL%2034769!5e0!3m2!1sen!2sus!4v2',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
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