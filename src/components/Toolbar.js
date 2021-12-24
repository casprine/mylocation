import React from 'react';

export const Toolbar = ({ title, actions = [] }) => {
  return (
    <section className="toolbar">
      <div className="left" />
      <p>{title}</p>
      <div></div>
    </section>
  );
};
