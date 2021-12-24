import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Toolbar } from '../../components';
import { getLocationById, deleteLocation } from './location.slice';

export const LocationDetailScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const location = useSelector((state) => getLocationById(state, params.id));

  return (
    <>
      <Toolbar title="Location details screen" />

      <section>
        <div className="location" key={location.id}>
          <p className="name">{location.name}</p>
          <p className="address">{location.address}</p>
          <div className="cord">
            <p>{location.lng}</p>
            <p>{location.lat}</p>
          </div>
          <div className="categories">
            {location.categories.map((cat, index) => (
              <p key={index}>{cat}</p>
            ))}
          </div>

          <Link to={`/locations/${location.id}/edit`}>Edit</Link>
          <button
            onClick={() => {
              dispatch(deleteLocation(location.id));
              navigate('/locations');
            }}
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
};
