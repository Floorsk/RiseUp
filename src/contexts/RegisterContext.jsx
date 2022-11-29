import {  useState, createContext } from "react";

export const RegisterContext = createContext ();

export const RegisterProvider = ({children}) => {

    const recieveStuLink = (link) => {
        
        console.log(link)
        const value = link
        return value

    }

    const recieveComLink = (link) => {
        
        console.log(link)
        const value = link
        return value

    }


    return(
        <RegisterContext.Provider value={{recieveStuLink, recieveComLink}}>
            {children}
        </RegisterContext.Provider>
    )
}