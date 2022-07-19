import { ComponentMeta, ComponentStory } from "@storybook/react"
import { IconButton } from "../../components/atom/IconButton"

export default {
    title: 'Atom/IconButton',
    component: IconButton,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />
    
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