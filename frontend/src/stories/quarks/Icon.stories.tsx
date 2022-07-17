import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Icon } from "../../components/quarks/Icon"

export default {
    title: 'Quarks/Icon',
    component: Icon,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        icon: { control: 'text' },
    }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Information = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const Success = Template.bind({})
export const Failure = Template.bind({})

Information.args = {
    icon: 'information',
    backgroundColor: 'navy'
}

Warning.args = {
    icon: 'warning',
    backgroundColor: 'orange'
}

Error.args = {
    icon: 'error',
    backgroundColor: 'red'
}

Success.args = {
    icon: 'success',
    backgroundColor: 'green'
}

Failure.args = {
    icon: 'failure',
    backgroundColor: 'red'
}