export function ImageCanvas({mainImageSelected, mainImageData}) {
    return (
        <div className="w-full h-[88vh] flex justify-center">
            {mainImageSelected && <img className="h-[85vh] m-[10px]" key={mainImageData.id} src={mainImageData.url} alt={mainImageData.alt} />}
        </div>
    );
}