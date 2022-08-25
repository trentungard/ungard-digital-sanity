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
      <div className='relative flex items-center justify-center row-span-1 lg:row-span-2 shadow-xl border-2 border-moonbeam'>
        <div className='w-full h-full absolute' />
        <CoverImage title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
        <div className='p-3 bg-ungard-blue/90 w-3/4 lg:2-1/2 h-3/4 lg:h-1/2 absolute top-0 bottom-0 m-auto text-white flex flex-col items-center justify-center'>
          <span className='text-center font-bold text-xs md:text-sm lg:text-md'>{title}</span>
          <Date className='text-center text-xs md:text-sm lg:text-md' dateString={date} />
        </div>
      </div>
    </Link>
  ) : (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className='relative flex items-center justify-center row-span-1 shadow-xl border-2 border-moonbeam'>
        <CoverImage title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
        <div className='p-3 bg-ungard-blue/90 w-3/4 lg:w-1/2 h-3/4 lg:h-1/2 absolute top-0 bottom-0 m-auto text-white flex flex-col items-center justify-center'>
          <span className='text-center font-bold text-xs md:text-sm lg:text-md'>{title}</span>
          <Date className='text-center text-xs md:text-sm lg:text-md' dateString={date} />
        </div>
      </div>
    </Link>
  )
}
