import whiteLogo from '../public/LogoWhite.svg'

export const MaintenanceMode = () => {
    return(
        <div className='bg-gradient-to-br from-avenue-blue via-ungard-blue to-moonbeam w-full h-screen text-white flex justify-center items-center overflow-hidden'>
            <div className='text-center'>
                <h1 className='text-3xl xl:text-6xl p-5'>Sorry, we're currently down for maintenance :(</h1>
                <p className='text-lg xl:text-2xl p-5'>
                    Have an urgent matter? Feel free to send an email to 
                    <a className='underline mx-2' href="mailto:trent@ungarddigital.com">trent@ungarddigital.com</a> <br/>
                    or give me a call at <a className='underline mx-2' href="tel:15705607532">(570)560-7532</a>
                </p>
                <img className='mx-auto my-5 w-44 xl:w-96' src={whiteLogo.src} />
                <p className='text-4xl xl:text-8xl p-5'>Ungard Digital</p>
            </div>
        </div>
    )
}