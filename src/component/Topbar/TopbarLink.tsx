type Props = {
    name: string
    link: string
}

export default function TopbarLink(props: Props){
    return (
        <a href={props.link}>{props.name}</a>
    )
}