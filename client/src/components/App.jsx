import { useState } from 'react'
import '../styles/App.css'
import { ImageCanvas } from './ImageCanvas'
import { ImagesMenu } from './ImagesMenu'

export default function App() {
  const [mainImageData, setMainImageData] = useState({});
  const [mainImageSelected, setMainImageSelected] = useState(false);

  return (
    <div className='dark:bg-[#161616]'>
      <ImageCanvas mainImageData={mainImageData} mainImageSelected={mainImageSelected} />
      <ImagesMenu setMainImageData={setMainImageData} setMainImageSelected={setMainImageSelected} />
    </div>
  )
}
