import React, { useState } from "react";
import AdminTableHeader from "../../AdminTableHeader/AdminTableHeader";
import Loading from "@/components/GeneralComponents/Loading/Loading";
import MessageModal from "../../../AdminModals/MessageModal/MessageModal";
import useMessageModal from "@/hooks/Modals/useMessageModal/useMessageModal";
import { useReferralsAdminContext } from "@/context/Admin/ReferralAdminContext/ReferralAdminContext";

const AdminReferralsTable = () => {
  const { loading, error, referrals } = useReferralsAdminContext();
  const { isMessageModalOpen, content, handleCloseModal, handleOpenModal } = useMessageModal();
  const [title, setTitle] = useState<string>("");

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
      <div className="overflow-y-auto h-[60vh] border border-lightgrayTransparent">
        <table className="min-w-full bg-white border overflow-y-auto h-[60vh] border-lightgrayTransparent text-[14px] sm:text-[16px]">
          <AdminTableHeader />
          <tbody>
            {referrals.length > 0 ? (
              referrals.map((item) => (
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
                      onClick={() => {
                        handleOpenModal(item.id);
                        setTitle("Curso ID:");
                      }}
                    >
                      Ver ID
                    </button>
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap">{item.code}</td>
                  <td className="py-3 px-6 whitespace-nowrap text-center">{item.discount}%</td>
                  <td className="py-3 px-6 whitespace-nowrap">{item.issuedAt}</td>
                  <td className="py-3 px-6 whitespace-nowrap">{item.expirationDate}</td>
                  <td className="py-3 px-6 whitespace-nowrap">
                    {item.redeemedAt ? item.redeemedAt : "No se ha canjeado"}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center">
                    {item.redeemed ? "Si" : "No"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="py-3 px-6 text-center text-gray-500">
                  No hay datos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <MessageModal
        isMessageModalOpen={isMessageModalOpen}
        content={content}
        closeModal={handleCloseModal}
        title={title}
      />
    </>
  );
};

export default AdminReferralsTable;
