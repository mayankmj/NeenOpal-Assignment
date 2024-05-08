import React, { useState } from "react";
import "./EditModal.css";
import { FaTimes } from "react-icons/fa";

const EditModal = ({ user, onUpdateUser, onClose }) => {
  const initialErrors = {
    name: null,
    email: null,
    mobile: null,
    website: null,
  };
 const [editedUser, setEditedUser] = useState({ ...user });
  const [clickedLabel, setClickedLabel] = useState(null);
  const [fieldErrors, setFieldErrors] = useState(initialErrors);

   const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
    setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const handleSave = () => {
    const newErrors = { ...initialErrors };
    Object.entries(editedUser).forEach(([key, value]) => {
      if (!value && key !== "id") {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;
      } else if (key === "email" && !isValidEmail(value)) {
        newErrors[key] = "Invalid email format";
      }
    });
    if (Object.values(newErrors).some((error) => error !== null)) {
      setFieldErrors(newErrors);
      return;
    }
    setFieldErrors(initialErrors);
    onUpdateUser(editedUser);
    onClose();
  };

  const handleLabelClick = (labelName) => {
    setClickedLabel(labelName);
  };
  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <div className="edit-modal-header">
          <h2 className="edit-modal-heading">Edit User</h2>
          <button className="close-icon" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="horizontal-line"></div>
        <div className="edit-modal-details">
          <div className="edit-modal-details-row">
            
            <label className={clickedLabel === "name" ? "clicked" : ""}
              onClick={() => handleLabelClick("name")}
            ><span className="required">*</span>Name: </label>
            <div>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              style={{
                width: "300px",
                borderColor: fieldErrors.name ? "red" : "",
                 "box-shadow": fieldErrors.name ? "0 0 5px red;" : ""
              }}
            />
             {fieldErrors.name && <div className="error-message">{fieldErrors.name}</div>}
             </div>
          </div>
          <div className="edit-modal-details-row">
           
            <label className={clickedLabel === "email" ? "clicked" : ""}
              onClick={() => handleLabelClick("email")}
            > <span className="required">*</span>Email: </label>
            <div>
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              style={{
                width: "300px",
                borderColor: fieldErrors.email ? "red" : "",
                 "box-shadow": fieldErrors.email ? "0 0 5px red;" : ""
              }}
            />
              {fieldErrors.email && <div className="error-message">{fieldErrors.email}</div>}
            </div>
          </div>
           
          <div className="edit-modal-details-row">
            
            <label className={clickedLabel === "mobile" ? "clicked" : ""}
              onClick={() => handleLabelClick("mobile")}
            > <span className="required">*</span>Mobile:</label>
            <div>
            <input
              type="text"
              name="mobile"
              value={editedUser.mobile}
              onChange={handleChange}
              style={{
                width: "300px",
                borderColor: fieldErrors.mobile ? "red" : "",
                 "box-shadow":fieldErrors.mobile ? "0 0 5px red;" : ""
              }}
            />
              {fieldErrors.mobile && <div className="error-message">{fieldErrors.mobile}</div>}
            </div>
          </div>
          <div className="edit-modal-details-row">
           
            <label className={clickedLabel === "website" ? "clicked" : ""}
              onClick={() => handleLabelClick("website")}
            > <span className="required">*</span>Website:</label>
            <div>
            <input
              type="text"
              name="website"
              value={editedUser.website}
              onChange={handleChange}
              style={{
                width: "300px",
                borderColor: fieldErrors.website ? "red" : "",
                 "box-shadow": fieldErrors.website ? "0 0 10px 2px rgba(255, 0, 0, 0.5);" : ""
              }}
            />
            {fieldErrors.website && <div className="error-message">{fieldErrors.website}</div>}
            </div>
          </div>
        </div>
        <div className="horizontal-line1"></div>
        <div className="edit-modal-buttons">
          <button  onClick={onClose} className="edit-modal-cancel-button">Cancel</button>
          <button onClick={handleSave} className="edit-modal-ok-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
