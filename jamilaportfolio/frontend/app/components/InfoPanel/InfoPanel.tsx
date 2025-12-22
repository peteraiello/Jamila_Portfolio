import {type PortableTextBlock} from 'next-sanity'
import {InfoPanel} from '@/sanity.types'
import { PortableText } from 'next-sanity'

type InfoPanelProps = {
    block: InfoPanel,
    index: number
}

export default function InfoPanelBlock({block}: InfoPanelProps) {
    console.log("block ", block);
    return (
        <div>
            {block.title && 
                <h1 className={"text-amber-400 font-bold"}>
                    {block?.title}
                </h1>
            }
            {block?.blurb?.length &&                
                <PortableText value={block.blurb as PortableTextBlock[]} />
            }
        </div>
    )
}
