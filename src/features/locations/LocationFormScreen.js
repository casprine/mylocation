import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { Toolbar } from '../../components';
import { addLocation } from './location.slice';
import { useState } from 'react';

export const LocationFormScreen = () => {
  const dispatch = useDispatch();

  const sampleCategories = ['home', 'school', 'work'];

  const [formState, setFormState] = useState({
    name: '',
    address: '',
    lng: '',
    lat: '',
    categories: [],
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const editMode = false;

  function createLocation(e) {
    e.preventDefault();

    const id = uuid();
    dispatch(addLocation({ id, formState: { ...formState, id } }));
  }

  function editLocation(e) {
    e.preventDefault();
  }

  return (
    <>
      <Toolbar title={!editMode ? 'Add new Location' : 'Edit Location'} />
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
              onChange={(selectedValues) => {
                setFormState((prev) => ({
                  ...prev,
                  categories: selectedValues.map(({ value }) => value),
                }));
              }}
            />
          </div>

          <button type="submit" onClick={editMode ? editLocation : createLocation}>
            {editMode ? 'Save' : 'Create '}
          </button>
        </form>
      </div>
    </>
  );
};
