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
                return <div className="border-solid border-2 bg-green-300 text-center">{menuDetail.day}
                        <div className="underline bg-white">
                            <p className="name">{menuDetail.starter.name}</p>
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
    
    // const { id } = useParams<{ id: string }>();
    // const menu = MenuData.map((menu) => <div>{menu.starter}</div>);
    
}
export default TestMenu
