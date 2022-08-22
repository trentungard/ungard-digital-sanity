import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      width={1240}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small h-full', {
        'hover:shadow-medium transition-shadow duration-200 h-full': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
    />
  )

  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}
