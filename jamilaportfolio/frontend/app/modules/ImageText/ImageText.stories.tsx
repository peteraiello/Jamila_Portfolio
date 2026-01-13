import { v4 as uuidv4 } from 'uuid';
import ImageText, {ImageTextProps} from './ImageText';
import type { Meta, StoryObj } from "@storybook/react"
import { DEMO_IMAGE } from '@/public/images/demo_images';

const meta = {
    title: "modules/ImageText",
    component: ImageText,
    argTypes: {
        index: {type: "number"},
        block: {
            title: {type: "string"},
        }
    }
} satisfies Meta<typeof ImageText>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        index: 1,
        block: {
            title: "This is the title field",
            image: DEMO_IMAGE,
            _type: "imageText",
            content: [{
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
