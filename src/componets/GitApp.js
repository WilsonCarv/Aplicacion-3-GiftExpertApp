import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import {GiftGrid} from './GiftGrid'

export const GitApp = () => {

    const [categories, setCategories] = useState( ['One Punch']);//se inicia la lista con una categoria por defecto
    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>
            {/* expresion utilizada para colocar codigo js en el jsx */}
           <ol> 
            {
                    categories.map((category) => (
                   <GiftGrid key={category}
                    category={category}></GiftGrid>              
                   ))
            }
             
           </ol>
        </div>
    )
}
           // {/* <button onClick={handleAdd}>Agregar</button> */}