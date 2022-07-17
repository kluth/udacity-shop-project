import './button.css'

interface ButtonProps {
    primary: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    label: string
    children?: React.ReactNode
    onClick?: () => void
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor = 'navy',
    label = 'Button',
    children,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {children}
                {label}
        </button>
    )
}