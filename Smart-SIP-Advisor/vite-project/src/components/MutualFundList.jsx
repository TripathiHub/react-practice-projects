import { useEffect,useState } from "react"
export default function MutualFundList({schemeCode}){
    const [data,Setdata]=useState(null)
    const [isLoding,setIsLoading]=useState(true);
    const [error,setError]=useState(false);
    useEffect(()=>{
        async function fecthFunds() {
            try{
             const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
             const data =  await response.json();
             Setdata(data);
             console.log(data.data[0].date);
             console.log(data.data[0].nav);
        }catch(error){
        console.error(error);
        setError(true)
              }
              finally{
                setIsLoading(false);
              }
}
        fecthFunds(schemeCode);
    },[schemeCode])
    return(
        <>
            <div className="fund-card-1">
            {isLoding ? (
                   <h3 className="fund-loading">
                     Loading fund data...
                   </h3>
                ): error || !data ? (
                    <h3 className="fund-error">Couldnot load this fund</h3>
                ) :(
                <>
               <h3>{data.meta.scheme_name}</h3>
               <p><span>NAV</span><span>₹{Number(data.data[0].nav).toFixed(2)}</span></p>
               <p><span>Date</span><span>{data.data[0].date}</span></p>
                </>
                )}
            </div>
        </>
    )
}