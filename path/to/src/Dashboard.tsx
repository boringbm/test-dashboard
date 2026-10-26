import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-page py-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1 text-dark">Admin Dashboard</h2>
            <p className="text-secondary mb-0">Overview of key metrics and recent activity</p>
          </div>
          <span className="badge bg-primary px-3 py-2 rounded-pill">Live Updates</span>
        </div>

        {/* Top Metric Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0 stat-card stat-card-users text-white">
              <div className="card-body">
                <span className="text-uppercase fw-semibold tracking-wide small text-white-50">Audience</span>
                <h5 className="card-title mt-1 fw-bold">Users</h5>
                <p className="display-6 fw-bold mb-1">1,234</p>
                <small className="text-white-75">+12% from last month</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0 stat-card stat-card-orders text-white">
              <div className="card-body">
                <span className="text-uppercase fw-semibold tracking-wide small text-white-50">Fulfillment</span>
                <h5 className="card-title mt-1 fw-bold">Orders</h5>
                <p className="display-6 fw-bold mb-1">567</p>
                <small className="text-white-75">+5.4% from last week</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0 stat-card stat-card-revenue text-white">
              <div className="card-body">
                <span className="text-uppercase fw-semibold tracking-wide small text-white-50">Financials</span>
                <h5 className="card-title mt-1 fw-bold">Revenue</h5>
                <p className="display-6 fw-bold mb-1">$15,000</p>
                <small className="text-white-75">+18.2% this quarter</small>
              </div>
            </div>
          </div>
        </div>

        {/* Chart & Table Row */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0 rounded-3 overflow-hidden bg-white">
              <div className="card-header bg-white border-0 pt-4 pb-0 px-4">
                <h5 className="card-title fw-bold text-dark mb-0">Sales Graph</h5>
                <p className="text-muted small mb-0">Performance trend over recent periods</p>
              </div>
              <div className="card-body px-4 pb-4">
                <div className="chart-wrapper rounded-3 p-3">
                  <svg viewBox="0 0 400 200" className="w-100">
                    <defs>
                      <linearGradient id="salesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0d6efd" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      fill="url(#salesGrad)"
                      points="0,150 50,100 100,120 150,50 200,80 250,30 300,60 350,20 400,40 400,200 0,200"
                    />
                    <polyline
                      fill="none"
                      stroke="#0d6efd"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="0,150 50,100 100,120 150,50 200,80 250,30 300,60 350,20 400,40"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0 rounded-3 overflow-hidden bg-white">
              <div className="card-header bg-white border-0 pt-4 pb-0 px-4">
                <h5 className="card-title fw-bold text-dark mb-0">User Table</h5>
                <p className="text-muted small mb-0">Latest registered accounts</p>
              </div>
              <div className="card-body px-4 pb-4">
                <div className="table-responsive rounded-3 overflow-hidden">
                  <table className="table table-hover table-striped mb-0 custom-dashboard-table">
                    <thead className="table-dark">
                      <tr>
                        <th className="py-3 px-3">ID</th>
                        <th className="py-3 px-3">Name</th>
                        <th className="py-3 px-3">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-3 fw-semibold text-secondary">#1</td>
                        <td className="py-3 px-3 fw-medium">John Doe</td>
                        <td className="py-3 px-3 text-muted">john@example.com</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 fw-semibold text-secondary">#2</td>
                        <td className="py-3 px-3 fw-medium">Jane Smith</td>
                        <td className="py-3 px-3 text-muted">jane@example.com</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 fw-semibold text-secondary">#3</td>
                        <td className="py-3 px-3 fw-medium">Bob Johnson</td>
                        <td className="py-3 px-3 text-muted">bob@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
