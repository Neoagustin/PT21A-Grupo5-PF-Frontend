import React from "react";
import UserEditModal from "./UsersEditModal/UsersEditModal";
import CoursesEditModal from "./CoursesEditModal/CoursesEditModal";
import { IEditModalProps } from "./types";
import { IUser } from "@/interfaces/IUser";
import ICourse from "@/interfaces/ICourse";
import LessonsEditModal from "./LessonsEditModal/LessonsEditModal";
import { ILesson } from "@/interfaces/ILesson";
import LanguagesEditModal from "./LanguagesEditModal/LanguagesEditModal";
import ILanguage from "@/interfaces/ILanguage";

const EditModal: React.FC<IEditModalProps> = ({ data, type, onClose }) => {
  const renderModalContent = () => {
    switch (type) {
      case "user":
        return <UserEditModal data={data as IUser} onClose={onClose} />;

      case "languages":
        return <LanguagesEditModal data={data as ILanguage} onClose={onClose} />;

      case "course":
        return <CoursesEditModal data={data as ICourse} onClose={onClose} />;

      case "lesson":
        return <LessonsEditModal data={data as ILesson} onClose={onClose} />;
      default:
        return null;
    }
  };

  return renderModalContent();
};

export default EditModal;
