import Logo from '@/components/hybrid/Logo';
import Link from 'next/link';
import React from 'react';
import { PiHouse, PiChartLine, PiGear } from 'react-icons/pi';

const pageCategories = [
    {
        name: 'Overview',
        pages: [
            {
                name: 'Home',
                icon: <PiHouse />,
                path: '/dashboard/home',
            },
            {
                name: 'Analytics',
                icon: <PiChartLine />,
                path: '/dashboard/analytics',
            },
        ],
    },
    {
        name: 'Manage',
        pages: [
            {
                name: 'Settings',
                icon: <PiGear />,
                path: '/dashboard/settings',
            },
        ],
    },
];

const NavbarSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-8'>
            <div className='flex p-8'>
                <Logo />
            </div>

            <div className='w-full flex flex-col gap-8 px-4'>
                {pageCategories.map((category) => {
                    const name = category.name;
                    const pages = category.pages;
                    return (
                        <div key={`category_${category.name}`} className='w-full flex flex-col gap-2'>
                            <span>{name}</span>
                            {pages.map((page) => {
                                const name = page.name;
                                const icon = page.icon;
                                const path = page.path;
                                return (
                                    <Link key={`link_${name}`} href={path} className='w-full px-4 py-2 rounded-md transition-all hover:bg-gray-200'>
                                        <span className='flex flex-row gap-2 items-center'>
                                            {icon}
                                            {name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavbarSide;
