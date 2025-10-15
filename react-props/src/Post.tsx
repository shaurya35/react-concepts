interface Post {
    title: string;
    name: string;
    time: string;
    image: string;
    description: string;
}

const Post = ({title, name, time, image, description}: Post) => {
    return (
        <>
            {title}
            <br />
            {name}
            <br />
            {time}
            <br />
            <img src={image}/>
            <br />
            {description}
        </>
    )
}

export default Post;