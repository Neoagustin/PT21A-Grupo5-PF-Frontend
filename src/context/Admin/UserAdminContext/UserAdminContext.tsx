"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUpdateUser, IUser } from "@/interfaces/IUser";
import { fetchUsers } from "@/services/fetchUsers";
import {
  fetchDeactivateUser,
  fetchUpdateUserAdmin,
  fetchUsersPage,
  fetchUsersSubscriptions,
} from "@/services/users/users.service";
import IUserAdminContextProps from "./types";
import { usePathname } from "next/navigation";
import { fetchGetSubscriptions } from "@/services/fetchSubscriptions";
import { ISubscription } from "@/components/GeneralComponents/SubscriptionPlanCard/types";

const UserAdminContext = createContext<IUserAdminContextProps | undefined>(undefined);

export const UserAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [role, setRole] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const recordsPerPage = 5;

  const previousPage = () => page > 1 && setPage((prev) => prev - 1);
  const nextPage = () => page < maxPages && setPage((prev) => prev + 1);

  const usersSubscriptions = async (userId: string, subscriptionName: string) => {
    try {
      const allSubscriptions: ISubscription[] = await fetchGetSubscriptions();
      const subscription = allSubscriptions.find(
        (sub) => sub.name.toLocaleLowerCase() === subscriptionName.toLocaleLowerCase()
      );

      if (!subscription) throw new Error("Nombre de suscripcion inexistente.");

      await fetchUsersSubscriptions(userId, subscription.id);

      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId
            ? {
                ...user,
                membership: {
                  ...user.membership,
                  subscription: {
                    ...user.membership.subscription,
                    name: subscriptionName,
                  },
                },
              }
            : user
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar usuario");
    }
  };

  const updateUserById = async (id: string, userData: IUpdateUser) => {
    try {
      await fetchUpdateUserAdmin(id, userData);

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, ...userData, isActive: userData.isActive ?? false } : user
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar usuario");
    }
  };

  const deactivateUserById = async (id: string) => {
    try {
      await fetchDeactivateUser(id);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, isActive: false } : user))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desactivando usuario");
    }
  };

  useEffect(() => {
    const selectRole = () => {
      const segments = pathname.split("/");
      const segment = segments[segments.length - 1];
      if (segment === "students") return setRole("user");
      if (segment === "teachers") return setRole("teacher");
    };

    selectRole();
  }, [pathname]);

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  useEffect(() => {
    const fetchUsersByRole = async () => {
      try {
        const usersList: IUser[] = await fetchUsers();
        const filteredUsers = usersList.filter((user) => user.role === role);
        setMaxPages(Math.ceil(filteredUsers.length / recordsPerPage));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al obtener usuarios");
      }
    };

    if (role) {
      fetchUsersByRole();
    }
  }, [role]);

  useEffect(() => {
    const fetchUsersPageData = async () => {
      setLoading(true);
      try {
        const usersPage: IUser[] = await fetchUsersPage(page, recordsPerPage, role);
        setUsers(usersPage);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ha ocurrido un error");
      } finally {
        setLoading(false);
      }
    };

    if (role) {
      fetchUsersPageData();
    }
  }, [page, role]);

  return (
    <UserAdminContext.Provider
      value={{
        users,
        deactivateUserById,
        updateUserById,
        usersSubscriptions,
        page,
        maxPages,
        previousPage,
        nextPage,
        loading,
        error,
      }}
    >
      {children}
    </UserAdminContext.Provider>
  );
};

export const useUserAdminContext = () => {
  const context = useContext(UserAdminContext);

  if (!context) {
    throw new Error("useUserAdminContext debe ser utilizado dentro de un UserAdminProvider");
  }

  return context;
};
