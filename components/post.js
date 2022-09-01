import {imageBuilder} from '../lib/sanity'

export const Post = ({excerpt, imgSrc, title}) => {
    return (
        <div>
            <img className='max-w-lg h-lg flex-wrap' src={imageBuilder(imgSrc)} />
            <h3>{title}</h3>
            <p>{excerpt}</p>
        </div>
    )
}