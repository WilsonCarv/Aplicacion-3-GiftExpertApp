import { useState, useEffect } from "react"
import { getGifts } from "../helpers/getGifts";

export const useFetchGits = (category)=>{
const [state, setstate] = useState( //Se inicia el state con valores del objeto por defecto
    {
        data: [],
        loading: true
    }
);
   useEffect(()=>{
        getGifts(category)
        .then(imgs=>{          
                setstate({  //Se atualiza el state con los vlaores que trae desde la peticion http
                    data:imgs,
                    loading: false
                })
        })
   }, [category])//solo cuando la category haya cambiado

    return state //retorna el nuevo estado
}