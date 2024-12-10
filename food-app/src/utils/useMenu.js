import { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        fetchMenu(resId);
    }, []);

    const fetchMenu = async (resId) => {
        const response = await fetch(Menu_URL+resId);
        const data = response.json();
        setMenu(data?.data?.cards);
    }

    return menu;
}

export default useMenu;
