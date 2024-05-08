import React, { useState } from "react";
import Card from "../Components/Card";
import "../Styles/Main.css";
import EditModal from "../Modal/EditModal";
import image1 from "../Components/Assests/image.jpg";
import image2 from "../Components/Assests/image2.svg";
import image3 from "../Components/Assests/image3.svg";
import image4 from "../Components/Assests/image4.svg";
import image5 from "../Components/Assests/image5.svg";
import image6 from "../Components/Assests/image6.jpg";
const Main = () => {
  const usersData = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      mobile: "1-770-736-8031",
      image: image1,
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "aShanna@melissa.tv",
      mobile: "9876543210",
      image: image2,
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      mobile: "9712467128",
      image: image3,
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "bob@example.com",
      mobile: "5555555555",
      image: image4,
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      mobile: "7212871281",
      image: image5,
      website: "elvis.io",
    },
    {
      id: 6,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@gmail.com",
      mobile: "9172625212",
      image: image6,
      website: "demarco.info",
    },
    {
      id: 7,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      mobile: "8712435678",
      image: image2,
      website: "ambrose.net",
    },
    {
      id: 8,
      name: "Glenna Reichert",
      email: "bob@example.com",
      mobile: "5555555555",
      image: image1,
      website: "conrad.com",
    },
  ];

  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState(usersData);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUserData = userData.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );

    setUserData(updatedUserData);
    setEditingUser(null);
  };

  const handleCloseModal = () => {
    setEditingUser(null);
  };

  const handleDelete = (userId) => {
    const updatedUserData = userData.filter((user) => user.id !== userId);
    setUserData(updatedUserData);
  };

  return (
    <div className="card-container">
      {userData.map((user, index) => (
        <Card
          key={index}
          user={user}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      {editingUser && (
        <EditModal
          user={editingUser}
          onUpdateUser={handleUpdateUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Main;
