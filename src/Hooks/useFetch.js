import { useEffect, useState } from 'react';

const useFetch = (url,value) => {
    const [meals,setMeals] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMeals(data);
            setLoading(false);
        });
    },[value]);
    return [meals,setMeals,loading]
};

export default useFetch;