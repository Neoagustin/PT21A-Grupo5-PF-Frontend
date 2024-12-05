import React from "react";
import {
  headersStudentsTable,
  headersLanguageTable,
  headersTeachersTable,
  headersCoursesTable,
  headersLessonsTable,
  headersReferralsTable,
} from "./utils";
import useSegment from "@/hooks/useSegment";

const AdminTableHeader = () => {
  const { segment } = useSegment();
  const header =
    segment === "languages"
      ? headersLanguageTable
      : segment === "students"
      ? headersStudentsTable
      : segment === "teachers"
      ? headersTeachersTable
      : segment === "courses"
      ? headersCoursesTable
      : segment === "lessons"
      ? headersLessonsTable
      : headersReferralsTable;

  return (
    <thead className=" sticky top-[-2px] z-12">
      <tr className="text-left text-blackPage border-lightgray bg-lightgray">
        {header.map((header, index) => (
          <th key={index} className="py-3 px-6 text-nowrap">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default AdminTableHeader;
