import React from 'react';

export const Toolbar = ({ title, actions = [] }) => {
  return (
    <section className="toolbar">
      <div className="left" />
      <p>{title}</p>
      <div>
        {actions.map((action, index) => {
          return (
            <button key={index} onClick={action.onClick}>
              {action?.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
