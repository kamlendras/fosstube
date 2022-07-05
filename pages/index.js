import Plus from "../components/Plus";
import Head from "next/head";
import Short from "../components/Short";
import Main from "../components/Main";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Link from 'next/link'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { SpaceBarTwoTone } from "@material-ui/icons";
export default function Home() {
  return (
    <>
      <Head>
        <title>Arrow Nap</title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Plus />
      <Main />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What Can You Do ?</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The knowledge-sharing community Of Developers.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Learning</h2>
                <p className="leading-relaxed text-base">Enrole to courses and enjoy weekly quiz.</p>
                <Link href="/news/learning">
                  <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Answer</h2>
                <p className="leading-relaxed text-base">Solving the problems helps you to learn better.</p>
                <Link href="/Ask">
                  <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-red-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  {/* <circle cx="12" cy="7" r="4"></circle> */}
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Ask</h2>
                <p class="leading-relaxed text-base">Solve your code query anytime in less than one minute.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

            </div>


          </div>


          <Link passHref href="/community">
            <button className="flex mx-auto mt-16 text-white bg-m border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Join</button>
          </Link>
        </div>
      </section>
      <Short />
      {/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"></h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Learn courses</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Ask Doubt</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Solve Problems </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Post Blog</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Enrole to quizes</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium">Get certificate</span>
        </div>
      </div>
    </div>

  </div>
</section> */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Features.</h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">For Developers. By Developers. To Developers.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-yellow-400 shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-yellow-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2
          ">Enrole Courses</h2>
                <p class="text-white leading-relaxed text-base">More than 100+ courses is being avaiable.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-red-600 shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    {/* <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle> */}
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ask</h2>
                <p class="text-white leading-relaxed text-base">Solve your query in seconds.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-s shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-green-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    {/* <circle cx="12" cy="7" r="4"></circle> */}
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Post Blog</h2>
                <p class="text-white leading-relaxed text-base">Share your coding skill to the world.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-orange-600 shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-orange-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Solve Problems</h2>
                <p class="text-white leading-relaxed text-base">Solving the problems help's you to learn better.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-blue-500 shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 class=" text-lg text-gray-900 font-medium title-font mb-2">Enrole to quizes</h2>
                <p class="text-white leading-relaxed text-base">Exercise your creativity.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-indigo-500 shadow-xl border border-gray-200 p-6 rounded-lg transition delay-500  hover:-translate-y-6   hover: duration-400 ...
        hover:shadow-2xl  ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100
                 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Get Certificate</h2>
                <p class="text-white leading-relaxed text-base">Getting a certificate proves your commitment to upgrade your skills, gives you the credibility needed for more responsibilities, larger projects, and a higher salary.</p>
              </div>
            </div>
          </div>
          <button
            class="flex mx-auto mt-16 text-white 
    bg-m border-0 py-2 px-8 focus:outline-none shadow-xl
     hover:bg-blue-600 rounded text-lg hover:shadow-2xl"><ArrowCircleRightRoundedIcon/>        Get Started</button>
        </div>
      </section>

  
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-0 mx-auto">
      {/* <div> */}
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6">
            
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Newsroom</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">See Latest Announcements ➡</p>
            </div>
          </div>
         
        </div>






        <div className=" container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className=" p-4 md:w-1/3">
              <div className="  shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://abnresource.com/wp-content/uploads/2021/05/We-are-carbon-positive-LinkedIn.png" alt="blog" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">We are carbon neutral</h1>
                  <p className="leading-relaxed mb-3">We are the worlds 1st e-company to achive the title of 100% carbon neutral.      </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/news/carbon-neutral">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/00.svg" alt="blog" />
                <div className="p-6">

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Right to Code</h1>
                  <p className="leading-relaxed mb-3">Through our Nap Learning program we are helping millions to Learn to code.</p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/news/Right-to-Code">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                    </span>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.istockphoto.com/photos/variety-of-raw-black-angus-prime-meat-steaks-picture-id923692030?k=20&m=923692030&s=612x612&w=0&h=k-b2wtmHwBbpmSM74dN0gZzRD9oEwBUYiXdlWYD6mHY=" alt="blog" />
                <div className="p-6">
                

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">No Meat</h1>
                  <p className="leading-relaxed mb-3">Since meat contribute in 15% in Global carbon footprint we are no longer providing meat to our employees.

                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/news/no-meat-policy">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className=" p-4 md:w-1/3">
              <div className=" shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://c1.wallpaperflare.com/preview/41/972/836/people-work-hands-business.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CAREERS</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">We hire without degree</h1>
                  <p className="leading-relaxed mb-3">We belive degree or any kind of certificate is not necessary to get a job.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/news/We-hire-without-degree">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://ocdn.eu/images/pulscms/YmI7MDA_/dae186791f35a41f702b11fe648b79b4.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SOCIAL</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Unemployment</h1>
                  <p className="leading-relaxed mb-3">Today a large quator of worlds population suffers from Unemployment and we are commeted to solve it.</p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/news/Unemployment">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

                    </span>

                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="shadow-xl hover:shadow-2xl transition delay-500  hover:-translate-y-6   hover: duration-400 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static-cse.canva.com/blob/558554/studyingtips1.4762374a.jpg" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EDUCATION</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Get scholarship (NSAT)</h1>
                  <p className="leading-relaxed mb-3">NSAT (NAP SCHOLARSHIP ADMISSION TEST)

                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/news/NSAT">
                      <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   <Link href="/news" >
<center>
        <button type="button" class="text-white bg-gradient-to-r 
        from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
        focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2"><ArrowCircleRightRoundedIcon/>  See More News</button>
     </center>
     </Link>
      <Accordion />
      <Footer />
    </>
  );
}
