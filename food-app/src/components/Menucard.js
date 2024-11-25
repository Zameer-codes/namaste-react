import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Food_ITEM_URL, Menu_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const MenuCard = () => {
    const {resId} = useParams();
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(Menu_URL+resId);
        const data = await response.json();
        setMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    if(menu.length<=0)return <Shimmer/>;
    return (
        <div className="menu-item-container">
            {
                menu && menu.map(item => {
                    const {id, name, price, imageId, description} = item?.card?.info;
                    return (
                        <div key = {id}  className="menu-item-card">
                            {imageId ? <img src={Food_ITEM_URL+imageId}/>:<></>}
                            <h3>{name}</h3>
                            <p>Rs. {price}/-</p>
                            <p>{description}</p>
                        </div>
                    )   
                })
            }
        </div>
    )
}
export default MenuCard;