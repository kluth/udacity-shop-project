import { Button } from "../quarks/Button"
import { Icon } from "../quarks/Icon"

export const IconButton = ({
    primary = false,
    label = "",
    icon = "",
    onClick = () => { },
    ...props
}) => {
    return (
        <Button primary={primary} label={label} >
            <Icon icon={icon} />
        </Button>
    )
}