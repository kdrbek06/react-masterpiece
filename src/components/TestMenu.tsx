import React, { Component} from 'react'
// import { useParams } from 'react-router';
import MenuData from '../MenuData.json';

// export interface ITestMenuProps {
// }

class TestMenu extends Component {
    render() {
        console.log("new log: " , MenuData)
        return (
            <>
            
            <div>Test component</div>
            <div>{MenuData.map((menuDetail, id) => {
                return <h1>
                {menuDetail.starter.name}
                {menuDetail.starter.priceStarter}
                {menuDetail.main.name}
                {menuDetail.main.priceMain}
                {menuDetail.dessert.name}
                {menuDetail.dessert.priceDessert}
                </h1>
                })}
            </div>
            </>
        )
    }
    
    // const { id } = useParams<{ id: string }>();
    // const menu = MenuData.map((menu) => <div>{menu.starter}</div>);

    // const newMenuItem = {
        // id: id ,
        // day: menuDay,
        // starter: {
        //   name: starterName,
        //   priceStarter: newPriceStarter 
        // },
        // main: {
        //     name: mainName, 
        //     priceMain: newPriceMain
        // },
        // dessert: {
        //     name: dessertName, 
        //     priceDessert: newPriceDessert
        // }
    
}
export default TestMenu
