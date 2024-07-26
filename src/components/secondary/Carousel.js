"use client";
import 'flowbite/dist/flowbite.css';
import { useEffect } from 'react';

const Carousel = () => {

    useEffect(() => {
        const initializeFlowbite = async () => {
            try {
                const { initFlowbite } = await import('flowbite');
                if (initFlowbite) {
                    initFlowbite();
                }
            } catch (error) {
                console.error('Failed to initialize Flowbite:', error);
            }
        };

        initializeFlowbite();
    }, []);

    return (
        <div id="animation-carousel" className="relative z-0 w-full" data-carousel="slide">
            <div className="relative h-screen">
                <div className="duration-500 ease-linear" data-carousel-item="active">
                    <img src="/assets/carouselImg/img5.jpeg" className="absolute inset-0 object-cover w-full h-full filter brightness-50" alt="Slide 1" />
                </div>
                <div className="duration-500 ease-linear" data-carousel-item>
                    <img src="/assets/carouselImg/img1.jpeg" className="absolute inset-0 object-cover w-full h-full filter brightness-50" alt="Slide 2" />
                </div>
                <div className="duration-500 ease-linear" data-carousel-item>
                    <img src="/assets/carouselImg/img2.jpeg" className="absolute inset-0 object-cover w-full h-full filter brightness-50" alt="Slide 3" />
                </div>
            </div>
            <div className='absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full text-white'>
                <div className='flex flex-col gap-5 mt-16'>
                    <div className='text-4xl font-medium'>Academia de</div>
                    <div className='text-6xl font-semibold'>ARTES MARCIALES</div>
                    <div className='text-6xl font-semibold'>CHINAS <span className='text-orange-400'>LONG HUN</span></div>
                    <button className='px-6 py-3 mt-4 text-3xl font-semibold text-white bg-orange-400 rounded-lg w-fit'>VER MÁS</button>
                </div>
            </div>
            <button type="button" className="absolute top-0 z-40 flex items-center justify-center h-full px-4 bg-transparent border-none cursor-pointer start-0 group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 z-40 flex items-center justify-center h-full px-4 bg-transparent border-none cursor-pointer end-0 group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;



