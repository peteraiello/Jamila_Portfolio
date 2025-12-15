interface InfoPanelProps {
    title?: string,
    blurb?: string 
}

export const InfoPanel = ({
    title,
    blurb
}:InfoPanelProps) => {
    return (
        <div>
            {title && 
                <h1 className={"text-amber-400 font-bold"}>
                    {title}
                </h1>
            }
            {blurb && 
                <p className="text-2xl">
                    {blurb}
                </p>
            }
        </div>
    )
}