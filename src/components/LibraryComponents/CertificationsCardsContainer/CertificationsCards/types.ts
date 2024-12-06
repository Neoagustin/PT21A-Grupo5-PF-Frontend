
import jsPDF from 'jspdf';

export const handleGetCertificate = (language: string | undefined, courseName: string | undefined, specialization: string | undefined, level: string | undefined, name: string | undefined) =>{

  

  const certificate = new jsPDF({
    orientation: 'landscape',
  });
  
  const pageWidth = certificate.internal.pageSize.getWidth();
  const pageHeight = certificate.internal.pageSize.getHeight();

  certificate.addImage("/assets/images/IMGCERTIFICATE.png", 'PNG', 30, 5, 40, 40)
  certificate.setFontSize(30);
  certificate.text('Certificado de Participación', pageWidth / 2, 30, { align: 'center' });
  certificate.addImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRlf3517a-p8EHNW9koEKuMsDlKm65_-XoQ&s", 'PNG', pageWidth - 65, 5, 40, 40)



  certificate.setFontSize(16);
  certificate.text(`Por cuanto ${name} ha participado en el curso de ${language} "${courseName}" orientado a ${specialization}, con nivel`, 10, 60, { align: 'left' });
  certificate.text(`de complejidad ${level} cuya carga horaria fue de 125 horas, auitorizado por Resolución Interna N°`, 10, 70, { align: 'left' });
  certificate.text('321/24 de fecha 02 de Octubre del año 2024 Homologada por el Ministerio de Capital Humano de la Nación', 10, 80, { align: 'left' });
  certificate.text('Argentina, siendo dictado el mentado a traves de la Plataforma de Rompinedo Barreras se le otorga', 10, 90, { align: 'left' });
  certificate.text('el presente certificado a los efectos de ser presentado por ante quien corresponda.', 10, 100, { align: 'left' });

  certificate.setFontSize(18);
  certificate.text(`FECHA DE EXPEDICIÓN "${new Date().toLocaleDateString().toUpperCase()}"`, pageWidth - 20, 120, { align: 'right' });

  certificate.addImage("/assets/images/logoCertificado.png", 'PNG', 25, pageHeight - 80, 40, 40)
  certificate.text("ROMPIENDO BARRERAS", 45, pageHeight - 30, { align: 'center' });  

  certificate.addImage("/assets/images/ministerioDeCapital.png", 'PNG', pageHeight / 2, pageHeight - 80, 40, 40)
  certificate.text("CAPITAL HUMANO", pageWidth / 2 - 25, pageHeight - 30, { align: 'center' });
  
  certificate.addImage("/assets/images/lautaroGandalf.png", 'PNG', pageHeight / 2 + 75, pageHeight - 80, 40, 40)
  certificate.text("Lautaro Gandalf", pageWidth / 2 + 50, pageHeight - 35, { align: 'center' });
  certificate.setFontSize(15);
  certificate.text("Lider de profesores", pageWidth / 2 + 50, pageHeight - 25, { align: 'center' });


  certificate.addImage("/assets/images/kevinCoca.png", 'PNG', pageHeight / 2 + 130, pageHeight - 80, 40, 40)
  certificate.setFontSize(18);
  certificate.text("Kevin Coca", pageWidth / 2 + 105, pageHeight - 35, { align: 'center' });
  certificate.setFontSize(15);
  certificate.text("Gerente General", pageWidth / 2 + 105, pageHeight - 25, { align: 'center' });
 
  
  


  certificate.setDrawColor(0, 0, 0); 
  certificate.setLineWidth(0.5);
  certificate.line(20, pageHeight - 20, pageWidth - 20, pageHeight - 20);
  certificate.setFontSize(12);
  certificate.text("** Una vez se apruebe el curso se otorgrá certificado de aprobación", pageWidth / 2, pageHeight - 10, { align: 'center' });


  certificate.save('certificado.pdf');


}












export interface ICertificationsCardsProps {
  flag: string | undefined,
  language: string | undefined,
  courseName: string | undefined,
  specialization: string | undefined,
  level: string | undefined,
  name: string | undefined,
  plan: string | undefined
}