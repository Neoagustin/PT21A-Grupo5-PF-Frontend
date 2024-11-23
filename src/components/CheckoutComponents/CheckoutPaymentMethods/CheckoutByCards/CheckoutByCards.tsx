import React from 'react'
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { handleButton } from './types';

const CheckoutByCards: React.FC= (): React.ReactElement  => {
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
                              <span className="text-[13px] sm:text-[15px] md:text-[18px]">Tarjeta de Crédito</span>
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
                            <span className="text-[13px] sm:text-[15px] md:text-[18px]">Tarjeta de Débito</span>
                          </label>
                        </div>

                  </div>


                                                  {/*FORMULARIO DE LA TARJETA*/}

                
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
                            <span className="text-[11px] font-bold sm:text-[13px] md:text-[16px]">Desea guardar los datos de la tarjeta para el futuro??</span>
                            </label>
                      </div>

    </>
  )
}

export default CheckoutByCards