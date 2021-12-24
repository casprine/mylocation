import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Toolbar, MapView } from '../../components';
import { getLocationById, deleteLocation } from '../../app/store.slice';

export const LocationDetailScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const location = useSelector((state) => getLocationById(state, params.id));

  return (
    <>
      <Toolbar title="Location details screen" />

      <section className="location-detail-view-container">
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

          <div className="flex-container">
            <Link to={`/locations/${location.id}/edit`}>Edit</Link>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => {
                dispatch(deleteLocation(location.id));
                navigate('/locations');
              }}
            >
              Delete
            </button>
          </div>
        </div>

        <MapView position={{ lat: Number(location.lat), lng: Number(location.lng) }} />
      </section>
    </>
  );
};
