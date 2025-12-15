import { InfoPanelBlock } from "@/sanity.types"

type InfoPanelProps = {
    block: InfoPanelBlock,
    index: number
}

export const InfoPanel = ({
    block
}:InfoPanelProps) => {
    return (
        <div>
            {block.title && 
                <h1 className={"text-amber-400 font-bold"}>
                    {block?.title}
                </h1>
            }
            {block?.blurb && 
                <p className="text-2xl">
                    {block?.blurb}
                </p>
            }
        </div>
    )
}