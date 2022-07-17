import './icon.css'

interface IconProps {
    icon: string
    backgroundColor?: string
    onClick?: () => void
}

export const Icon = ({
    icon,
    backgroundColor,
    onClick,
    ...props
}: IconProps) => {
    return (
        < svg
            className={`storybook-icon storybook-icon--${icon}`}
    viewBox = "0 0 100 100"
    fill = "none"
    xmlns = "http://www.w3.org/2000/svg"
            {...props}
>
    < path
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    fill="#fff"
/>
    < path
    d="M12 8C14.2091 8 16 9.79087 16 12C16 14.2091 14.2091 16 12 16C9.79087 16 8 14.2091 8 12C8 9.79087 9.79087 8 12 8Z"
    fill="#fff"
/>
    < path
    d="M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z"
    fill="#fff"
/>
    </ svg >
    )
}