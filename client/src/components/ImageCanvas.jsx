import { SelectedImage } from "./SelectedImage";

export function ImageCanvas({mainImageSelected, mainImageData}) {
    return (
        <div className="w-full h-[88vh] flex justify-center">
            {mainImageSelected && <SelectedImage mainImageData={mainImageData} />}
        </div>
    );
}