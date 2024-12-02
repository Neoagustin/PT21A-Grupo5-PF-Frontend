import React from "react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { handleButton } from "./types";

const CheckoutByCards: React.FC = (): React.ReactElement => {
  return (
    <>
                                            {/*SELECCION DE TARJETA COMO MEDIO */}

      <div className="flex justify-between items-center ml-[10px] mr-[10px] border-[1px] border-gray p-[2px] sm:ml-[30px] sm:mr-[30px] md:ml-[60px] md:mr-[60px]">
        <div>
          <label className="flex items-center cursor-pointer gap-[2px]">
            <input
              type="checkbox"
              name="paymentMethod"
              //checked={selectedPaymentMethod === "Card"}
              // onClick={() => handleSelectPaymentMethod(setSelectedPaymentMethod, "Card")}
              className="hidden"
            />
            <span
              className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out`}
            ></span>
            <Image
              className="sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]"
              src={
                "https://i.pinimg.com/236x/f1/61/5c/f1615c9e1df0c6f693086954aeb61d22.jpg"
              }
              alt="CARD"
              width={32}
              height={32}
            />
            <span className="font-bold text-[14px] sm:text-[18px] md:text-[21px] lg:text-[23px]">
              Tarjeta
            </span>
          </label>
        </div>

        <div className="flex">
          <Image
            className="sm:w-[38px] sm:h-[30px] md:w-[42px] md:h-[34px]"
            src="https://i.pinimg.com/236x/23/85/54/238554f6110cf8ca1e2e6ab9147f2dbd.jpg"
            alt="VISA card"
            width={32}
            height={24}
          />
          <Image
            className="sm:w-[38px] sm:h-[30px] md:w-[42px] md:h-[34px]"
            src="https://i.pinimg.com/236x/be/f1/bc/bef1bca7bb930f868c679a5c6b37056a.jpg"
            alt="MASTERCARD card"
            width={32}
            height={24}
          />
          <Image
            className="sm:w-[38px] sm:h-[30px] md:w-[42px] md:h-[34px]"
            src="https://i.pinimg.com/236x/bf/52/b8/bf52b87c9c500e5502da41ccb04c9ef1.jpg"
            alt="AMERICAN EXPRESS card"
            width={32}
            height={24}
          />
          <Image
            className="sm:w-[38px] sm:h-[30px] md:w-[42px] md:h-[34px]"
            src="https://i.pinimg.com/236x/b3/d7/85/b3d7853a11dcc8c424866915ddd4d3e3.jpg"
            alt="DISCOVER card"
            width={32}
            height={24}
          />
        </div>
      </div>

                                      {/*SELECCION DE TARJETA DE CREDITO O DEBITO */}

      <div className="flex justify-between items-center ml-[30px] mr-[30px] sm:ml-[65px] sm:mr-[65px] md:ml-[95px] md:mr-[95px]">
        <div>
          <label className="flex items-center cursor-pointer gap-[2px]">
            <input
              type="checkbox"
              name="card"
              //checked={selectedCard === "Credit Card"}
              //onClick={() => handleSelectCard(setSelectedCard, "Credit Card")}
              className="hidden"
            />
            <span
              className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out`}
            ></span>
            <span className="text-[13px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
              Tarjeta de Crédito
            </span>
          </label>
        </div>

        <div>
          <label className="flex items-center cursor-pointer gap-[2px]">
            <input
              type="checkbox"
              name="card"
              //checked={selectedCard === "Debit Card"}
              //onClick={() => handleSelectCard(setSelectedCard, "Debit Card")}
              className="hidden"
            />
            <span
              className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out`}
            ></span>
            <span className="text-[13px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
              Tarjeta de Débito
            </span>
          </label>
        </div>
      </div>

                                                 {/*FORMULARIO DE LA TARJETA*/}

      <Formik
        initialValues={{
          cardName: "",
          cardNumber: "",
          expiryDate: "",
          cvc: "",
        }}
        onSubmit={(values) => {
          console.log("Form data:", values);
        }}
      >
        <Form className="flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px] justify-center items-center">
          <div className="flex gap-[5px] sm:gap-[40px] md:gap-[60px]">
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="cardName"
                className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
              >
                Nombre titular de tarjeta
              </label>
              <Field
                id="cardName"
                name="cardName"
                type="text"
                className="shadow-md shadow-gray h-[25px] sm:w-[250px] sm:h-[30px] lg:w-[280px] lg:h-[35px]"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="expiryDate"
                className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
              >
                Fecha de expiración
              </label>
              <Field
                id="expiryDate"
                name="expiryDate"
                type="date"
                className="w-[120px] h-[25px] sm:w-[160px] sm:h-[30px] lg:w-[190px] lg:h-[35px] text-[gray] text-xs sm:text-sm md:text-base shadow-md shadow-gray"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="cardNumber"
              className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
            >
              Número de la tarjeta
            </label>
            <Field
              id="cardNumber"
              name="cardNumber"
              type="number"
              className="shadow-md shadow-gray h-[25px] sm:w-[250px] sm:h-[30px] lg:w-[280px] lg:h-[35px]"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="cardNumber"
              className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
            >
              DNI titular de la tarjeta
            </label>
            <Field
              id="cardNumber"
              name="cardNumber"
              type="number"
              className="shadow-md shadow-gray h-[25px] sm:w-[250px] sm:h-[30px] lg:w-[280px] lg:h-[35px]"
            />
          </div>

          <div className="flex flex-col gap-[5px] items-center">
            <label
              htmlFor="cvc"
              className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px] justify-center"
            >
              CVC/CVV
            </label>
            <Field
              id="cvc"
              name="cvc"
              type="number"
              className="shadow-md shadow-gray h-[25px] sm:w-[70px] sm:h-[30px] lg:w-[95px] lg:h-[35px]"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="cardNumber"
              className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
            >
              Correo electronico.
            </label>
            <Field
              id="cardNumber"
              name="cardNumber"
              type="number"
              className="shadow-md shadow-gray h-[25px] sm:w-[250px] sm:h-[30px] lg:w-[280px] lg:h-[35px]"
            />
          </div>

                                        
  

                                         

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="cardNumber" className="flex text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]">Agregar codigo de descuento.</label>
            <Field
            id="cardNumber"
            name="cardNumber"
            type="number"
            className="shadow-md shadow-gray h-[25px] sm:w-[250px] sm:h-[30px] lg:w-[295px] lg:h-[35px]"
            />
          </div>

                                            
            <button type="submit" className="w-[250px] h-[40px] bg-rose-700 text-whitePage font-bold transition-all hover:bg-rose-900 justify-center" onClick={handleButton}>Confirmar Suscripción</button>
                                  </Form>
              
                      </Formik> 


                    

                      <div className="flex items-center ml-[5px] md:ml-[10px]">
                            <label className="flex items-center cursor-pointer gap-[3px]">
                            <input
                              type="checkbox"
                              name="saveCard"
                              //checked={saveCard === true}
                              //onClick={() => handleSaveCard(setSaveCard, !saveCard)}
                              className="hidden"
                            />
                            <span
                              className={`w-[15px] h-[15px] rounded-[1px] border-[2px] border-black bg-gray transition-colors duration-300 ease-in-out`}
                            ></span>
                            <span className="text-[12px] font-bold sm:text-[16px] md:text-[17px] lg:text-[19px]">Desea guardar los datos de la tarjeta para el futuro??</span>
                            </label>
                      </div>

     
    </>
  );
};

export default CheckoutByCards;
