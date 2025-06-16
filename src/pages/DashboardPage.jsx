import "./DashboardPage.css";
import { useState, useEffect } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const programs = [
  "BS Computer Science",
  "BS English Literature",
  "BS Business Administration",
  "BS Environmental Science",
  "BS Media & Communication",
  "BS Mathematics",
];

const DashboardPage = () => {
  const [activePage, setActivePage] = useState("home");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cnic: "",
    matric: "",
    inter: "",
    board: "",
    primary: "",
    secondary: "",
    third: "",
  });
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(saved);
  }, []);

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError("");
  };

  const validateForm = () => {
    const {
      firstName, lastName, email, phone, cnic,
      matric, inter, board, primary, secondary, third,
    } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    const phoneRegex = /^03\d{9}$/;

    if (!firstName || !lastName || !email || !phone || !cnic || !matric || !inter || !board || !primary || !secondary || !third) {
      return "All fields are required.";
    }
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!cnicRegex.test(cnic)) return "CNIC must be in format xxxxx-xxxxxxx-x";
    if (!phoneRegex.test(phone)) return "Phone must be valid (e.g., 03xxxxxxxxx)";
    if (primary === secondary || primary === third || secondary === third)
      return "Program choices must be different.";

    const exists = applications.find((a) => a.cnic === cnic || a.email === email);
    if (exists) return "You have already applied with this CNIC or Email.";

    return null;
  };

  const handleApplicationSubmit = async () => {
    const validationError = validateForm();
    if (validationError) return setError(validationError);

    const newApp = {
      ...formData,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    const updated = [...applications, newApp];
    localStorage.setItem("applications", JSON.stringify(updated));
    setApplications(updated);

    // ✅ Add to Firestore
    try {
      await addDoc(collection(db, "applications"), newApp);
      console.log("Application saved to Firestore");
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("Something went wrong while saving to the database.");
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cnic: "",
      matric: "",
      inter: "",
      board: "",
      primary: "",
      secondary: "",
      third: "",
    });

    setStep(1);
    setActivePage("applications");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>🎓 SAUS</h2>
        <ul>
          <li className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>Dashboard</li>
          <li className={activePage === "apply" ? "active" : ""} onClick={() => setActivePage("apply")}>Apply Program</li>
          <li className={activePage === "applications" ? "active" : ""} onClick={() => setActivePage("applications")}>My Applications</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        {activePage === "home" && (
          <div className="dashboard-home">
            <h1>Welcome to Your Student Portal</h1>
            <div className="cards">
              <div className="card">Programs Available: {programs.length}</div>
              <div className="card">Applications: {applications.length}</div>
              <div className="card">Approved: {applications.filter((a) => a.status === "Approved").length}</div>
            </div>
          </div>
        )}

        {activePage === "apply" && (
          <div className="form-section">
            <h2>Application Form – Step {step} of 3</h2>
            {error && <p className="form-error">{error}</p>}

            {step === 1 && (
              <div className="form-step">
                <input placeholder="First Name" value={formData.firstName} onChange={(e) => handleFormChange("firstName", e.target.value)} />
                <input placeholder="Last Name" value={formData.lastName} onChange={(e) => handleFormChange("lastName", e.target.value)} />
                <input placeholder="Email" value={formData.email} onChange={(e) => handleFormChange("email", e.target.value)} />
                <input placeholder="Phone Number (03xxxxxxxxx)" value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} />
                <input placeholder="CNIC (xxxxx-xxxxxxx-x)" value={formData.cnic} onChange={(e) => handleFormChange("cnic", e.target.value)} />
                <button onClick={() => setStep(2)}>Next</button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <input placeholder="Matric % or Grade" value={formData.matric} onChange={(e) => handleFormChange("matric", e.target.value)} />
                <input placeholder="Inter % or Grade" value={formData.inter} onChange={(e) => handleFormChange("inter", e.target.value)} />
                <input placeholder="Board Name" value={formData.board} onChange={(e) => handleFormChange("board", e.target.value)} />
                <button onClick={() => setStep(1)}>Back</button>
                <button onClick={() => setStep(3)}>Next</button>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <select value={formData.primary} onChange={(e) => handleFormChange("primary", e.target.value)}>
                  <option value="">Primary Choice Program</option>
                  {programs.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
                <select value={formData.secondary} onChange={(e) => handleFormChange("secondary", e.target.value)}>
                  <option value="">Secondary Choice Program</option>
                  {programs.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
                <select value={formData.third} onChange={(e) => handleFormChange("third", e.target.value)}>
                  <option value="">Third Choice Program</option>
                  {programs.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
                <button onClick={() => setStep(2)}>Back</button>
                <button onClick={handleApplicationSubmit}>Submit Application</button>
              </div>
            )}
          </div>
        )}

        {activePage === "applications" && (
          <div className="application-list">
            <h2>My Applications</h2>
            {applications.length === 0 ? (
              <p>No applications submitted yet.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index}>
                      <td>{app.firstName} {app.lastName}</td>
                      <td>{app.primary}</td>
                      <td>{app.status}</td>
                      <td>{app.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
