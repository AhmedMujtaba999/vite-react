import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData]= useState({});// to avoid crashing 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.3.16/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);

    },
[currency]
)

//console.log(data);
return data;
}

export default useCurrencyInfo;