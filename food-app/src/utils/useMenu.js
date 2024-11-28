import { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        fetchMenu(resId);
    }, []);

    const fetchMenu = async (resId) => {
        const response = await fetch(Menu_URL+resId);
        const data = await response.json();
        setMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return menu;
}

export default useMenu;
