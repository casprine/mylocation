import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Toolbar } from '../../components';
import { deleteCategory, categoriesSelector } from '../../app/store.slice';

export const CategoryListingScreen = () => {
  const normalizedCategories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  const categories = Object.values(normalizedCategories);
  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        title="Categories"
        actions={[
          {
            label: 'Add new category',
            onClick: () => navigate('/categories/new'),
          },
        ]}
      />

      <div className="container">
        <div className="flex-container location-listing">
          {categories.map((category) => {
            return (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <div className="location">
                  <p className="option">
                    <span className="label">Name</span>
                    <span className="value">{category.name}</span>
                  </p>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate(`/locations/${category.id}/edit`);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch(deleteCategory(category.id));
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
