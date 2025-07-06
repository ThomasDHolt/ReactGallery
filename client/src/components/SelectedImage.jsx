export function SelectedImage({mainImageData}) {
    return (
        <img className="h-[85vh] m-[10px]" key={mainImageData.id} src={mainImageData.url} alt={mainImageData.alt} tabIndex="0" />
    )
}