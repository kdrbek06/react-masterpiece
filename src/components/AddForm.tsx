import React, { useContext, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";
import MenuData from "../MenuData.json";

export default function AddForm({theMenu}) {

  const id = theMenu.id;
  const {updateMenu} = useContext(MenuContext);
  
  const [showModal, setShowModal] = React.useState(false);
  const [nameStarter, setNameStarter] = useState(theMenu.nameStarter);
  const [priceStarter, setPriceStarter] = useState(theMenu.priceStarter);
  const [nameMain, setNameMain] = useState(theMenu.nameMain);
  const [priceMain, setPriceMain] = useState(theMenu.priceMain);
  const [nameDessert, setNameDessert] = useState(theMenu.nameDessert);
  const [priceDessert, setPriceDessert] = useState(theMenu.priceDessert);




  console.log("clickedy");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit handled");
  };

  return (
    <>
      <button
        className="m-2 p-2 bg-yellow-200 rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit Menu
      </button>
      {!!showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
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
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
                      <div className="flex items-center border-b border-teal-500 py-2">
                        <label htmlFor="newStarter">starter&nbsp;:&nbsp;</label>
                        <input
                          className="appearance-none bg-yellow-200 border-solid w-full text-gray-700 mr-3.5 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={nameStarter}
                          onChange={(e) => setNameStarter(e.target.value)}
                        ></input>
                        <label htmlFor="priceStarter">€&nbsp;</label>
                        <input
                          className="appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={priceStarter}
                          onChange={(e) => setPriceStarter(e.target.value)}
                        ></input>
                      </div>
                      <div className="flex items-center py-2 px-2 break-normal">
                        <label htmlFor="main">main&nbsp;:&nbsp;</label>
                        <input
                          className="appearance-none bg-yellow-200 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={nameMain}
                          onChange={(e) => setNameMain(e.target.value)}
                        ></input>
                        <label htmlFor="priceMain">€&nbsp;</label>
                        <input
                          className="appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={priceMain}
                          onChange={(e) => setPriceMain(e.target.value)}
                        ></input>
                      </div>
                      <div className="flex items-center border-b py-2">
                        <label htmlFor="dessert">dessert:</label>
                        <input
                          className="appearance-none bg-yellow-200 border-none w-full text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={nameDessert}
                          onChange={(e) => setNameDessert(e.target.value)}
                        ></input>
                        <label htmlFor="priceDessert">€&nbsp;</label>
                        <input
                          className="appearance-none bg-yellow-200 bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={priceDessert}
                          onChange={(e) => setPriceDessert(e.target.value)}
                        ></input>
                      </div>
                    </form>
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
        </>
      )}
    </>
  );
}
