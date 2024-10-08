import Carousel from "../secondary/Carousel";

const Header = () => {
    return (
        <>
            <div className='hidden md:block'>
                <Carousel/>
            </div>
            <div className="relative md:hidden">
                <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                    <img
                        src="/assets/mobileHeader/opt3.jpeg"
                        alt="Header Image"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        className='filter brightness-30'
                    />
                    <div className='absolute top-0 left-0 z-30 flex items-center justify-center w-full h-full text-white'>
                        <div className='flex flex-col gap-5 mt-16'>
                        <div className='text-xl font-medium'>Academia de</div>
                        <div className='text-3xl font-semibold'>ARTES MARCIALES</div>
                        <div className='text-3xl font-semibold'>CHINAS <span className='text-orange-400'>LONG HUN</span></div>
                        <button className='px-6 py-3 mt-4 text-lg font-semibold text-white bg-orange-400 rounded-lg w-fit hover:bg-orange-600 active:bg-black' title='VER MAS'>VER MÁS</button>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Header;
