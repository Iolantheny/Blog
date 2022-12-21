import * as React from "react"
import { Link } from "gatsby"

interface Post {
    slug: string;
    image: string;
    link: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
}

const BlogPost = (props: Post): JSX.Element => {
    return (
        <Link to={props.slug} className="blogpost">
            <img src={props.image} alt="post image" className="blogpost__img" />
            <div className="blogpost__text">
                <div className="blogpost__text blogpost__text--date">
                    <p>{props.date}</p>
                    <p>{props.author}</p>
                </div>
                <p className="blogpost__text blogpost__text--title">{props.title}</p>
                <p>{props.subtitle}</p>
                <div className="blogpost__text blogpost__text--arrow">❱</div>
            </div>
            <hr className="blogpost__hr" />
        </Link>
    )
}

export default BlogPost