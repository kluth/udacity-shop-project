import { IconButton } from "../atom/IconButton"

interface ModalProps {
    mode: 'information' | 'warning' | 'error' | 'success'
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({
    mode,
    isOpen,
    onClose,
    children
}: ModalProps) => {
    return (
        <div className={`storybook-modal--${mode}`}>
            <IconButton primary={false} label={"Close"} icon={"failure"} />
        </div>
    )
}