import useModal from "@/hooks/useModal";
import React from "react";
import AdminTableHeader from "../AdminTableHeader/AdminTableHeader";
import Link from "next/link";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import UserIdModal from "../UserIdModal/UserIdModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useLanguageAdminContext } from "@/context/Admin/LanguageAdminContext/LanguageAdminContext";
import Swal from "sweetalert2";

const AdminLanguagesTable = () => {
  const { loading, error, languages, deleteLanguageById } = useLanguageAdminContext();
  const { isModalOpen, selectedId, handleCloseModal, handleOpenModal } = useModal();

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
          {languages.length > 0 ? (
            languages.map((item) => (
              <tr key={item.id} className="border-b border-lightgrayTransparent text-darkgray">
                <td className="py-3 px-6">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 border-darkgray rounded-[4px]"
                      aria-label="Seleccionar item"
                    />
                  </label>
                </td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <button
                    className="text-skyblue hover:text-skyblueHover hover:underline"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    Ver ID
                  </button>
                </td>
                <td className="py-3 px-6 whitespace-nowrap">{item.name}</td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <Link href={"#"} className="text-skyblue hover:text-skyblueHover hover:underline">
                    Ver Cursos
                  </Link>
                </td>
                <td className="py-3 px-6 whitespace-nowrap text-red hover:text-redHover hover:underline cursor-pointer">
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "¿Estás seguro?",
                        text: `Eliminarás el idioma ${item.name} de los registros.`,
                        icon: "warning",
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Sí, eliminar",
                        reverseButtons: false,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteLanguageById(item.id);
                          Swal.fire(
                            "Eliminado",
                            `Has eliminado el idioma ${item.name} de los registros.`,
                            "success"
                          );
                        }
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faTrashCan} /> Eliminar
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

      <UserIdModal
        isModalOpen={isModalOpen}
        selectedId={selectedId}
        closeModal={handleCloseModal}
      />
    </>
  );
};

export default AdminLanguagesTable;
