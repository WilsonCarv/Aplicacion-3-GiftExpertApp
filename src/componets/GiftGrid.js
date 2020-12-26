import React  from 'react'
import { useFetchGits } from '../hooks/useFetchGifts';
import {GiftGridItem} from './GiftGridItem';

export const GiftGrid = ({category}) => {
    const {data:images, loading} = useFetchGits(category);//data:images => renombra la variable que se recibe en este caso se cambia a imagenes 
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p>Loading</p> }
        <div className="card-grid">
           
           {/* por cada una de las imagens crea el componente GiftGridItem para monstrar la informacion 
           siempre se le debe de pasae el parametro key */}
         
            {
                
                images.map(img => (
                    <GiftGridItem
                    key={img.id} 
                    {...img}
                    ></GiftGridItem>
                    
                ))
            }
        
        </div>
        </>
    )
}
