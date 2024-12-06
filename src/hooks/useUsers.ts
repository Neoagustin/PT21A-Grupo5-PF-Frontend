import { useState, useEffect } from "react";
import { fetchUsers } from "@/services/users/users.service";
import { IUser } from "@/interfaces/IUser";
import { useToken } from "@/context/TokenContext/TokenContext";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [students, setStudents] = useState<IUser[]>([]);
  const [teachers, setTeachers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useToken();

  if (!token) throw new Error("Token inexistente");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data: IUser[] = await fetchUsers(token);
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
