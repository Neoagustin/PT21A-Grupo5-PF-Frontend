import React from "react";
import { headersStudentsTable, headersLanguageTable, headersTeachersTable } from "./utils";
import useSegment from "@/hooks/useSegment";

const AdminTableHeader = () => {
  const { segment } = useSegment();
  const header =
    segment === "languages"
      ? headersLanguageTable
      : segment === "students"
      ? headersStudentsTable
      : headersTeachersTable;

  return (
    <thead>
      <tr className="text-left text-blackPage border-lightgrayTransparent bg-lightgrayTransparent">
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
