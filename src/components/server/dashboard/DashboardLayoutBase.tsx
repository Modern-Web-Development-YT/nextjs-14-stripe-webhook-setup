import React from 'react'
import NavbarSide from './NavbarSide';
import NavbarTop from './NavbarTop';

type DashboardLayoutBaseProps = {
  children: React.ReactNode | React.ReactNode[];
}

const DashboardLayoutBase = ({children}: DashboardLayoutBaseProps) => {
  return (
    <div className='w-full flex flex-col'>
      <div className='w-[calc(100vw - 264px)] ml-[264px] h-[15%] border-l border-b border-l-gray-200 border-b-gray-200'>
        <NavbarTop />
      </div>

      <div className='w-full h-full flex flex-row'>
        <div className='fixed w-[264px] h-full top-0 left-0 pt-2 flex bg-white border-r-[1px]'>
          <NavbarSide />
        </div>

        <div className='w-full ml-[264px] relative flex justify-center p-8'>
          <div className='w-[100%] flex justify-center'>
            <div className='max-w-5xl flex flex-1'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayoutBase