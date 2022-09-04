import React, {useState, useEffect} from "react"

export default function ActualYear(){
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() =>{
        const interval = setInterval(() =>{
            setYear(new Date().getFullYear())
        }, 100)
        return () => clearInterval(interval)
    }, [year])
    return(
        <>
        <span>{year}</span>
        </>
    )
}