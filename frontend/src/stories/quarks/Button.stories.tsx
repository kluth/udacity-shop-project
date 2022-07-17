import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Button} from "../../components/quarks/Button";

export default {
    title: 'Quarks/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})

Primary.args = {
    primary: true,
    label: 'Button primary'
}

Secondary.args = {
    primary: true,
    label: 'Button secondary'
}

Small.args = {
    size: 'small',
    label: 'Button small'
}

Medium.args = {
    size: 'medium',
    label: 'Button medium'
}

Large.args = {
    size: 'large',
    label: 'Button large'
}

