import Swal from "sweetalert2"

export const handleButton = () =>{

    Swal.fire({
        title: "Aún no has completo el curso.",
        width: 400,
        padding: "3em",
      });

}


export interface ICertificationsCardsProps {
  flag: string | undefined,
  language: string | undefined,
  courseName: string | undefined  
}