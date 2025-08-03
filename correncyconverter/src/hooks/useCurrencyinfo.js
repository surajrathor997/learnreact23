
 
// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency.toLowerCase()}.json`);
//         const json = await res.json();
//         setData(json[currency.toLowerCase()]);
//       } catch (error) {
//         console.error("Error fetching currency data:", error);
//         setData({});
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;





















import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        .catch((err)=>console.error("Error fetching currency data:", err))

    },[currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;