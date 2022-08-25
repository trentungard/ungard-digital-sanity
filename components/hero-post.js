import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import PostPreview from './post-preview'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='bg-kinda-white flex flex-col xl:flex-row gap-7 items-center'>
      <div className='basis-3/4 xl:basis-1/2'>
        <h2 className='text-3xl py-5 font-bold leading-relaxed'>Looking for information to help your business establish its digital presence?</h2>
        <p className='text-xl'>Look no further! Browser our catalog of articles intended to provide you with the info you need to get your business online.</p>
      </div>
      <PostPreview 
        title={title}
        coverImage={coverImage}
        date={date}
        author={author}
        alug={slug}
        excerpt={excerpt}
      />
    </div>
  )
}
