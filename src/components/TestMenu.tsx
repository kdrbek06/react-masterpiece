import React, { Component} from 'react';
import MenuData from '../MenuData.json';

console.log("new log: " , MenuData)

const TestMenu = () => {

    return (
        <>
        <div>Test component</div>
        <div>{MenuData.map((menuDetail, id) => {
            return <div className="border-solid border-2 bg-pink-300 text-center" key={id}>{menuDetail.day}
                    <div className="underline bg-white">
                        <p>{menuDetail.id}</p>
                        <p className="name">{menuDetail.id} {menuDetail.starter.name}</p>
                        <p className="price">{menuDetail.starter.priceStarter}</p>
                        </div>
                        <div className="underline  bg-white">
                        <p className="name">{menuDetail.main.name}</p>
                        <p className="price">{menuDetail.main.priceMain}</p>
                        </div>
                        <div className="underline bg-white">
                        <p className="name">{menuDetail.dessert.name}</p>
                        <p className="price">{menuDetail.dessert.priceDessert}</p>
                    </div>
            </div>
            
            })}
        </div>
        </>
    )

}
export default TestMenu
