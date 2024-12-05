import AdminUsersTable from "./AdminTables/AdminUsersTable/AdminUsersTable";
import AdminLanguagesTable from "./AdminTables/AdminLanguagesTable/AdminLanguagesTable";
import AdminCoursesTable from "./AdminTables/AdminCoursesTable/AdminCoursesTable";
import AdminLessonsTable from "./AdminTables/AdminLessonTable/AdminLessonTable";
import React from "react";
import AdminReferralsTable from "./AdminTables/AdminReferralsTable/AdminReferralsTable";

export const getAdminTableComponent = (segment: string | null) => {
  switch (segment) {
    case "students":
    case "teachers":
      return <AdminUsersTable />;
    case "languages":
      return <AdminLanguagesTable />;
    case "courses":
      return <AdminCoursesTable />;
    case "lessons":
      return <AdminLessonsTable />;
    case "referrals":
      return <AdminReferralsTable />;
    default:
      return null;
  }
};
