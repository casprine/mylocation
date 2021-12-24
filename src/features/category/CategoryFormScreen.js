/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

import { Toolbar } from '../../components';
import { addCategory, editCategory as editCategoryFn, getCategoryById } from '../../app/store.slice';

export const CategoryFormScreen = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [mode, setMode] = useState('create');
  const navigate = useNavigate();

  const params = useParams();

  const nameFromState = useSelector((state) => getCategoryById(state, params.id));

  useEffect(() => {
    if (params.id && nameFromState) {
      setMode('edit');
      setName(nameFromState);
    } else {
      navigate('/categories/new');
    }
  }, [params.id]);

  function createLocation(e) {
    e.preventDefault();

    const id = uuid();
    dispatch(addCategory({ id, formState: { name, id } }));
    navigate(`/categories/${id}`);
  }

  function editLocation(e) {
    e?.preventDefault();

    dispatch(editCategoryFn({ id: params.id, name }));
  }

  return (
    <>
      <Toolbar title={mode === 'create' ? 'Add new Location' : 'Edit Location'} />
      <div className="collection-form-container">
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                const { value } = e.target;
                setName(value);
              }}
            />
          </div>

          <button type="submit" onClick={mode === 'edit' ? editLocation : createLocation} className="cta-btn">
            {mode === 'edit' ? 'Save' : 'Create '}
          </button>
        </form>
      </div>
    </>
  );
};
