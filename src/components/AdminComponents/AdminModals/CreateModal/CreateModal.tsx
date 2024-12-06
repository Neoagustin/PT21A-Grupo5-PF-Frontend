import React from "react";
import { ICreateModalProps } from "./types";
import UsersCreateModal from "./UsersCreateModal/UsersCreateModal";
import useSegment from "@/hooks/useSegment";
import LanguagesCreateModal from "./LanguagesCreateModal/LanguagesCreateModal";
import CoursesCreateModal from "./CoursesCreateModal/CoursesCreateModal";
import LessonsCreateModal from "./LessonsCreateModal/LessonsCreateModal";
import ReferralsCreateModal from "./ReferralsCreateModal/ReferralsCreateModal";

const CreateModal: React.FC<ICreateModalProps> = ({ closeCreateModal }) => {
  const { segment } = useSegment();

  const createModalRender = () => {
    switch (segment) {
      case "students":
      case "teachers":
        return <UsersCreateModal closeCreateModal={closeCreateModal} />;
      case "languages":
        return <LanguagesCreateModal closeCreateModal={closeCreateModal} />;
      case "courses":
        return <CoursesCreateModal closeCreateModal={closeCreateModal} />;
      case "lessons":
        return <LessonsCreateModal closeCreateModal={closeCreateModal} />;
      case "referrals":
        return <ReferralsCreateModal closeCreateModal={closeCreateModal} />;
      default:
        return null;
    }
  };

  return createModalRender();
};

export default CreateModal;
