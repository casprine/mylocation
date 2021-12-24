/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

import { Toolbar } from '../../components';
import {
  addLocation,
  editLocation as editLocationFn,
  getLocationById,
  categoriesSelector,
} from '../../app/store.slice';

// utils
function validateArray(array) {
  return !Boolean(array.filter(Boolean).length);
}

export const LocationFormScreen = () => {
  const categories = Object.values(useSelector(categoriesSelector));

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
    navigate(`/locations/${id}`);
  }

  function editLocation(e) {
    e?.preventDefault();

    dispatch(editLocationFn(formState));
  }

  function validateInput() {
    const { categories, ...rest } = formState;

    const validFields = validateArray(Object.values(rest));
    const validCategories = validateArray(categories);

    return validFields || validCategories;
  }

  const enableInputs = Boolean(categories.length);
  const disableButton = validateInput();

  return (
    <>
      <Toolbar title={mode === 'create' ? 'Add new Location' : 'Edit Location'} />
      <div className="collection-form-container">
        {!enableInputs && <p className="error">Please add a category first </p>}

        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" value={formState.name} onChange={handleInputChange} />
          </div>

          <div className="form-control">
            <label htmlFor="Address">Address</label>
            <input required type="text" name="address" value={formState.address} onChange={handleInputChange} />
          </div>

          <div className="form-control">
            <label htmlFor="longitude">Longitude</label>
            <input required type="number" name="lng" value={formState.lng} onChange={handleInputChange} />
          </div>

          <div className="form-control">
            <label htmlFor="latitude">Latitude</label>
            <input required type="number" name="lat" value={formState.lat} onChange={handleInputChange} />
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              isDisabled={!Boolean(categories.length)}
              options={categories.map((cat) => ({ label: cat.name, value: String(cat.name).toLowerCase() }))}
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

          <button
            disabled={disableButton}
            type="submit"
            onClick={mode === 'edit' ? editLocation : createLocation}
            className="cta-btn"
          >
            {mode === 'edit' ? 'Save' : 'Create '}
          </button>
        </form>
      </div>
    </>
  );
};
