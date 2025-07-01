import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() => {
        try{
              const value  = localStorage.getItem(key)
            return value? JSON.parse(value) : initialValue
        }catch(error){
            console.error(error)
            return initialValue
        }
      
    })

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(storedValue))
        }catch(error){
            console.error(error)
        }
               
    }, [key, storedValue])
    return [storedValue, setStoredValue]
}
export default useLocalStorage;