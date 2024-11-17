"use client"
import React, { useState } from 'react';
import { handleSaveCard, handleSelectCard, handleSelectPaymentMethod } from './types';
import Image from 'next/image';
import SubscriptionPlanCard from '@/components/GeneralComponents/SubscriptionPlanCard/SubscriptionPlanCard';
import { SubscriptionName } from '@/components/GeneralComponents/SubscriptionPlanCard/types';
import { Field, Form, Formik } from 'formik';

const CheckoutView: React.FC<{ slug: string }> = ({ slug }: { slug: string }): React.ReactElement => {

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [saveCard, setSaveCard] = useState<boolean>(false)


  return (

    <>

    <h1 className="font-bold text-[18px] mt-[20px] ml-[20px] sm:text-[21px] md:text-[23px] lg:text-[25px] xl:text-[28px] sm:mt-[25px] sm:ml-[25px] md:mt-[35px] md:ml-[35px] lg:mt-[40px] lg:ml-[45px] xl:mt-[40px] xl:ml-[40px]">Confirmar Suscripción</h1>
                    

    <div className="flex flex-col gap-[50px] lg:flex-row items-center justify-center mt-[50px]">

           <div className="flex flex-col self-start gap-[25px] shadow-md shadow-gray p-[3px] w-full sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[60%] lg:ml-[15px]"> {/* APERTURA DIV ESPACIO 1 */}
                  <div className="flex justify-between items-center ml-[5px] mr-[5px] sm:ml-[20px] sm:mr-[20px] sm:text-[19px] md:ml-[40px] md:mr-[40px] md:text-[22px]">
                    <p className="font-bold">Método de Pago</p>
                    <p className="text-gray">Seguro y encriptado 🔓</p>
                  </div>
      
       
                  <div className="flex justify-between items-center ml-[10px] mr-[10px] border-[1px] border-gray p-[2px] sm:ml-[30px] sm:mr-[30px] md:ml-[60px] md:mr-[60px]">
                      <div>
                          <label className="flex items-center cursor-pointer gap-[2px]">
                            <input
                              type="checkbox"
                              name="paymentMethod"
                              checked={selectedPaymentMethod === "Card"}
                              onClick={() => handleSelectPaymentMethod(setSelectedPaymentMethod, "Card")}
                              className="hidden"
                            />
                            <span
                              className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out ${selectedPaymentMethod === "Card" ? 'bg-blue-500 border-blue-500' : ''}`}
                            ></span>
                            <Image
                        className="sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]"    
                        src={"https://i.pinimg.com/236x/f1/61/5c/f1615c9e1df0c6f693086954aeb61d22.jpg"}
                        alt="CARD"
                        width={32}
                        height={32}
                        />
                          <span className="text-[15px] sm:text-[17px] md:text-[20px]">Tarjeta</span>
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
        
                  <div className="flex justify-between items-center ml-[30px] mr-[30px] sm:ml-[65px] sm:mr-[65px] md:ml-[95px] md:mr-[95px]">
                      <div>
                        <label className="flex items-center cursor-pointer gap-[2px]">
                          <input
                            type="checkbox"
                            name="card"
                            checked={selectedCard === "Credit Card"}
                            onClick={() => handleSelectCard(setSelectedCard, "Credit Card")}
                            className="hidden"
                          />
                          <span
                            className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out ${selectedCard === "Credit Card" ? 'bg-blue-500 border-blue-500' : ''}`}
                          ></span>
                          <span className="text-[13px] sm:text-[15px] md:text-[18px]">Tarjeta de Crédito</span>
                        </label>
                      </div>

                      <div>
                        <label className="flex items-center cursor-pointer gap-[2px]">
                          <input
                            type="checkbox"
                            name="card"
                            checked={selectedCard === "Debit Card"}
                            onClick={() => handleSelectCard(setSelectedCard, "Debit Card")}
                            className="hidden"
                          />
                          <span
                            className={`w-[15px] h-[15px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out ${selectedCard === "Debit Card" ? 'bg-blue-500 border-blue-500' : ''}`}
                          ></span>
                          <span className="text-[13px] sm:text-[15px] md:text-[18px]">Tarjeta de Débito</span>
                        </label>
                      </div>
                    </div>


                
                    <Formik
                      initialValues={{
                        cardName: '',
                        cardNumber: '',
                        expiryDate: '',
                        cvc: ''
                      }}
                      onSubmit={(values) => {
                        console.log('Form data:', values);
                      }}>
                
                                    <Form className="flex flex-col gap-[20px] sm:gap-[35px] md:gap-[50px] justify-center items-center">
                                          <div className="flex gap-[5px] sm:gap-[60px] md:gap-[80px]">   

                                                                                     
                                                
                                                <div className="flex flex-col gap-[5px]">
                                                  <label htmlFor="cardName" className="flex text-[11px] sm:text-[13px] md:text-[16px]">Nombre titular de tarjeta</label>
                                                  <Field
                                                    id="cardName"
                                                    name="cardName"
                                                    type="text"
                                                    className="shadow-sm shadow-gray"
                                                  />
                                                </div>

                                                
                                                <div className="flex flex-col gap-[5px]">
                                                  <label htmlFor="expiryDate" className="flex text-[11px] sm:text-[13px] md:text-[16px]">Fecha de expiración</label>
                                                  <Field
                                                    id="expiryDate"
                                                    name="expiryDate"
                                                    type="date"
                                                    className="w-[120px] text-[gray] text-xs sm:text-sm md:text-base shadow-sm shadow-gray"
                                                   />
                                                </div>

                                          </div>
  

                                           
                                            <div className="flex flex-col gap-[5px]">
                                              <label htmlFor="cardNumber" className="flex text-[11px] sm:text-[13px] md:text-[16px]">Número de la tarjeta</label>
                                              <Field
                                                id="cardNumber"
                                                name="cardNumber"
                                                type="number"
                                                className="shadow-sm shadow-gray"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-[5px]">
                                              <label htmlFor="cardNumber" className="flex text-[11px] sm:text-[13px] md:text-[16px]"> DNI titular de la tarjeta</label>
                                              <Field
                                                id="cardNumber"
                                                name="cardNumber"
                                                type="number"
                                                className="shadow-sm shadow-gray"
                                                />
                                            </div>

                                          
                                            <div className="flex flex-col gap-[5px] items-center">
                                              <label htmlFor="cvc" className="flex text-[11px] sm:text-[13px] md:text-[16px] justify-center">
                                                CVC/CVV
                                              </label>
                                              <Field
                                                id="cvc"
                                                name="cvc"
                                                type="number"
                                                className="w-[60px] shadow-sm shadow-gray"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-[5px]">
                                              <label htmlFor="cardNumber" className="flex text-[11px] sm:text-[13px] md:text-[16px]">Correo electronico.</label>
                                              <Field
                                                id="cardNumber"
                                                name="cardNumber"
                                                type="number"
                                                className="shadow-sm shadow-gray"
                                                />
                                            </div>

                                            
                                            <button type="submit" className="w-[250px] h-[40px] bg-violet text-whitePage font-bold transition-all hover:bg-violetHover justify-center">Confirmar Suscripción</button>
                                  </Form>
              
                      </Formik> 
                    

                      <div className="flex items-center ml-[5px] md:ml-[10px]">
                            <label className="flex items-center cursor-pointer gap-[3px]">
                            <input
                              type="checkbox"
                              name="saveCard"
                              checked={saveCard === true}
                              onClick={() => handleSaveCard(setSaveCard, !saveCard)}
                              className="hidden"
                            />
                            <span
                              className={`w-[15px] h-[15px] rounded-[1px] border-[2px] border-black bg-gray transition-colors duration-300 ease-in-out ${saveCard === true ? 'bg-violet' : ''}`}
                            ></span>
                            <span className="text-[11px] font-bold sm:text-[13px] md:text-[16px]">Desea guardar los datos de la tarjeta para el futuro??</span>
                            </label>
                      </div>


                      <div>
                            <label className="flex cursor-pointer ml-[10px] mr-[10px] border-[1px] border-gray p-[2px] justify-between">
                              <div className="flex gap-[2px] items-center">
                              <input
                                type="checkbox"
                                name="paymentMethod"
                                checked={selectedPaymentMethod === "Bank Transfer"}
                                onClick={() => handleSelectPaymentMethod(setSelectedPaymentMethod, "Bank Transfer")}
                                className="hidden"
                              />
                              <span
                                className={`w-[18px] h-[18px] rounded-full border-[2px] border-black transition-colors duration-300 ease-in-out ${selectedPaymentMethod === "Bank Transfer" ? 'bg-blue-500 border-blue-500' : ''}`}
                              ></span>
                              <Image
                              className="sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]"
                                src="https://i.pinimg.com/236x/6d/20/15/6d20156a784ad1a24110d6379cc79156.jpg"
                                alt="BANK"
                                width={31}
                                height={30}
                                />
                              <span className="text-[15px] sm:text-[17px] md:text-[20px]">Transferencia Bancaria</span>
                              </div>
                              <div>
                              <Image
                              className="sm:w-[42px] sm:h-[42px]"
                                src="https://i.pinimg.com/236x/8a/39/22/8a3922c4dac0f8f7322f611f827d3960.jpg"
                                alt="MERCADO PAGO"
                                width={36}
                                height={40}
                                />
                              </div>  
                            </label>
                        </div>
          </div> {/* CIERRE DIV ESPACIO 1 */}

          
          <div> {/* APERTURA DIV ESPACIO 2 */}

                      <div className="flex items-center justify-center lg:mr-[15px]">
                      <div  className="w-fit h-fit">
                      <SubscriptionPlanCard subName={slug as SubscriptionName} />
                      </div>
                      </div>

          </div> {/* CIERRE DIV ESPACIO 2 */}


</div>



</>



)
}

export default CheckoutView