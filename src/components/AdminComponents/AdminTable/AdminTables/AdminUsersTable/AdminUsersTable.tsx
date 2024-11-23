import useModal from "@/hooks/Modals/useModal";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import React from "react";
import AdminTableHeader from "../../AdminTableHeader/AdminTableHeader";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import UserIdModal from "../../IdModal/UserIdModal";
import { useUserAdminContext } from "@/context/Admin/UserAdminContext/UserAdminContext";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import EditModal from "../../EditModal/EditModal";
import useEditUserModal from "@/hooks/Modals/useEditModal";

const AdminUsersTable = () => {
  const { loading, error, users, deactivateUserById } = useUserAdminContext();

  const { isModalOpen, selectedId, handleCloseModal, handleOpenModal } = useModal();
  const { isEditModalOpen, editUser, openEditUserModal, closeEditUserModal } = useEditUserModal();

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="w-full text-center py-4">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <>
      <table className="min-w-full bg-white border border-lightgrayTransparent text-[14px] sm:text-[16px]">
        <AdminTableHeader />
        <tbody>
          {users.length > 0 ? (
            users.map((item) => (
              <tr key={item.id} className="border-b border-lightgrayTransparent text-darkgray">
                <td className="pt-7 pb-1 pl-3 pr-0 flex items-center justify-center xl:pr-6 xl:pl-6">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 border-darkgray rounded-[4px]"
                    aria-label="Seleccionar item"
                  />
                </td>
                <td className="py-3 pl-6 pr-5 whitespace-nowrap xl:pr-6">
                  <button
                    className="bg-blue-400 text-whitePage border rounded-[4px] py-[2px] px-2 hover:bg-skyblueHover transition-all 200"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    Ver ID
                  </button>
                </td>
                <td className="py-6 px-6 whitespace-nowrap">{item.email}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.name}</td>
                <td className="py-3 px-6 whitespace-nowrap">{item.idNumber}</td>

                {item?.membership?.subscription.name && (
                  <td className="py-3 px-6 whitespace-nowrap text-center">
                    <p
                      className={`${
                        item?.membership?.subscription.name.toLocaleLowerCase() === "standard"
                          ? "text-darkgray"
                          : item?.membership?.subscription.name.toLocaleLowerCase() === "premium"
                          ? "text-skyblue font-semibold"
                          : "text-violet font-semibold"
                      }`}
                    >
                      {item?.membership?.subscription.name}
                    </p>
                  </td>
                )}

                <td className="px-6 text-center">
                  <p
                    className={`${
                      item.isActive
                        ? "text-whitePage bg-green rounded-[4px] px-2 py-[1px]"
                        : "text-red"
                    } py-[2px]`}
                  >
                    {item.isActive ? "Activo" : "Inactivo"}
                  </p>
                </td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <button
                    onClick={() => openEditUserModal(item)}
                    className="flex gap-1 items-center text-whitePage bg-skyblue  py-[2px] px-2 rounded-[4px] cursor-pointer hover:bg-skyblueHover"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                    Editar
                  </button>
                </td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <button
                    className="flex gap-1 items-center text-whitePage bg-red py-[2px] px-2 rounded-[4px] cursor-pointer hover:bg-redHover"
                    onClick={() =>
                      Swal.fire({
                        title: "¿Estás seguro?",
                        text: `Desactivarás a ${item.name}. Esto impedirá que acceda al sistema.`,
                        icon: "warning",
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Sí, desactivar",
                        reverseButtons: false,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deactivateUserById(item.id);
                          Swal.fire("Desactivado", `Has desactivado a ${item.name}.`, "success");
                        }
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faUserSlash} /> Desactivar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="py-3 px-6 text-center text-gray-500">
                No hay datos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isEditModalOpen && editUser && <EditModal data={editUser} onClose={closeEditUserModal} />}

      <UserIdModal
        isModalOpen={isModalOpen}
        selectedId={selectedId}
        closeModal={handleCloseModal}
      />
    </>
  );
};

export default AdminUsersTable;
