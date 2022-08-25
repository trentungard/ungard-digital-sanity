import { ContentContainer } from './content-container'
import Logo from './logo'
import { EXAMPLE_PATH } from '../lib/constants'
import logoBlue from '../public/LogoBlue.svg'

export default function Footer() {
  return (
    <footer className="bg-moonbeam text-kinda-white">
      <ContentContainer className='flex justify-between items-center'>
        <div className="py-28 items-center">
          <div className='flex items-center'>
            <img src={logoBlue.src} width='150px' />
            <h3 className='text-6xl m-5'>Ungard Digital</h3>
          </div>
          <p className='text-4xl font-light w-3/4 my-5'>Bringing the power of technology to your business.</p>
        </div>
        <div>
          <h4 className='text-lg'>Company</h4>
          <ul className='font-light'>
            <li className='my-2'>About</li>
            <li className='my-2'>Contact</li>
            <li className='my-2'>News</li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg'>Other</h4>
          <ul className='font-light'>
            <li className='my-2'>Terms and Conditions</li>
            <li className='my-2'>Privacy Policy</li>
            <li className='my-2'>Customer Disclaimer</li>
          </ul>
        </div>
      </ContentContainer>
    </footer>
  )
}
