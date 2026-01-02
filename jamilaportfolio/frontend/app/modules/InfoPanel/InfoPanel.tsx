import {type PortableTextBlock} from 'next-sanity'
import {InfoPanel} from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { Image } from 'next-sanity/image'
import CustomImage from '@/app/components/Image/CustomImage'
import { url } from 'inspector'

export type InfoPanelProps = {
    block: InfoPanel,
    index: number
}

const InfoPanelBlock = ({
    block
}:InfoPanelProps) => {
    return (
        <section className="info-panel container">            
            {block.title && 
                <h1 className={"text-amber-400 font-bold"}>
                    {block?.title}
                </h1>
            }           
            {block?.blurb && Boolean(block?.blurb?.length > 0) && 
                <PortableText value={block.blurb as PortableTextBlock[]} />
            } 
            {block?.image?.asset?._ref || block?.image?.url &&
                <div className='w-[300px] h-[300px] rounded-full overflow-hidden object-cover'>
                    <CustomImage 
                        image={block?.image}
                    />
                </div>
            }            
        </section>    
    )
}

export default InfoPanelBlock;
