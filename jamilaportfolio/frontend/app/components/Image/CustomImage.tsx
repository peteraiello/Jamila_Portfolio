import {Image as SanityImage} from 'next-sanity/image'
import Image from "next/image"
import {stegaClean} from '@sanity/client/stega'
import {getImageDimensions} from '@sanity/asset-utils'
import {urlForImage} from '@/sanity/lib/utils'
 
interface CustomImageProps {
  image: any
  priority?: boolean
}

const CustomImage = (props: CustomImageProps) => {
  
  const {image: source, priority} = props;

  const image = source?.asset?._ref ? (
    <SanityImage
      className="object-cover"
      width={getImageDimensions(source).width}
      height={getImageDimensions(source).height}
      alt={stegaClean(source?.alt) || ''}
      src={urlForImage(source)?.url() as string}
      priority={priority}
    />
  ) 
  : source?.url ? 
    <Image
      className="object-cover w-full"
      width={source?.width}
      height={source?.height}
      alt={source?.altText}
      src={source?.url}
      priority={priority}
    >
    </Image>
  :
    null 

  return (
    <>
      {image}
    </>
  )
}

export default CustomImage;

