import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Toolbar } from '../../components';
import { getLocationsByCategoryId } from '../../app/store.slice';

export const CategoryDetailScreen = () => {
  const params = useParams();

  const categoryData = useSelector((state) => getLocationsByCategoryId(state, params.id));

  return (
    <>
      <Toolbar title={categoryData.name.toUpperCase()} />

      <div className="container">
        <div className="flex-container location-listing">
          {categoryData.locations.map((location) => {
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* <section className="location-detail-view-container">
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

      </section> */}
    </>
  );
};
