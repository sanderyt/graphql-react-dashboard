import React from "react";

const DashboardCard = ({ children, onSubmit }) => {
  return (
    <div className="dashboard-card">
      {children}
      <div className="dashboard-card__action">
        <button className="btn" onClick={onSubmit}>
          Add project
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
