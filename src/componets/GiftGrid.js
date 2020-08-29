import React  from 'react'
import { useFetchGits } from '../hooks/useFetchGifts';
import {GiftGridItem} from './GiftGridItem';

export const GiftGrid = ({category}) => {
    const {data:images, loading} = useFetchGits(category);
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p>Loading</p> }
        <div className="card-grid">
           
         
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
