import React from 'react'


const GifList = (props) => {
    console.log(props)
    return(
        <div>
            <ul>
                {props.gifs.map(gif => 
                <li>
                    <img src={gif} alt='gif'/>
                </li>)}
            </ul>
        </div>
    )
}

export default GifList;