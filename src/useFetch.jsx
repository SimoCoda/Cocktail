import {useState, useEffect} from 'react'
import axios from 'axios'
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (type = false, query) => {
    const url = type ? singleUrl : searchUrl;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [isError, setIsError] = useState(false)
    
    useEffect(()=>{
        (async(query)=>{
            setIsError(false)
            setIsLoading(false)
            try {
                const res = await axios.get(`${url}${query}`)
                setData(res.data)
                setCount(res.data.drinks)
                console.log(res);
            } catch (error) {
                setIsError(true)
                setCount(0)
            }
            setIsLoading(false)
        },(query));
    }, [url,query])

    return {isLoading, isError, count, data};
}

export default useFetch;
