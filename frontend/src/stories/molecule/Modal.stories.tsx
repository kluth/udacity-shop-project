import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "../../components/molecule/Modal";

export default {
    title: 'Molecule/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen'
    },
    argTypes: {
        mode: { control: 'select', options: ['information', 'warning', 'error', 'success'] },
        isOpen: { control: 'boolean' },
        onClose: { action: 'onClose' },
        children: { control: 'text' }
    }
} as ComponentMeta<typeof Modal>;
    
const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Information = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const Success = Template.bind({})

Information.args = {
    mode: 'information',
    isOpen: true,
    onClose: () => { },
    children: 'This is a modal'
}

Warning.args = {
    mode: 'warning',
    isOpen: true,
    onClose: () => { },
    children: 'This is a modal'
}

Error.args = {
    mode: 'error',
    isOpen: true,
    onClose: () => { },
    children: 'This is a modal'
}

Success.args = {
    mode: 'success',
    isOpen: true,
    onClose: () => { },
    children: 'This is a modal'
}