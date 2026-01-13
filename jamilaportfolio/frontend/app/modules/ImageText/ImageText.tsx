import Image from "next/image";
import { ImageTextBlockProps } from "@/sanity.types";
import { PortableText } from "next-sanity";
import { PortableTextBlock } from "next-sanity";
import CustomImage from "@/app/components/Image/CustomImage";

export type ImageTextProps = {
    index: number,
    block: ImageTextBlockProps
}

const ImageText = ({
    index,
    block
}:ImageTextProps) => {
    return (
        //        {getBackgroundClass()}
        <section className="">        
            <div className="flex flex-row">
                <div className="flex-1">
                    {block?.title && 
                        <h3 className="text-2xl">{block?.title}</h3>
                    }        
                    {block?.content &&
                        block?.content && Boolean(block?.content?.length > 0) && 
                            <PortableText value={block.content as PortableTextBlock[]} />
                    }   
                </div>

                {block?.image &&
                    <div className="flex-1">
                        <CustomImage
                            image={block?.image}
                        />         
                    </div>
                }
            </div>
        </section>
    )
}

export default ImageText;