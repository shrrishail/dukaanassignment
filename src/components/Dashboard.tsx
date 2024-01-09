import React, { Children } from 'react'
import Header from './Header'
import entries from '../assets/entries.json';

const Dashboard = () => {

    return (
        <main className='w-[calc(100%-224px)] bg-[#FAFAFA] h-max-100'>
            <Header />
            <div className='p-8 flex flex-col justify-start gap-8 text-[#1A181E] overflow-y-scroll max-h-[100vh] pb-24'>
                {/* top cards */}
                <div className="overview flex flex-col gap-6 justify-start">
                    <div className="heading flex justify-between items-center">
                        <h2 className='text-[20px] font-medium'>Overview</h2>
                        <button className='rounded border border-[#D9D9D9] bg-white px-4 py-[6px] gap-4 flex justify-center items-center'>
                            <span>Last Month</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z" fill="#4D4D4D"/>
                            </svg>
                        </button>
                    </div>
                    <div className="cards flex gap-5">
                        <div className="bg-white flex flex-col gap-4 flex-1 rounded-lg p-5 stats-shadow">
                            <p className='text-[#4D4D4D]'>Online orders</p>
                            <p className='font-medium text-[32px]'>231</p>
                        </div>
                        <div className="bg-white flex flex-col gap-4 flex-1 rounded-lg p-5 stats-shadow">
                            <p className='text-[#4D4D4D]'>Amount received</p>
                            <p className='font-medium text-[32px]'>₹23,92,312.19</p>
                        </div>
                    </div>
                </div>

                {/* table */}
                <div className="table-portion flex flex-col justify-start gap-5">
                    <div className='text-xl font-medium'>
                        Transactions | This Month
                    </div>

                    <div className='w-full bg-white rounded-lg px-3 pt-3 pb-6'>
                        {/* header */}
                        <div className='flex justify-between mb-3'>
                            <div className="search-bar relative w-[248px]">
                                <svg className='absolute left-[9px] top-[50%] translate-y-[-50%]' width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999"/>
                                </svg>
                                <input type="text" className='w-full outline-none h-[40px] text-sm bg-transparent px-4 ps-[34px] py-[9px] rounded-[6px] border border-[#D9D9D9]' placeholder='Search by order ID...' />
                            </div>
                            <div className="actions flex gap-3">
                                <button className="flex justify-center items-center gap-[6px] px-3 py-1 rounded-[6px] border border-[#D9D9D9]">
                                    <span>Sort</span>
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z" fill="#4D4D4D"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z" fill="#4D4D4D"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z" fill="#4D4D4D"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z" fill="#4D4D4D"/>
                                    </svg>
                                </button>
                                <button className='rounded-[6px] border border-[#D9D9D9] px-3 py-1'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* table */}
                        {/* table header */}
                        <div className='bg-[#F2F2F2] flex gap-10 px-3 py-[10px] text-sm rounded'>
                            <span className='w-[25%]'>Order ID</span>
                            <span className='w-[25%]'>
                                Order date 
                                <svg className='inline ms-1' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z" fill="#4D4D4D"/>
                                </svg>
                            </span>
                            <span className='w-[25%] text-right'>Order amount</span>
                            <span className='w-[25%] flex justify-center items-center'>
                                <span className='text-right'>
                                    Transaction fees
                                </span>
                                <svg className='ms-1 inline' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D"/>
                                </svg>
                            </span>
                        </div>

                        {/* table entries */}
                        <div className='flex flex-col justify-start h-auto'>
                            {
                                Children.toArray(entries.map((entry) => {
                                    return (
                                        <div className='border border-transparent border-b-[#E6E6E6] flex gap-10 py-[10px] px-3 text-sm'>
                                            <span className='w-[25%]'>{entry.id}</span>
                                            <span className='w-[25%]'>{entry.date}</span>
                                            <span className='w-[25%] text-right'>{entry.amount}</span>
                                            <span className='w-[25%] flex justify-center items-center'>{entry.transactionFees}</span>
                                        </div>
                                    )
                                }))
                            }
                        </div>

                        <div className="buttons mt-6 flex w-full justify-center items-center gap-6">
                            <button className="previous py-[6px] px-3 border border-[#D9D9D9] rounded text-sm">
                                <svg className='me-2 inline' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z" fill="#4D4D4D"/>
                                </svg>
                                Previous
                            </button>
                            <div className='pages flex justify-center gap-2 items-center text-sm'>
                                <p className='px-[2px]'>1</p>
                                <p className='px-[2px]'>...</p>
                                <p className='px-2 py-[6px] text-white rounded bg-[#146EB4]'>10</p>
                                <p className='px-[2px]'>11</p>
                                <p className='px-[2px]'>12</p>
                                <p className='px-[2px]'>13</p>
                                <p className='px-[2px]'>14</p>
                                <p className='px-[2px]'>15</p>
                                <p className='px-[2px]'>16</p>
                                <p className='px-[2px]'>17</p>
                                <p className='px-[2px]'>18</p>
                            </div>
                            <button className="previous py-[6px] px-3 border border-[#D9D9D9] rounded text-sm">
                                Next
                                <svg className='ms-2 inline' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z" fill="#4D4D4D"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard