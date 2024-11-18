import { useState, useEffect } from "react";
import { fetchUsers } from "@/services/users/users.service"; // Ajusta la ruta según tu estructura de carpetas
import { IUser } from "@/interfaces/IUser";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [students, setStudents] = useState<IUser[]>([]);
  const [teachers, setTeachers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data: IUser[] = await fetchUsers();
        setUsers(data);

        const studentsList = data.filter((user) => user.role === "user");
        const teachersList = data.filter((user) => user.role === "teacher");

        setStudents(studentsList);
        setTeachers(teachersList);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, students, teachers, loading, error };
};

export default useUsers;