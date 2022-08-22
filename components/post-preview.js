import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import {imageBuilder} from '../lib/sanity'
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  order
}) {
  return order === 0 ? (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className='relative flex items-center justify-center row-span-2'>
        <div className='bg-moonbeam/70 w-full h-full absolute' />
        <CoverImage title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
        <div className='absolute top-0 bottom-0 m-auto text-white flex flex-col items-center justify-center'>
          <span className='text-center'>{title}</span>
          <Date dateString={date} />
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </Link>
  ) : (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className='relative flex items-center justify-center'>
        <div className='bg-moonbeam/70 w-full h-full absolute' />
        <CoverImage title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
        <div className='absolute top-0 bottom-0 m-auto text-white flex flex-col items-center justify-center'>
          <span className='text-center'>{title}</span>
          <Date dateString={date} />
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
