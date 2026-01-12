import {Image as SanityImage} from 'next-sanity/image'
import Image from "next/image"
import {stegaClean} from '@sanity/client/stega'
import {getImageDimensions} from '@sanity/asset-utils'
import {urlForImage} from '@/sanity/lib/utils'
import demoImage from "../../../public/images/demo/demo_image__one.jpg"
 
interface CustomImageProps {
  image: any
  priority?: boolean
}

const CustomImage = (props: CustomImageProps) => {
  
  const {image: source, priority} = props;

  const image = (
    <SanityImage
      className="object-cover w-full"
      width={getImageDimensions(source).width}
      height={getImageDimensions(source).height}
      alt={stegaClean(source?.alt) || ''}
      src={urlForImage(source)?.url() as string}
      priority={priority}
    />
  ) 


  return (
    <>
      { image }
    </>
  )
}

export default CustomImage;

