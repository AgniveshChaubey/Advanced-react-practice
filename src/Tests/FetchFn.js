import { useEffect, useState } from "react";

// export default function FetchFn() {
//     const [btcData, setBtcData] = useState({});
//     useEffect(() => {
//         fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
//             .then((response) => response.json())
//             .then((jsonData) => setBtcData(jsonData.bpi.USD))
//             .catch((error) => console.log(error));
//     }, [])


//     return (
//         <>
//             <h1>Current BTC/USD data</h1>
//             <p>Code: {btcData.code}</p>
//             <p>Symbol: {btcData.symbol}</p>
//             <p>Rate: {btcData.rate}</p>
//             <p>Description: {btcData.description}</p>
//             <p>Rate Float: {btcData.rate_float}</p>
//         </>
//     )

export default function FetchFn() {
    // const [btcData, setBtcData] = useState({}); 

    // const fetchData = () => { 
    //   fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
    //     .then((response) => response.json()) 
    //     .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
    //     .catch((error) => console.log(error)); 
    // }; 

    // useEffect(() => { 
    //   fetchData(); 
    // }, []); 

    // return ( 
    //   <> 
    //     <h1>Current BTC/USD data</h1> 
    //     <p>Code: {btcData.code}</p> 
    //     <p>Symbol: {btcData.symbol}</p> 
    //     <p>Rate: {btcData.rate}</p> 
    //     <p>Description: {btcData.description}</p> 
    //     <p>Rate Float: {btcData.rate_float}</p> 
    //   </> 
    // ); 


    const [user, setUser] = useState({});

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(user).lenght > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last NAme: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
}

