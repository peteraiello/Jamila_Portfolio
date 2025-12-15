import { InfoPanel } from "./InfoPanel";

export default {
    title: "Components/InfoPanel",
    component: InfoPanel
}

export const InfoPanelExample = () => {
    return (    
        <InfoPanel 
            index={1}
            block={
                {   
                    _type: "infoPanel",
                    title: "Lorem ipsum",
                    blurb: "Lorem ipsum"    
                }
            }
        />
    )
}