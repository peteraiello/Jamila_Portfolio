import { InfoPanel } from "./InfoPanel";

export default {
    title: "Components/InfoPanel",
    component: InfoPanel
}

export const InfoPanelExample = () => {
    return (
        <>
            <InfoPanel 
                title={"Lorem ipsum."} 
                blurb={"Lorem ipsum."}
            />
        </>
    )
}