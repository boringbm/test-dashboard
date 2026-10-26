import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="text-muted">Total Users: 1,234</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="text-muted">Total Orders: 567</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="text-muted">$15,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Sales Graph</h5>
              <div className="chart">
                <svg viewBox="0 0 400 200" className="w-100">
                  <polyline
                    fill="none"
                    stroke="#0d6efd"
                    strokeWidth="2"
                    points="0,150 50,100 100,120 150,50 200,80 250,30 300,60 350,20 400,40"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">User Table</h5>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bob Johnson</td>
                    <td>bob@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
