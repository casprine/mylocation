/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

import { Toolbar } from '../../components';
import { addLocation, editLocation as editLocationFn } from './location.slice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLocationById } from '.';

export const LocationFormScreen = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('create');
  const navigate = useNavigate();

  const params = useParams();

  const location = useSelector((state) => getLocationById(state, params.id));

  const [formState, setFormState] = useState({
    name: '',
    address: '',
    lng: '',
    lat: '',
    categories: [],
  });

  useEffect(() => {
    if (params.id && location) {
      setMode('edit');
      setFormState(location);
    } else {
      navigate('/locations/new');
    }
  }, [params.id]);

  const sampleCategories = ['home', 'school', 'work'];

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function createLocation(e) {
    e.preventDefault();

    const id = uuid();
    dispatch(addLocation({ id, formState: { ...formState, id } }));
  }

  function editLocation(e) {
    e?.preventDefault();

    dispatch(editLocationFn(formState));
  }

  return (
    <>
      <Toolbar title={mode === 'create' ? 'Add new Location' : 'Edit Location'} />
      <div className="collection-form-container">
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
          </div>

          <div className="form-control">
            <label htmlFor="Address">Address</label>
            <input type="text" name="address" value={formState.address} onChange={handleInputChange} />
          </div>

          <div className="split-flex-container">
            <div className="form-control">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="lng" value={formState.lng} onChange={handleInputChange} />
            </div>

            <div className="form-control">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="lat" value={formState.lat} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              options={sampleCategories.map((cat) => ({ label: cat, value: cat }))}
              isMulti
              value={formState.categories.map((cat) => ({ label: cat, value: cat }))}
              onChange={(selectedValues) => {
                setFormState((prev) => ({
                  ...prev,
                  categories: selectedValues.map(({ value }) => value),
                }));
              }}
            />
          </div>

          <button type="submit" onClick={mode === 'edit' ? editLocation : createLocation}>
            {mode === 'edit' ? 'Save' : 'Create '}
          </button>
        </form>
      </div>
    </>
  );
};
