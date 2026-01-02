import Image from "next/image";
import { ImageTextBlockProps } from "@/sanity.types";
import { PortableText } from "next-sanity";
import { PortableTextBlock } from "next-sanity";

export type ImageTextProps = {
    index: number,
    block: ImageTextBlockProps
}

const ImageText = ({
    index,
    block
}:ImageTextProps) => {
    return (
        <div>
            {block?.title && 
                <h3>{block?.title}</h3>
            }        
            {block?.content &&
                block?.content && Boolean(block?.content?.length > 0) && 
                    <PortableText value={block.content as PortableTextBlock[]} />
            }   
        </div>
    )
}

export default ImageText;