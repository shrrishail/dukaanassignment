import React, { Children } from 'react'
import { sidebarItems } from '../assets/menuItems'
import { SidebarMenuItem } from '../types/sidebar'
import LogoImage from '.././assets/logo.png';

const Sidebar = () => {
  const active = 'Payments';
  
  return (
    <aside className='h-full w-[224px] px-[10px] py-4 bg-[#1E2640]'>
        <nav className='h-full flex flex-col justify-start gap-4 p-2'>
          <div className="flex gap-3 justify-between items-center">
            <div className="w-fit h-fit">
              <img className='w-[39px] h-[39px]' src={LogoImage} alt="" />
            </div>
            <div className="title">
              <p>Nishyan</p>
              <a href="#" className='underline text-[13px]'>Visit Store</a>
            </div>
            <div className="actions">
            <svg className='ms-auto' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                fill="white"
              />
            </svg>
            </div>
          </div>

          <ul className="w-full flex flex-col gap-1 justify-start items-start overflow-auto">
            {
              Children.toArray(sidebarItems.map((item: SidebarMenuItem) => {
                return (
                  <li className='w-full'>
                    <a className={`w-full flex gap-2 justify-start items-center px-4 py-2 ${active === item.label ? 'bg-white/10 rounded' : ''}`}>
                      <span>
                        {item.icon}
                      </span>
                      <p className={`text-white/80 font-medium text-sm ${active === item.label ? 'text-white' : ''}`}>{item.label}</p>
                    </a>
                  </li>
                )
              }))
            }
          </ul>

          <div className="balance-box mt-auto flex gap-2 justify-start items-center bg-white/10 px-[12px] py-[6px] rounded-s">
            <span className='bg-white/10'>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.0002 1.79727C2.42343 1.79727 1.8002 2.35527 1.8002 3.24727V16.7473C1.8002 17.6393 2.42343 18.1973 3.0002 18.1973H21.0002C21.577 18.1973 22.2002 17.6393 22.2002 16.7473V13.8473H17.0003C14.874 13.8473 13.1503 12.1236 13.1503 9.99727C13.1503 7.87097 14.874 6.14727 17.0003 6.14727H22.2002V3.24727C22.2002 2.35527 21.577 1.79727 21.0002 1.79727H3.0002ZM23.8002 6.14727V3.24727C23.8002 1.65398 22.6326 0.197266 21.0002 0.197266H3.0002C1.36782 0.197266 0.200195 1.65398 0.200195 3.24727V16.7473C0.200195 18.3405 1.36782 19.7973 3.0002 19.7973H21.0002C22.6326 19.7973 23.8002 18.3405 23.8002 16.7473V13.8473H23.8503V6.14727H23.8002ZM16.0002 9.94727C16.0002 9.47783 16.3808 9.09727 16.8502 9.09727H18.1502C18.6197 9.09727 19.0002 9.47783 19.0002 9.94727C19.0002 10.4167 18.6197 10.7973 18.1502 10.7973H16.8502C16.3808 10.7973 16.0002 10.4167 16.0002 9.94727ZM14.8503 9.99727C14.8503 8.80986 15.8129 7.84727 17.0003 7.84727H22.1503V12.1473H17.0003C15.8129 12.1473 14.8503 11.1847 14.8503 9.99727Z" fill="white"/>
              </svg>
            </span>
            <div className="text">
              <p className='font-normal'>Available credits</p>
              <p className='font-medium'>222.10</p>
            </div>
          </div>
        </nav>
      </aside>
  )
}

export default Sidebar