import { ContactForm } from '../components/ContactForm';
import { ContentContainer } from '../components/content-container';
import { TitleSection } from '../components/title-section';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact(){
    const title = 'Contact Us';
    const description = 'Fill out the form below to get in contact with us! We typically respond within 48 business hours.'
    return (
        <>
            <Header />
            <TitleSection title={title} description={description} />
            <ContentContainer className='py-20'>
                <div>
                    <ContactForm />
                </div>
            </ContentContainer>
            <Footer />
        </>
    )
};