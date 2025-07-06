export function Thumbnail({imageData, setMainImageData, setMainImageSelected}) {
    function handleClick() {
        setMainImageData(imageData);
        setMainImageSelected(true);
    }
    
    return (
        <>
            <a className="w-max-[10vw] h-[10vh] overflow-hidden m-[10px] flex items-center rounded-lg hover:outline-black dark:hover:outline-white hover:outline-2 hover:outline-offset-2" onClick={handleClick} onKeyDown={handleClick} tabIndex="0" role="button">
                <img className="h-full" key={imageData.id} src={imageData.url} alt={imageData.alt} />
            </a>
        </>
    )
}