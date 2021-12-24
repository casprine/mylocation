import React from 'react';
import { Link } from 'react-router-dom';

export const BottomNavbar = () => {
  return (
    <section className="bottom-bar">
      <Link to="/categories">
        <p>Categories</p>
      </Link>

      <Link to="/locations">
        <p>Locations</p>
      </Link>
    </section>
  );
};
