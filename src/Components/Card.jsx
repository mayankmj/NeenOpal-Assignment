import React, { useState } from "react";
import { FaGlobe} from "react-icons/fa";
import { faTrash ,faHeart} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineEdit } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import heartIcon from "./Assests/like-icon.svg";

import "./Card.css";

const Card = ({ user, onEdit, onDelete }) => {
  const { name, email, mobile, image, id, website } = user;
  const [liked, setLiked] = useState(false);

  const handleIconClick = () => {
    setLiked(!liked);
  };

  const handleEditClick = () => {
    onEdit(user);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt="Avatar" className="card-image" />
      </div>
      <div className="card-info">
        <div className="user-details">
          <div className="card-name">{name}</div>
          <div className="contact-icons">
            <MdOutlineMailOutline className="icon-email" />
            <p>{email}</p>
          </div>
          <div className="contact-icons">
            <FiPhone className="icon-phone" />
            <p className="card-email">{mobile}</p>
          </div>
          <div className="contact-icons">
            <FaGlobe className="icon-globe" />
            <p className="card-mobile">https://{website}</p>
          </div>
        </div>
      </div>
      <div className="card-options">
        <div className="option" onClick={handleIconClick}>
         
          {liked ? (
            <FontAwesomeIcon
        icon={faHeart}
        className="options-icon-liked"
      />
          ) : (
            <img
              src={heartIcon}
              className="options-icon-like"
              alt="Not Liked"
            />
          )}
        </div>
        <div className="option" onClick={handleEditClick}>
          <AiOutlineEdit className="options-icon-edit" />
        </div>
        <div className="option" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className="options-icon-delete" />
        </div>
      </div>
      
    </div>
  );
};

export default Card;
