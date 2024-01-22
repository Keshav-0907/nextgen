"use client";

import React, { useState, useEffect } from 'react';
import Joinbutton from './Joinbutton';

const Countdown = () => {
    const targetDate = new Date('2024-02-01T00:00:00Z');

    const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex font-inika justify-center items-center flex-col h-fit py-20 gap-3 bg-gray-100'>
            <div className='md:text-6xl text-3xl font-medium mb-6'>
                Event Will Start in
            </div>

            <div className='flex gap-4'>
                <div className='rounded-md flex h-fit flex-col text-center md:p-4 p-2 shadow-2xl'>
                    <span className='md:text-7xl text-3xl'>{String(timeRemaining.days).padStart(2, '0')}</span>
                    <span className='md:text-base text-sm'> Days </span>
                </div>

                <div className='rounded-md flex h-fit flex-col text-center md:p-4 p-2 shadow-2xl'>
                    <span className='md:text-7xl text-3xl'>{String(timeRemaining.hours).padStart(2, '0')}</span>
                    <span className='md:text-base text-sm'> Hours </span>
                </div>

                <div className='rounded-md flex h-fit flex-col text-center md:p-4 p-2 shadow-2xl'>
                    <span className='md:text-7xl text-3xl'>{String(timeRemaining.minutes).padStart(2, '0')}</span>
                    <span className='md:text-base text-sm'> Minutes </span>
                </div>

                <div className='rounded-md flex h-fit flex-col text-center md:p-4 p-2 shadow-2xl'>
                    <span className='md:text-7xl text-3xl'>{String(timeRemaining.seconds).padStart(2, '0')}</span>
                    <span className='md:text-base text-sm'> Seconds </span>
                </div>
            </div>

            <div className='mt-20'>
                <Joinbutton text={'Join the Cohort'}/>
            </div>
        </div>
    );
};

export default Countdown;
