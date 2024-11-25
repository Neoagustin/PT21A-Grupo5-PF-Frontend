import useModal from "@/hooks/Modals/useModal";
import React from "react";
import AdminTableHeader from "../../AdminTableHeader/AdminTableHeader";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import UserIdModal from "../../AdminModals/IdModal/UserIdModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useLessonsAdminContext } from "@/context/Admin/LessonsAdminContext/LessonsAdminContext";
import Swal from "sweetalert2";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AdminLessonsTable = () => {
  const { loading, error, lessons, deleteLessonById } = useLessonsAdminContext();
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
          {lessons.length > 0 ? (
            lessons.map((item) => (
              <tr key={item.id} className="border-b border-lightgrayTransparent text-darkgray">
                <td className="pt-4 pb-0 pl-3 pr-0 flex items-center justify-center xl:pr-6 xl:pl-6">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 border-darkgray rounded-[4px]"
                      aria-label="Seleccionar item"
                    />
                  </label>
                </td>
                <td className="py-3 pl-6 pr-5 whitespace-nowrap xl:pr-6">
                  <button
                    className="bg-blue-400 text-whitePage border rounded-[4px] py-[2px] px-2 hover:bg-skyblueHover transition-all 200"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    Ver ID
                  </button>
                </td>
                <td className="py-3 px-6 whitespace-nowrap">{item.title}</td>
                <td className="py-3 px-6 whitespace-nowrap overflow-hidden text-ellipsis max-w-[400px]">
                  {item.content}
                </td>

                <td className="py-3 px-6 whitespace-nowrap">
                  <button className="flex gap-1 items-center text-whitePage bg-skyblue  py-[2px] px-2 rounded-[4px] cursor-pointer hover:bg-skyblueHover">
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
                        text: `Eliminarás esta clase.`,
                        icon: "warning",
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Sí, Eliminar",
                        reverseButtons: false,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteLessonById(item.id);
                          Swal.fire("Eliminada", `Has eliminado la clase`, "success");
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
              <td colSpan={8} className="py-3 px-6 text-center text-gray-500">
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

export default AdminLessonsTable;
