import { v4 as uuidv4 } from 'uuid';
import InfoPanelBlock from './InfoPanel';
import type { Meta, StoryObj } from "@storybook/react"

const DEMO_IMAGE = {
    src: "/images/demo/demo_image__one.jpg",
    alt: "Demo Image One",
    width: 285,
    height: 380
}

const meta = {
    title: "modules/InfoPanelBlock",
    component: InfoPanelBlock,
    argTypes: {
        index: {type: "number"},
        block: {
            title: {type: "string"},
        }
    }
} satisfies Meta<typeof InfoPanelBlock>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        index: 1,
        block: {
            title: "This is the title field",
            image: {
                url: DEMO_IMAGE?.src,
                altText: DEMO_IMAGE?.alt,
                width: DEMO_IMAGE?.width,
                height: DEMO_IMAGE?.height
            },
            _type: "infoPanel",
            blurb: [{
                _key: uuidv4(),
                _type: "block",
                children: [
                    {
                        _key: uuidv4(),
                        _type: "span",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus lacus, commodo vitae nibh ut, tincidunt gravida ex. Proin feugiat sed tortor nec ultricies. In congue laoreet mi ut tincidunt. Sed blandit eget nisl sed iaculis. Cras semper vulputate orci, a pellentesque risus ornare ut. Duis nisl enim, imperdiet id ipsum non, pulvinar convallis risus. Nullam eget urna dolor. Nam euismod diam risus, ac iaculis quam pellentesque sit amet."
                    }
                ]
            }]
        }
    }
}
