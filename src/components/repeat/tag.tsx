type TagProp = {
    text: string
}

const Tag = ({ text }: TagProp) => {
    return(
        <span className='span-tag'>{text}</span>
    )
}

export default Tag
