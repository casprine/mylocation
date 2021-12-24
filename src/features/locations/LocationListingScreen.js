import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { locationsSelector, deleteLocation } from '../../app/store.slice';

import { Toolbar } from '../../components';

export const LocationListingScreen = () => {
  const normalizedLocations = useSelector(locationsSelector);
  const dispatch = useDispatch();
  const locations = Object.values(normalizedLocations);
  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        title="Locations"
        actions={[
          {
            label: 'Add Location',
            onClick: () => navigate('/locations/new'),
          },
        ]}
      />
      <div className="container">
        <div className="flex-container location-listing">
          {locations.map((location) => {
            return (
              <Link to={`/locations/${location.id}`} key={location.id}>
                <div className="location">
                  <p className="option">
                    <span className="label">Name</span>
                    <span className="value">{location.name}</span>
                  </p>

                  <p className="option">
                    <span className="label">Address</span>
                    <span className="value">{location.address}</span>
                  </p>

                  <p className="option">
                    <span className="label">Lontitude</span>
                    <span className="value">{location.lng}</span>
                  </p>

                  <p className="option">
                    <span className="label">Latitude</span>
                    <span className="value">{location.lat}</span>
                  </p>

                  <div className="categories">
                    {location.categories.map((cat, index) => (
                      <p key={index}>{cat}</p>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(`/locations/${location.id}/edit`);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch(deleteLocation(location.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
