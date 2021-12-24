import React from 'react';
import Select from 'react-select';
import { Toolbar } from '../../components';

export const LocationFormScreen = () => {
  const editMode = false;

  function createLocation(e) {
    e.preventDefault();
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
            <input type="text" name="name" />
          </div>

          <div className="form-control">
            <label htmlFor="Address">Address</label>
            <input type="text" name="name" />
          </div>

          <div className="split-flex-container">
            <div className="form-control">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" />
            </div>

            <div className="form-control">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select options={[]} />
          </div>

          <button type="submit" onClick={editMode ? editLocation : createLocation}>
            {editMode ? 'Save' : 'Create '}
          </button>
        </form>
      </div>
    </>
  );
};
