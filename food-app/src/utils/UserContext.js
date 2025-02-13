import { createContext, useState } from "react";

const UserContext = createContext({
    username:"default"
});

export const UserProvider = ({children}) =>{

    const [username, setUsername] = useState("");
    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;