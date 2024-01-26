import { useEffect,useState } from "react";

const UseFetch = (url) => {
    const [data , setData] = useState(null);
    const [pending,setPeinding] = useState(true);
    const [error,setError] = useState(null);

    // const fetchAbort = new AbortController();
  
    useEffect(()=>{
        setTimeout( ()=>{
            fetch(url).then(res=> {
                if(!res.ok){
                    throw Error("coudn't fetch the data!!");
                }
            return res.json();
        })
        .then((fetchedData)=>{
            setData(fetchedData);
            setPeinding(false);
            setError(null);
        }).catch(err=>{
            if(err === "AbortError"){
                console.log("fech errrr abourted")
            }else{
              setPeinding(false);
            setError(err.message)  
            }
            
        })},1000);
        
    },[url])

    return { data , pending , error };
}
 
export default UseFetch;