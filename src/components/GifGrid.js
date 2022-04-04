import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFecthGifs(category);

    
    return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p>Loading...</p>}
        <div className='card-grid'>
        
        {/*<ol>
            {-
                images.map(({id, title})=>(
                    <li
                        key={id}
                    >
                        {title}
                    </li>
                ))
            }
        </ol>
        */}
            {
                images.map((img)=>(
                <GifGridItems
                
                    key={img.id}
                    {...img}
                />
                ))
            }
        </div>
    </>
  )
}
