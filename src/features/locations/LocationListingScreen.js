import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { locationSelector } from './location.slice';
import { Toolbar } from '../../components';

export const LocationListingScreen = () => {
  const normalizedLocations = useSelector(locationSelector);

  const locations = Object.values(normalizedLocations);

  return (
    <>
      <Toolbar title="Locations" />
      <div className="flex-container">
        {locations.map((location) => {
          return (
            <div className="location" key={location.id}>
              <p className="name">{location.name}</p>
              <p className="address">{location.address}</p>
              <div className="cord">
                <p>{location.lng}</p>
                <p>{location.lat}</p>
              </div>
              <div className="categories">
                {location.categories.map((cat) => (
                  <p>{cat}</p>
                ))}
              </div>

              <Link to={`/locations/edit?id=${location.id}`}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
