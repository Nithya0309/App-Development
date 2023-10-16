// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from './Loader'; // Import your Loader component

const Dashboard = () => {
  const [loading, setLoading] = useState(true); // Step 2: Create loading state
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Step 3: Simulate loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 3000); // Adjust the delay time as needed (e.g., 3000 milliseconds = 3 seconds)

    return () => {
      clearTimeout(loadingTimeout); // Clear the timeout if the component unmounts
    };
  }, []);

  const HandleLogout = () => {
    dispatch(logout());
    nav('/');
  };

  // Step 4: Conditionally render loader or content based on loading state
  return (
    <div className="container">
      {loading ? (
        <Loader /> // Render the loader while loading is true
      ) : (
        <>
          <h1>Admin Dashboard</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Users</h5>
                  <p className="card-text">View and manage user accounts.</p>
                  <button href="" className="btn btn-primary">
                    Go to Users
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Track Orders</h5>
                  <p className="card-text">
                    Track and manage customer orders.
                  </p>
                  <button href="" className="btn btn-primary">
                    Go to Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Manage Products</h5>
                  <p className="card-text">
                    Add, edit, or delete products in your inventory.
                  </p>
                  <button href="" className="btn btn-primary">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={HandleLogout}>
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
