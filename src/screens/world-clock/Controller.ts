import { useState } from 'react';
import { LocationDataType } from './types';

const useClockController = () => {
  const [locations, setLocations] = useState<LocationDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSelectLocation = (loc: LocationDataType) => {
    const notPresent = locations.findIndex((location) => location.fields.asciiname === loc.fields.asciiname);
    if (notPresent) {
      const newLocations = [...locations, loc];
      setLocations(newLocations);
    }
  }

  const removeItemHandler = (asciiname: string) => {
    const newLocations = locations.filter((item) => item.fields.asciiname !== asciiname);
    setLocations(newLocations);
  }

  return {
    isLoading: isLoading,
    locations: locations,
    onSelectLocation: onSelectLocation,
    removeItemHandler: removeItemHandler,
    // getData: getData,
  };
}

export default useClockController;