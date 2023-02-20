interface PropsTypes {
    title: string
}

const HeaderLink = ({
    title
}: PropsTypes) => {
    return (
        <li>
            <a>{title}</a>
        </li>
    )
}

export default HeaderLink;