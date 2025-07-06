import { useState } from "react"

export function Thumbnail({imageData, setMainImageUrl}) {
    function handleClick() {
        setMainImageUrl(imageData.url);
    }
    
    return (
        <>
            <a className="w-[calc(100%/3 - 20px)] h-[141px] overflow-hidden m-[10px] flex items-center" onClick={handleClick}>
                <img className="h-full" key={imageData.id} src={imageData.url} alt={imageData.alt} />
            </a>
        </>
    )
}