import { getAllPostsForHome } from '../lib/api';
import { Post } from '../components/post';
import { ContentContainer } from '../components/content-container';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Articles({allPosts}){
    console.log('all posts', allPosts);
    return (
        <>
            <Header />
            <div className='bg-articles-headline py-10 text-white'>
                <ContentContainer>
                    <h1 className='text-2xl font-bold my-3'>Articles</h1>
                    <p className='w-full lg:w-1/2'>Looking for tips and tricks to help your business establish or grow its digital presence? Look no further! Browse our catalog of articles intended to help you bring the power of technology to your business</p>
                </ContentContainer>
            </div>
            <ContentContainer className='py-20'>
                <div>
                    <div className='flex flex-wrap justify-around gap-5'>
                        { allPosts.map((post, i) => <Post className="max-w-lg grow cursor-pointer bg-gray-100 p-5 my-3 h-fit" author={post.author? post.author.name : 'Undefined'} excerpt={post.excerpt} imgSrc={post.coverImage} title={post.title} key={i} />)}
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
      revalidate: 1
    }
  }
  