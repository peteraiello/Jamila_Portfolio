import { v4 as uuidv4 } from 'uuid';
import InfoPanelBlock from './InfoPanel';
import type { Meta, StoryObj } from "@storybook/react"
import { DEMO_IMAGE } from '@/public/images/demo_images';

/*
const DEMO_IMAGE = {
    src: "/images/demo/demo_image__one.jpg",
    alt: "Demo Image One",
    width: 285,
    height: 380
}
*/
/*
const DEMO_IMAGE = {
    _type: "image",
    altText: "Jamila with yellow",
    asset: {
        _ref: "image-1c2c5b4c2b11bab07b6f4f542d4f9ec1beb99310-285x380-jpg",
        _type: "reference"
    }
}
*/

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
            image: DEMO_IMAGE,
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
