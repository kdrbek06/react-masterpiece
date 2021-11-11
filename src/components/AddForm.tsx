import React, { useContext, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";

export default function AddForm({theMenu}) {

  const id = theMenu.id;
  const [showModal, setShowModal] = React.useState(false);
  const [day, setDay] = useState(theMenu.day);
  const [nameStarter, setNameStarter] = useState(theMenu.nameStarter);
  const [priceStarter, setPriceStarter] = useState(theMenu.priceStarter);
  const [nameMain, setNameMain] = useState(theMenu.nameMain);
  const [priceMain, setPriceMain] = useState(theMenu.priceMain);
  const [nameDessert, setNameDessert] = useState(theMenu.nameDessert);
  const [priceDessert, setPriceDessert] = useState(theMenu.priceDessert);
  const [totalPrice, setTotalPrice] = useState(theMenu.totalPrice)
  const {updateMenu} = useContext(MenuContext);
  const updatedMenu = {id, day, nameStarter, priceStarter, nameMain, priceMain, nameDessert, priceDessert, totalPrice }

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = setTotalPrice(Number.parseFloat(theMenu.priceStarter) + Number.parseFloat(theMenu.priceMain) + Number.parseFloat(theMenu.priceDessert));
    updateMenu(id, updatedMenu);
    setShowModal(false);
    console.log("submit handled");
  };

  return (
    <>
    <div className="modalContainer flex lg:w-full">
        <button
          className="m-2 p-2 bg-yellow-200 rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit Menu
        </button>
        {!!showModal && (
          <>
          <form onSubmit={handleSubmit} className="w-full sm:w-1/2 text-center flex flex-col justify-between	my-6 p-6  bg-white bg-opacity-40 hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
            <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="w-full sm:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
                <div className="relative w-auto my-6 mx-auto max-w-xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-yellow-200">
                      <h3 className="text-3xl font-semibold ">
                        Edit Your Menu for this day
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="items-center relative flex-row w-full px-2"> 
                      <div className="flex items-center py-2 px-2 break-normal text-base">
                      <span className="text-gray-700">day&nbsp;:</span>
                      <select className="flex md:flex items-center w-full py-2 px-2 break-normal text-base"
                      value={day} onChange={(e) => setDay(e.target.value)}>
                          <option>DAY OF THE WEEK</option>
                          <option>{theMenu.day}</option>
                      </select>
                      </div>
                      <div className="py-2 px-2 break-normal text-base">
                        <label htmlFor="newStarter">starter&nbsp;:&nbsp;</label>
                        <input
                          className="md:appearance-none bg-yellow-200 w-full border-solid text-gray-700 text-base mr-3.5 py-1 px-2 leading-tight focus:outline-none"
                          value={nameStarter}
                          onChange={(e) => setNameStarter(e.target.value)}
                        ></input>
                      </div>
                      <label htmlFor="priceStarter">€&nbsp;</label>
                      <input
                          className="py-1 px-4 md:w-14 appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700 text-base mr-3.5 leading-tight focus:outline-none"
                          type="text"
                          value={priceStarter}
                          onChange={(e) => setPriceStarter(e.target.value)}
                        ></input>
                      <div className="py-2 px-2 break-normal text-base">
                        <label htmlFor="main">main&nbsp;:&nbsp;</label>
                        <input
                          className="md:appearance-none bg-yellow-200 border-none w-full text-gray-700 text-base mr-3 py-1 px-2 leading-tight focus:outline-none"
                          value={nameMain}
                          onChange={(e) => setNameMain(e.target.value)}
                        ></input>
                      </div>
                      <label htmlFor="priceMain">€&nbsp;</label>
                        <input
                          className="md:w-14 appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700 text-base py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={priceMain}
                          onChange={(e) => setPriceMain(e.target.value)}
                        ></input>
                      <div className="border-b py-4 px-2 text-base">
                        <label htmlFor="dessert">&nbsp;dessert&nbsp;:&nbsp;</label>
                        <input
                          className="md:appearance-none bg-yellow-200 border-none w-full text-gray-700 text-base mr-3 py-1 px-2 leading-tight focus:outline-none"
                          value={nameDessert}
                          onChange={(e) => setNameDessert(e.target.value)}
                        ></input>
                      </div> 
                      <label htmlFor="priceDessert">€&nbsp;</label>
                        <input
                          className="md:w-14 appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700 text-base mr-1 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={priceDessert}
                          onChange={(e) => setPriceDessert(e.target.value)}
                        ></input>
                      <div className="md:flex items-center border-b py-2 text-base">
                        <label htmlFor="dessert">Total Price:</label>
                        <p className="flex justify-items-end text-green-400 font-rancho text-2xl mr-2" >&nbsp;€ {(Number.parseFloat(totalPrice).toFixed(2))} </p>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-500 text-pink active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
    </>
  );
}
