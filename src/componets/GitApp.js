import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import {GiftGrid} from './GiftGrid'

export const GitApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState( ['One Punch']);
    // const handleAdd =() => {
    //     setCategories([...categories,'Naruto']);   
    //}
    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>
 
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