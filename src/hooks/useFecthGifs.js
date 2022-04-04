import { useEffect, useState } from "react"
import { gitGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {
 const [state, setState] = useState({
     data:[],
     loading:true
 });

 useEffect(() => {
    gitGifs(category).then(img =>{
        setState({
            data: img,
            loading: false
        })
    });
}, [category]);

 return state;


}
