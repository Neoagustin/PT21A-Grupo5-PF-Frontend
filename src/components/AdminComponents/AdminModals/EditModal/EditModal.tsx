import React from "react";
import UserEditModal from "./UsersEditModal/UsersEditModal";
import CoursesEditModal from "./CoursesEditModal/CoursesEditModal";
import { IEditModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";
import ICourse from "@/interfaces/ICourse";

const EditModal: React.FC<IEditModalProps> = ({ data, type, onClose }) => {
  const renderModalContent = () => {
    switch (type) {
      case "user":
        return <UserEditModal data={data as IUser} onClose={onClose} />;

      case "course":
        return <CoursesEditModal data={data as ICourse} onClose={onClose} />;
      default:
        return null;
    }
  };

  return <>{renderModalContent()}</>;
};

export default EditModal;
