import { useEffect, useState } from "react";
import { Thumbnail } from "./Thumbnail";

export function ImagesMenu({setMainImageData, setMainImageSelected}) {
    const [imagesData, setImagesData] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://week-6-api.vercel.app/api/images");
            const data = await response.json();
            setImagesData(data);
            setImagesLoaded(true);
        }
        fetchData();
    }, []);

    return (
        <div aria-live="polite">
            <div className="flex flex-row justify-center">
                {imagesLoaded ? imagesData.map((image) => (<Thumbnail imageData={image} setMainImageData={setMainImageData} setMainImageSelected={setMainImageSelected} />)) : <p>Loading images...</p>}
            </div>
        </div>
    );
}