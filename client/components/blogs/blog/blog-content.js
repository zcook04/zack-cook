import ReactMarkdown from 'react-markdown'

import classes from './blog-content.module.css'

function BlogContent(props) {
    return (
        <article className={classes.article}>
            <ReactMarkdown>{props.blogContent}</ReactMarkdown>
        </article>
    )
}

export default BlogContent
