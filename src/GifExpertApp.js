import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{

    const [category, setCategory] = useState(['Goku']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>
                {
                    category.map(cate=>(
                        <GifGrid
                            key={cate}
                            category={cate}
                        />
                    ))
                }
            </ol>
        </>

    )

}