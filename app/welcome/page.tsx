"use client";
import Link from 'next/link'
import ButtonComp from '@/components/button-component';
import Image from "next/image"


import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// From Shadcnx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"


// Icon
import { Facebook, Instagram, YouTube } from '@mui/icons-material';


// 
const div = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '0px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

import { PlaySquare } from 'lucide-react';
import Header from '@/components/header';

export default function Welcome() {
    const inks = [

        {
            name: "Our team has been working on tasksync for almost 2 months because our office still closed. It's been an AWESOME! experience for me. \n Thank you Tasksync and team",
            bg: "w-full flex align-center justify-start flex-row gap-2 sm:gap-3",
            user_image_source: "/user-photo.png",
            text_style: "text-white space-y-0 text-bold flex items-start justify-end flex-col",
            user_name: "Pedro Ibanez",
            user_role: "UI Designer at Perxels"
        },
        {
            name: "I got the best experience when managing my tasks on tasksync. The interaction between other platforms are seamless and fast. I'd definitely recommend it anytime!",
            bg: "w-full flex align-center justify-start flex-row gap-2 sm:gap-3",
            user_image_source: "/user-photo.png",
            text_style: "text-white space-y-0 text-bold flex items-start justify-end flex-col",
            user_name: "Eld Lanvon",
            user_role: "Sofware Engineer"
        },
        {
            name: "Just Three words : Tasksync is awesome!",
            bg: "w-full flex align-center justify-start flex-row gap-2 sm:gap-3",
            user_image_source: "/user-photo.png",
            text_style: "text-white space-y-0 text-bold flex items-start justify-end flex-col",
            user_name: "Coby Von",
            user_role: "Graphics Designer"
        },
        {
            name: "Can't stop using tasksync!",
            bg: "w-full flex align-center justify-start flex-row gap-2 sm:gap-3",
            user_image_source: "/user-photo.png",
            text_style: "text-white space-y-0 text-bold flex items-start justify-end flex-col",
            user_name: "Jobri Dan",
            user_role: "Scientist"

        }
    ];

    return (
        <div className='w-full bg-[#f5f5f5] rounden-0 m-0  '>
            <div className='w-full rounded-0 border-0 pt-4 sm:pt-5'>
                <div className='px-0 sm:px-9'>
                    <Header />
                </div>

                {/* -------------------------------- */}
                <div className='flex items-center justify-center px-3 sm:px-10 h-auto flex-col bg-[#f5f5f5] space-y-[20px] pb-0 rounded-0'>


                    <h3 className='space-x-3  w-fit sm:w-160 h-auto pb-[20px] pt-10 m-0 font-sans text-center text-[30px] sm:text-[55px] text-zinc-600 font-normal'>Your
                        <b className='font-sans font-extrabold text-[30px] sm:text-[55px]  text-black pl-2 sm:pl-5'>mobile workspace </b>

                        at the palm of your hands</h3>


                    <h4 className='w-80 sm:w-fit h-auto font-sans font-medium text-[13px] sm:text-[17px] text-center text-zinc-600 m-0 pt-[4px] sm:pt-[13px]'>"Enhance workflows and achieve clear visibility across teams to make confident strategic decisions."</h4>


                    <h4 className='w-80 sm:w-fit h-auto font-sans text-[13px] sm:text-[17px] font-medium text-center text-zinc-600 m-0 pt-[13px] sm:pt-[18px]'>No credit card needed ✦ Unlimited time on Free plan</h4>

                    <div className='flex items-center justify-center flex-row mt-[20px] sm:mt-[35px] space-x-[10px]'>
                        <Link href="/onBoardingScreens"><ButtonComp buttonName="Get Started" /></Link>
                        <Link href="/onBoardingScreens"><ButtonComp buttonName="Go to dashboard" /></Link>
                    </div>
                </div>


                {/* -------------------------------> */}
                <div className='text-black font-sans relative pt-0 p-5 sm:p-5 bg-[#f5f5f5] block items-center justify-center flex-col rounded-0 w-auto md:h-auto h-auto'>
                    <h3 className='h-auto text-[25px] mb-[20px] mt-[37px] sm:mt-[47px] text-left text-zinc-600 font-sans w-full sm:w-full pl-[19px] sm:pl-[39px] text-bold'>What would you like to <b className='font-extrabold text-black'> manage?</b></h3>

                    <div className='w-full h-auto sm:h-80 grid grid-cols-1 sm:grid-cols-2 gap-5' >
                        <Image
                            src="/Chatting 1.png"
                            width={500}
                            height={500}
                            alt="People Chatting"
                            className='w-fit sm:w-90 lg:w-fit h-full text-black rounded-[26.17px] bg-white flex justify-self-end'
                        />
                        <div className='w-auto md:w-full xl:w-100 h-full px-10 py-10 rounded-[26.17px] bg-[#99C2EF] flex items-center flex-col justify-center justify-self-center'>
                            <h3 className='h-auto font-sans font-bold text-[25px] text-black text-center'>Task Management</h3>
                            <h6 className='h-auto font-sans text-[15px] text-center text-zinc-600 font-normal pt-3'>enhances efficiency by allowing teams to organize, prioritize, and track work activities, ensuring that critical tasks are completed on time</h6>
                        </div>
                    </div>
                </div>


                {/* -------------------> */}
                <div className='w-auto h-auto sm:h-90 relative p-5 sm:p-10 rounded-0 gap-5 mb-[83px] grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex items-center justify-self-end space-y-5 flex-col w-auto md:w-80 h-full px-10 py-10 rounded-[26.17px] bg-[#99C2EF] border-0'>
                        <h3 className=' h-auto font-arial font-bold text-[25px]  text-center text-black'> Reporting and Analytics</h3>
                        <h3 className=' h-auto font-arial font-normal text-[15px] text-center text-zinc-600'>provides valuable insights into performance metrics, enabling management to make data-driven decisions and optimize workflows effectively.</h3>
                    </div>
                    <Image
                        src="/Content Creation 1.png"
                        width={500}
                        height={500}
                        alt="Content Creation"
                        className='w-fit sm:w-90 lg:w-fit h-full flex items-center justify-center rounded-[26.17px] bg-white'
                    />
                </div>

                <div className='p-5 sm:p-20 w-full h-[342px] sm:h-[542px] relative flex items-center justify-center flex-col text-white bg-[#101010] rounded-0'>
                    <h6 className='w-fit auto font-normal text-[15px] sm:text-[25px] text-center mb-[84px] sm:mb-[94px]'>Core solutions that span across <br /> All other platforms linked in <span className='font-sans font-extrabold text-[15px] sm:text-[25px] align-center'> ONE WORK SPACE. </span>
                    </h6>
                    <Link href='#' >
                        <PlaySquare className='z-20 relative rounded-[20px] hover:text-gray-400 transition-all text-white w-20 h-20' />
                    </Link>
                </div>


                <div className='w-full bg-[#f5f5f5] pt-[90px] pb-[32px] sm:pb-[62px] p-10'>
                    <h2 className='w-auto font-sans text-[30px] font-bold text-black text-left pl-0 md:pl-[46px] '>Connect Multiple integrations</h2>
                    <h3 className='text-left w-auto md:w-[429px] font-sans text-[15px] pt-3 font-medium text-zinc-600 pl-0 md:pl-[46px]'>Ensure your company's data is completely secure and that you are in compliance with the latest standards</h3>
                </div>

                {/* <div className='w-full bg-[#f5f5f5] flex-row justify-around  items-center space-x-5 px-[42px] sm:px-[72px] pb-[19px] sm:pb-[59px]'> */}
                <div className='w-full bg-[#f5f5f5] columns-2xl grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 px-[42px] sm:px-[72px] pb-[19px] sm:pb-[59px] gap-x-10 '>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="120" height="80" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M58.363 51.1651C58.363 46.4164 61.0037 43.1017 65.8078 43.1017C68.7348 43.1017 71.1337 44.3276 72.4333 45.5284C72.778 45.8204 72.9123 46.3951 72.7515 46.8897L71.6935 49.7894C71.4979 50.2627 71 50.2021 70.7455 50.0311C69.8197 49.416 68.3037 48.3781 66.9277 48.1861C66.5855 48.1381 66.2277 48.1132 65.8652 48.1236C64.637 48.1591 63.6127 48.7179 63.2499 49.9456C63.1768 50.1896 63.1374 50.4331 63.1337 50.6751C63.1019 52.2927 64.8168 52.8762 66.8962 53.3417C70.7649 54.2107 73.6887 55.6971 73.6887 60.9126C73.6887 65.3422 70.9844 69.3467 65.7349 69.2239C62.2637 69.1322 59.8014 67.5979 58.4812 66.1032C58.4367 66.0532 57.9339 65.3819 58.2027 64.5774C58.5114 63.5391 59.0299 62.3471 59.4389 61.7214C59.6664 61.3147 60.266 61.2504 60.5764 61.5047C61.6645 62.3907 63.4398 63.8102 65.5174 63.9021L65.9993 63.9061C67.8558 63.8477 68.9789 62.9266 68.9549 61.3714C68.9344 60.0017 67.4629 59.2031 65.137 58.6237C61.3988 57.7004 58.3923 56.0871 58.3923 51.1612M92.3457 57.9212C89.7098 57.9671 87.2934 58.9112 87.2234 61.6109C87.2234 63.7516 88.5484 64.8042 90.4109 64.6667C92.1957 64.4417 93.5574 63.4267 94.1572 62.0817C94.3799 61.5814 94.4118 59.7159 94.3989 58.9176C94.3958 58.7506 94.1398 58.4259 94.0268 58.3651C93.4668 58.0567 93.0515 57.9607 92.3453 57.9234M83.5753 47.0484C84.8082 45.6037 87.234 43.3546 91.1475 43.4734C96.2857 43.6131 99.001 46.7712 99.2538 54.3067C99.3572 57.4212 99.1855 66.1092 99.1413 68.2731C99.1618 68.4209 99.1258 68.5726 99.045 68.6789C99.0048 68.7315 98.9558 68.7705 98.902 68.7927C98.8482 68.815 98.7912 68.8198 98.7358 68.8067L95.0355 68.8172C94.5823 68.7881 94.5297 68.4942 94.5233 68.1839L94.4963 66.8956C94.4915 66.6372 94.3055 66.6456 94.2575 66.6872C93.0518 68.3551 91.0763 69.1889 88.9763 69.1889C85.785 69.1889 82.6038 66.7292 82.6132 61.8576C82.6228 56.8692 85.3222 54.4076 88.2874 53.8279C90.1869 53.4569 92.3279 53.7862 93.9474 54.6306C94.0508 54.6846 94.2624 54.6056 94.2655 54.4136C94.2718 53.7781 94.2495 52.5669 94.1543 51.9914C93.9155 50.5281 92.985 49.3502 91.0284 49.0314C90.6259 48.9656 90.2194 48.9514 89.8147 48.9897C88.2588 49.1501 86.388 50.7406 85.6118 51.3347C85.4288 51.4742 85.1443 51.3722 85.0518 51.2159C84.6 50.4492 83.4612 48.2097 83.3735 47.8514C83.2859 47.4931 83.4102 47.1947 83.5693 47.0071L83.5753 47.0484ZM100.918 56.3117C100.886 49.3534 104.586 43.4834 110.594 43.4292C114.342 43.3982 117.066 45.6242 117.546 46.6749C117.642 46.9209 117.594 47.1272 117.525 47.3754C117.04 48.6165 116.474 49.7994 115.836 50.9109C115.593 51.3192 115.327 50.9692 115.022 50.7022C114.17 49.9581 112.551 49.0489 110.959 49.0489C108.07 49.0489 105.916 51.6462 105.942 56.4222C105.964 61.0082 108.01 63.5242 110.968 63.6139C112.507 63.6639 113.999 62.5051 114.786 61.5566C115.037 61.2691 115.298 61.4106 115.586 61.7066C116.151 62.4632 116.961 63.6307 117.411 64.4162C117.705 64.8626 117.486 65.3004 117.379 65.4756C116.16 67.4972 113.806 69.1962 110.691 69.2192C104.169 69.2816 100.934 63.2699 100.904 56.2867M132.035 68.9109C132.34 68.8816 135.608 68.2892 136.611 67.9892C136.86 67.9142 136.949 67.6412 136.811 67.3682L133.237 60.3432L129.841 54.6379C129.723 54.4292 129.729 54.2209 129.857 54.0542L136.07 45.8909C136.63 45.0987 136.293 44.7551 135.819 44.5692C134.899 44.2109 133.414 43.7626 132.569 43.5269C132.213 43.4289 131.783 43.4644 131.455 43.8812L124.281 53.2099C124.042 53.5224 123.905 53.4532 123.904 53.0054L123.75 32.9834C123.744 32.6706 123.457 32.4351 123.296 32.4251L119.55 32.4146C119.313 32.4704 119.126 32.7096 119.078 33.0191C118.887 36.7857 119.157 64.4371 119.272 68.3062C119.275 68.5767 119.435 68.7996 119.641 68.8191C120.463 68.8814 122.498 68.8774 123.449 68.8544C123.917 68.8544 123.974 68.4231 123.974 68.4231L124.044 61.0017C124.044 61.0017 124.092 60.6726 124.172 60.5851L125.829 58.3084C125.925 58.1876 126.074 58.1961 126.17 58.3667C126.639 59.1964 127.978 61.8939 129.219 64.3034L131.499 68.6201C131.67 68.9411 131.871 68.9537 132.024 68.9474L132.035 68.9109Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M76.4882 68.9088L79.9211 68.9171C80.0486 68.9275 80.174 68.87 80.2698 68.7573C80.3168 68.702 80.3549 68.6347 80.3819 68.5594C80.4088 68.484 80.4242 68.4022 80.4269 68.3188C80.6337 62.895 80.5444 37.0718 80.4141 32.9965C80.4031 32.642 80.2869 32.5106 80.1041 32.4795C79.2768 32.3335 76.9193 32.369 76.1637 32.6255C76.0243 32.6638 75.9243 32.8245 75.9237 33.011C75.7391 43.521 75.8632 67.752 75.9031 68.2106C75.9429 68.6693 76.1256 68.8923 76.4868 68.909L76.4882 68.9088Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.625 61.125C20.625 58.2275 22.2975 55.895 24.375 55.895C26.4525 55.895 28.125 58.2275 28.125 61.125V73.9984C28.125 76.8957 26.4525 79.2284 24.375 79.2284C22.2975 79.2284 20.625 76.8957 20.625 73.9984V61.125Z" fill="#E01E5A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.5475 65.895C32.3745 65.895 30.625 63.665 30.625 60.895C30.625 58.125 32.3744 55.895 34.5475 55.895H44.2028C46.3758 55.895 48.1252 58.125 48.1252 60.895C48.1252 63.665 46.3759 65.895 44.2028 65.895H34.5475Z" fill="#ECB22D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.625 34.4585C30.625 31.561 32.2975 29.2285 34.375 29.2285C36.4525 29.2285 38.125 31.561 38.125 34.4585V47.3318C38.125 50.2293 36.4525 52.5618 34.375 52.5618C32.2975 52.5618 30.625 50.2293 30.625 47.3318V34.4585Z" fill="#2FB67C" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5475 52.5618C12.3744 52.5618 10.625 50.3318 10.625 47.5618C10.625 44.7918 12.3744 42.5618 14.5475 42.5618H24.2025C26.3756 42.5618 28.125 44.7918 28.125 47.5618C28.125 50.3318 26.3756 52.5618 24.2025 52.5618H14.5475Z" fill="#36C5F1" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.625 74.2283C30.625 76.9983 32.2975 79.2283 34.375 79.2283C36.4525 79.2283 38.125 76.9983 38.125 74.2283C38.125 71.4583 36.4525 69.2283 34.375 69.2283H30.625V74.2283Z" fill="#ECB22D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M44.375 52.5618H40.625V47.5618C40.625 44.7918 42.2975 42.5618 44.375 42.5618C46.4525 42.5618 48.125 44.7918 48.125 47.5618C48.125 50.3318 46.4525 52.5618 44.375 52.5618Z" fill="#2FB67C" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.375 55.895H18.125V60.895C18.125 63.665 16.4525 65.895 14.375 65.895C12.2975 65.895 10.625 63.665 10.625 60.895C10.625 58.125 12.2975 55.895 14.375 55.895Z" fill="#E01E5A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M28.125 34.2285V39.2285H24.375C22.2975 39.2285 20.625 36.9985 20.625 34.2285C20.625 31.4585 22.2975 29.2285 24.375 29.2285C26.4525 29.2285 28.125 31.4585 28.125 34.2285Z" fill="#36C5F1" />
                        </svg>
                    </div>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_409)">
                                <path d="M44.2047 0H35.3292L43.2083 12.2203L26.5452 0H17.662L25.5463 16.0125L8.88058 0H0L7.75208 20.6663L0 61H8.88058L25.5438 17.7535L17.662 61H26.5426L43.2083 13.9639L35.3266 61H44.2047L61 9.333L44.2047 0Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_409">
                                    <rect width="61" height="61" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_391)">
                                <path d="M0 40C0 17.9087 17.9087 0 40 0C62.0913 0 80 17.9087 80 40C80 62.0913 62.0913 80 40 80C17.9087 80 0 62.0913 0 40Z" fill="white" />
                                <path d="M58.2278 20H39.0166C39.0166 22.3 39.9303 24.5058 41.5566 26.1322C43.1829 27.7585 45.3888 28.6722 47.6888 28.6722H51.2278V32.0888C51.2308 36.8742 55.1093 40.7525 59.8944 40.7555V21.6667C59.8944 20.7462 59.1483 20 58.2278 20Z" fill="#2684FF" />
                                <path d="M48.7222 29.5723H29.5112C29.5142 34.3574 33.3926 38.2358 38.1779 38.2389H41.7167V41.6668C41.7229 46.4519 45.6037 50.3278 50.3889 50.3278V31.2389C50.3889 30.3184 49.6427 29.5723 48.7222 29.5723Z" fill="url(#paint0_linear_1_391)" />
                                <path d="M39.2112 39.1389H20C20 43.9284 23.8827 47.8111 28.6722 47.8111H32.2222V51.2278C32.2253 56.0086 36.097 59.8853 40.8778 59.8944V40.8056C40.8778 39.8851 40.1317 39.1389 39.2112 39.1389Z" fill="url(#paint1_linear_1_391)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_391" x1="45.7391" y1="25.5434" x2="37.6166" y2="34.0188" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.18" stopColor="#0052CC" />
                                    <stop offset="1" stopColor="#2684FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_391" x1="628.048" y1="583.232" x2="279.092" y2="928.577" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.18" stopColor="#0052CC" />
                                    <stop offset="1" stopColor="#2684FF" />
                                </linearGradient>
                                <clipPath id="clip0_1_391">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M50.1895 21.4968V23.8744H45.1852V39.6556H43.1121V23.8727H38.8613V21.4985L50.1895 21.4968ZM51.2006 25.8348H53.1354V28.2657C53.8031 26.6352 54.9684 25.4726 57.2138 25.6384V27.9602C54.6796 27.646 53.1354 28.5695 53.1354 31.497V39.6643H51.2079L51.2006 25.8348ZM64.201 39.9332C59.892 39.9332 58.0052 36.948 58.0052 32.7086C58.0052 28.5337 59.94 25.5494 63.4424 25.5494C66.9891 25.5494 68.4162 28.5171 68.4162 32.7086V33.7857H60.0106C60.287 36.1354 61.5548 37.6559 64.273 37.6559C65.4681 37.655 66.6537 37.4028 67.7754 36.9079V39.1075C66.8298 39.7141 65.3772 39.9332 64.2025 39.9332H64.201ZM59.9866 31.7659H66.413C66.298 29.1962 65.3219 27.7298 63.3507 27.7298C61.2537 27.7176 60.1939 29.3472 59.9873 31.7502L59.9866 31.7659ZM73.8555 39.7385C71.9658 39.7385 70.7692 38.6614 70.7692 36.1162V20.0496H72.7506V35.8343C72.7506 37.0912 73.4416 37.5215 74.2948 37.5215C74.4872 37.5254 74.6795 37.5161 74.8709 37.4936V39.6198C74.5374 39.7056 74.1964 39.7425 73.8555 39.7298V39.7385ZM79.8658 39.7385C77.9761 39.7385 76.7796 38.6614 76.7796 36.1162V20.0496H78.761V35.8343C78.761 37.0912 79.452 37.5215 80.3052 37.5215C80.4975 37.5254 80.6898 37.5161 80.8813 37.4936V39.6198C80.5477 39.7056 80.2068 39.7425 79.8658 39.7298V39.7385ZM81.9861 32.7182C81.9861 28.5721 84.0119 25.559 87.4677 25.559C90.9235 25.559 92.9048 28.5704 92.9048 32.7182C92.9048 36.866 90.8994 39.9428 87.4677 39.9428C84.0359 39.9428 81.9861 36.8642 81.9861 32.7182ZM83.921 32.7182C83.921 35.3455 85.012 37.7222 87.4677 37.7222C89.9233 37.7222 90.97 35.3446 90.97 32.7182C90.97 30.0917 89.9226 27.7708 87.4699 27.7708C85.0171 27.7708 83.9275 30.0926 83.9275 32.7182H83.921Z" fill="#253858" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M31.4469 13.2971H10.5749C9.65227 13.2971 8.76745 13.7369 8.11508 14.5198C7.79152 14.908 7.53498 15.3691 7.36015 15.8765C7.18531 16.3839 7.09561 16.9277 7.09619 17.4768V42.5233C7.09619 43.6304 7.4627 44.6922 8.11507 45.475C8.76745 46.2579 9.65227 46.6977 10.5749 46.6977H31.4469C32.3665 46.6921 33.2467 46.2498 33.8953 45.4676C34.5439 44.6853 34.9079 43.6267 34.9079 42.5233V17.4821C34.9079 16.3787 34.5439 15.3201 33.8953 14.5378C33.2467 13.7556 32.3665 13.3133 31.4469 13.3077V13.2971ZM19.2009 38.5979C19.1963 39.1253 19.0184 39.6292 18.706 40.0001C18.3935 40.3711 17.9717 40.5791 17.5322 40.5791H12.3937C11.9526 40.5819 11.5286 40.3751 11.2142 40.0039C10.8999 39.6326 10.7208 39.1271 10.7161 38.5979V19.6541C10.7155 19.3898 10.7586 19.128 10.8427 18.8837C10.9269 18.6394 11.0505 18.4176 11.2064 18.231C11.3624 18.0443 11.5476 17.8966 11.7513 17.7962C11.9551 17.6959 12.1734 17.6449 12.3937 17.6463H17.5322C17.9748 17.6463 18.3992 17.8573 18.7122 18.2328C19.0251 18.6084 19.2009 19.1177 19.2009 19.6488V38.5979ZM31.3101 30.249C31.3101 30.7801 31.1343 31.2894 30.8213 31.665C30.5084 32.0405 30.0839 32.2515 29.6414 32.2515H24.4896C24.047 32.2515 23.6226 32.0405 23.3096 31.665C22.9967 31.2894 22.8209 30.7801 22.8209 30.249V19.6541C22.8203 19.3907 22.863 19.1297 22.9466 18.8862C23.0302 18.6426 23.153 18.4212 23.3081 18.2347C23.4631 18.0482 23.6472 17.9002 23.85 17.7993C24.0527 17.6983 24.2701 17.6463 24.4896 17.6463H29.6414C30.0839 17.6463 30.5084 17.8573 30.8213 18.2328C31.1343 18.6084 31.3101 19.1177 31.3101 19.6488V30.249Z" fill="url(#paint0_linear_1_405)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_405" x1="21.0109" y1="46.703" x2="21.0109" y2="13.3024" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.18" stopColor="#0052CC" />
                                    <stop offset="1" stopColor="#2684FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="58" height="58" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51 45.5813V53.125C50.9967 54.2512 50.5479 55.3302 49.7516 56.1266C48.9552 56.9229 47.8762 57.3717 46.75 57.375H19.125V44.625H38.25V34L51 45.5813Z" fill="#00AC47" />
                            <path d="M51 23.375V45.5813L38.25 34V23.375H51Z" fill="#31A950" />
                            <path d="M19.125 10.625V23.375H6.375L19.125 10.625Z" fill="#EA4435" />
                            <path d="M19.125 23.375H6.375V46.75H19.125V23.375Z" fill="#4285F4" />
                            <path d="M51 14.875V23.375H49.9375L38.25 34V23.375H19.125V10.625H46.75C47.8762 10.6283 48.9552 11.0771 49.7516 11.8734C50.5479 12.6698 50.9967 13.7488 51 14.875Z" fill="#FFBA00" />
                            <path d="M19.125 44.625V57.375H10.625C9.49885 57.3717 8.41976 56.9229 7.62345 56.1266C6.82714 55.3302 6.37831 54.2512 6.375 53.125V44.625H19.125Z" fill="#0066DA" />
                            <path d="M61.625 17.5526V50.4476C61.625 50.8586 61.5058 51.2609 61.2816 51.6054C61.0574 51.9499 60.7381 52.222 60.3623 52.3885C59.9865 52.555 59.5704 52.6089 59.1646 52.5435C58.7588 52.4781 58.3807 52.2963 58.0763 52.0201L51 45.5814L38.25 34.0001L49.9375 23.3751L51 22.4189L58.0763 15.9801C58.3807 15.7039 58.7588 15.5221 59.1646 15.4567C59.5704 15.3913 59.9865 15.4452 60.3623 15.6117C60.7381 15.7782 61.0574 16.0503 61.2816 16.3948C61.5058 16.7393 61.625 17.1416 61.625 17.5526Z" fill="#00AC47" />
                            <path d="M51 22.4187V45.5812L38.25 34L49.9375 23.375L51 22.4187Z" fill="#188038" />
                        </svg>
                    </div>
                    <div className='md:mr-0 w-full h-20 flex items-center justify-center'>
                        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.3771 26.446H19.8571V30.161H28.7371C28.2971 35.361 23.9641 37.593 19.8721 37.593C18.5758 37.5987 17.2913 37.3461 16.0937 36.8499C14.8961 36.3537 13.8093 35.624 12.8968 34.7032C11.9843 33.7824 11.2644 32.689 10.779 31.487C10.2937 30.2849 10.0527 28.9982 10.0701 27.702C10.0701 22.078 14.4241 17.748 19.8841 17.748C24.0961 17.748 26.5781 20.433 26.5781 20.433L29.1781 17.739C29.1781 17.739 25.8381 14.022 19.7481 14.022C11.9931 14.022 5.99414 20.567 5.99414 27.636C5.99414 34.563 11.6371 41.318 19.9441 41.318C27.2511 41.318 32.6001 36.312 32.6001 28.91C32.6001 27.348 32.3731 26.446 32.3731 26.446H32.3771Z" fill="#4885ED" />
                            <path d="M42.634 23.7549C37.496 23.7549 33.814 27.7719 33.814 32.4549C33.814 37.2089 37.384 41.2999 42.694 41.2999C47.5 41.2999 51.437 37.6269 51.437 32.5569C51.437 26.7569 46.857 23.7539 42.634 23.7539V23.7549ZM42.684 27.2009C45.21 27.2009 47.604 29.2439 47.604 32.5349C47.604 35.7549 45.22 37.8569 42.672 37.8569C39.872 37.8569 37.672 35.6149 37.672 32.5089C37.672 29.4689 39.852 27.2009 42.692 27.2009H42.684Z" fill="#DB3236" />
                            <path d="M61.8151 23.7549C56.6771 23.7549 52.9951 27.7719 52.9951 32.4549C52.9951 37.2089 56.5651 41.2999 61.8751 41.2999C66.6811 41.2999 70.6181 37.6269 70.6181 32.5569C70.6181 26.7569 66.0381 23.7539 61.8151 23.7539V23.7549ZM61.8651 27.2009C64.3911 27.2009 66.7851 29.2439 66.7851 32.5349C66.7851 35.7549 64.4011 37.8569 61.8531 37.8569C59.0531 37.8569 56.8531 35.6149 56.8531 32.5089C56.8531 29.4689 59.0331 27.2009 61.8731 27.2009H61.8651Z" fill="#F4C20D" />
                            <path d="M80.6281 23.7649C75.9121 23.7649 72.2061 27.8949 72.2061 32.5309C72.2061 37.8109 76.5031 41.3129 80.5461 41.3129C83.0461 41.3129 84.3761 40.3199 85.3461 39.1809V40.9109C85.3461 43.9379 83.5081 45.7509 80.7341 45.7509C78.0541 45.7509 76.7101 43.7579 76.2341 42.6279L72.8621 44.0279C74.0581 46.5579 76.4661 49.1949 80.7621 49.1949C85.4621 49.1949 89.0241 46.2419 89.0241 40.0479V24.2919H85.3601V25.7779C84.2301 24.5579 82.6821 23.7649 80.6301 23.7649H80.6281ZM80.9681 27.2049C83.2801 27.2049 85.6541 29.1789 85.6541 32.5499C85.6541 35.9769 83.2841 37.8649 80.9171 37.8649C78.4031 37.8649 76.0641 35.8249 76.0641 32.5819C76.0641 29.2139 78.4941 27.2049 80.9681 27.2049Z" fill="#4885ED" />
                            <path d="M105.4 23.7439C100.952 23.7439 97.2168 27.2839 97.2168 32.5039C97.2168 38.0299 101.38 41.3069 105.817 41.3069C109.529 41.3069 111.817 39.2769 113.167 37.4569L110.134 35.4389C109.347 36.6589 108.031 37.8539 105.836 37.8539C103.37 37.8539 102.236 36.5039 101.533 35.1939L113.296 30.3139L112.696 28.8839C111.56 26.0839 108.908 23.7439 105.4 23.7439ZM105.553 27.1179C107.156 27.1179 108.309 27.9699 108.799 28.9919L100.943 32.2749C100.603 29.7329 103.013 27.1179 105.543 27.1179H105.553Z" fill="#DB3236" />
                            <path d="M91.6001 40.7869H95.4641V14.9299H91.6001V40.7869Z" fill="#3CBA54" />
                        </svg>
                    </div>
                </div>


                <div className='text-left bg-[#f5f5f5] w-full pl-10'>
                    <h3 className='text-[#212832] pl-0 md:pl-[52px] text-[30px] bg-[#f5f5f5] w-[123px] h-[38px] mt-0 mb-[12px] sm:mb-[15px] font-arial font-bold '>Reviews</h3>
                    <h6 className='text-[15px] w-45 sm:w-65 text-[#183F63] pl-0 md:pl-[52px] font-bold'>What our customers are saying</h6>
                    {/* Array.from({ length: 5 }) */}
                    <Carousel className="w-auto mt-8 pl-0 md:pl-10">
                        <CarouselContent className='w-auto ml-0 space-x-6'>
                            {inks.map((item, index) => (
                                <CarouselItem key={index} className="overflow-hidden basis-[17rem] sm:basis-1/3 md:basis-[53%] lg:basis-[40%] xl:basis-[30%] pl-0 mr-0 sm:mr-0">
                                    {/* <div className="absolute overflow-hidden inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-slow"></div> */}
                                    <Card className="overflow-hidden flex justify-between p-6 items-center rounded-[15px] w-60 md:w-10/11 lg:max-w-10/12 h-70 sm:h-85 bg-[#11375C] cursor-pointer">
                                        <CardContent className='overflow-hidden h-auto font-sans font-normal text-[15px] text-white mb-0 pt-0 sm:pt-5 px-0 sm:px-3'>
                                            {item.name}
                                        </CardContent>
                                        <div key={index} className={item.bg}>
                                            <Image
                                                src={item.user_image_source}
                                                width={100}
                                                height={100}
                                                alt="Picture of the author"
                                                className='w-10 sm:w-13 h-10 sm:h-13 flex self-end rounded-4xl'
                                            />
                                            <div className={item.text_style}>
                                                <h3 className='text-[13px] sm:text-[15px] font-bold'>{item.user_name}</h3>
                                                <h4 className='text-[13px] sm:text-[15px] font-normal'>{item.user_role}</h4>
                                            </div>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>


                <div className='h-auto p-0 gap-x-[90px] rounded-0 border-0 bg-[#f5f5f5] sm:mt-[150px] mt-[100px]'>
                    <div className='w-auto h-100 bg-[#11375c] text-left flex items-center justify-center sm:justify-between flex-row pl-10 pr-4 lg:pr-20'>
                        <div className='w-full md:w-80 h-full pb-4 sm:pb-10 pt-4 sm:pt-10 flex flex-col items-start justify-center'>
                            <div className='flex items-center flex-row justify-between w-60 sm:w-65 mb-5'>
                                <h3 className='w-full flex self-end font-sans font-semibold text-[16px] text-white'>Become a member</h3>
                                <div className='border-2 border-white w-33 h-1 flex self-center mt-2'></div>
                            </div>
                            <h3 className='w-full sm:w-full font-sans font-bold text-[25px] sm:text-[30px] text-white'>Ready to try different work experience now?</h3>
                            <h5 className='font-sans font-semibold text-[14px] pt-8 pb-8 text-white'>Get the best working experience that you never feel before</h5>
                            <Link href="/onBoardingScreens" className='w-60 sm:w-73'>
                                <Button type='button' className='w-full h-[50px] rounded-[13px] p-[10px] gap-[10px] bg-[#FE5722] border-0'>
                                    <h3 className='font-sans font-bold text-lg text-white'>Get Started</h3>
                                </Button>
                            </Link>
                        </div>
                        <Image
                            src="/Rectangle 46.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className='w-80 md:w-fit h-80 md:h-90 hidden md:flex self-end rounded-4xl '
                        />
                    </div>
                    <div className='mt-[188px] w-auto h-auto bg-[#11375C] flex flex-col lg:flex-row justify-between pt-[76px] pb-[60px] pl-3 md:pl-20 lg:pl-25 xl:pl-30 pr-3 md:pr-7 xl:pr-20'>
                        {/* company info */}
                        <div className='flex flex-col text-center md:text-left'>
                            <h3 className='w-full md:w-[162px] font-sans font-bold text-[35px] text-white m-0 pb-[39px]'>Tasksync</h3>
                            <h5 className='w-full md:w-[370px] font-sans font-normal text-[17px] text-white m-0'>We offer comfortable spaces, and well tailored
                                task management and analytics tools aimed at
                                ensuring efficiency and ease and many more for
                                your best work space and meetings</h5>
                            {/* socials */}
                            <div className='flex items-center justify-evenly flex-row gap-[30px] w-full md:justify-start text-white mt-[27.29px] mb-10 '>
                                <Instagram />
                                <YouTube />
                                <Facebook />
                            </div>
                        </div>

                        {/* company action area gap-[8px] md:gap-[30px]*/}
                        <div className='flex flex-row w-full lg:w-110 lg:gap-x-10 xl:gap-x-30 justify-between lg:justify-center text-left mt-10 lg:mt-0'>
                            <div className='flex flex-col gap-[10px] pr-3'>
                                <h3 className='text-white'>Company</h3>
                                <Link href="/login" className='w-5 sm:w-20 list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>About Us</Link>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>Pricing</Link>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>Careers</Link>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>Press</Link>
                            </div>
                            {/* support */}
                            <div className='flex flex-col gap-[10px]'>
                                <h3 className='text-white'>Support</h3>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>FAQs</Link>
                                <Link href="/login" className='w-5 sm:w-auto list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>Privacy Policy</Link>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>Help</Link>
                            </div>
                            {/* contact us */}
                            <div className='flex flex-col gap-[10px]'>
                                <h3 className='text-white'>Contact Us</h3>
                                <Link href="/login" className='w-5 sm:w-auto list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>E. info@tasksync.com</Link>
                                <Link href="/login" className='w-30 sm:w-50 list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300 text-wrap '>A.  No. 201 V.I Court Ikeja Lagos, Nigeria,</Link>
                                <Link href="/login" className='list-none text-sm sm:text-md md:text-lg text-extrabold text-zinc-300'>P.   (+234) 678907789</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}
