import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AdminDashboard.css';

import db from '../firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'applications'));
        const apps = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setApplications(apps);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const appRef = doc(db, 'applications', id);
      await updateDoc(appRef, { status: newStatus });

      // Update UI immediately
      setApplications(prev =>
        prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const approved = applications.filter(app => app.status === 'Approved').length;
  const pending = applications.filter(app => app.status === 'Pending').length;

  return (
    <>
      <Navbar />

      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>

        <div className="stats-summary">
          <div className="stat-box">Total: {applications.length}</div>
          <div className="stat-box">Approved: {approved}</div>
          <div className="stat-box">Pending: {pending}</div>
        </div>

        <div className="applications-section">
          <h2>Applications</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Program</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.firstName} {app.lastName}</td>
                  <td>{app.email}</td>
                  <td>{app.primary}</td>
                  <td>{app.status}</td>
                  <td>{app.date}</td>
                  <td>
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
