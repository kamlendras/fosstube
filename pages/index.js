import Plus from "../components/Plus";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Short from "../components/Short";
import Login from "../components/Login";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import ReactTyped from "react-typed";
import Link from 'next/link'
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
      <Login />
    
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What Can You Do ?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The knowledge-sharing community Of Developers.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Learning</h2>
          <p className="leading-relaxed text-base">Enrole to courses and enjoy weekly quiz.</p>
          <Link href="/news/learning">
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx={6} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Answer</h2>
          <p className="leading-relaxed text-base">Solving the problems help you to learn better.</p>
          <Link href="/Ask">
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ask</h2>
          <p className="leading-relaxed text-base">Solve your code error anytime.</p>
          <Link href="/Ask">
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </div> 
    <Link passHref href="/community">
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join</button> 
    </Link>
  </div>
</section>
<Short />
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Our Features.</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">For Developers. By Developers. To Developers.</p>
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
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Newsroom</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">See Latest announcements.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://abnresource.com/wp-content/uploads/2021/05/We-are-carbon-positive-LinkedIn.png" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">We are carbon neutral</h2>
        <p className="text-base leading-relaxed mt-2">We are the worlds 1st e-company to achive the title of 100% carbon neutral.</p>
        <Link href="/news/carbon-neutral">
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/00.svg" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Right to Code</h2>
        <p className="text-base leading-relaxed mt-2">Through our Nap Learning program we are helping millions to Learn to code.</p>
        <Link href="/news/Right-to-Code">
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="data:image/jpeg;base64,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" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">No Meat</h2>
        <p className="text-base leading-relaxed mt-2">Since meat contribute in 15% in Global carbon footprint we are no longer providing meat to our employees.</p>
        <Link href="/news/no-meat-policy">
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://c1.wallpaperflare.com/preview/41/972/836/people-work-hands-business.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CAREERS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">We hire without degree</h1>
            <p className="leading-relaxed mb-3">We belive degree or any kind of certificate is not necessary to get a job.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href="/news/We-hire-without-degree">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://ocdn.eu/images/pulscms/YmI7MDA_/dae186791f35a41f702b11fe648b79b4.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SOCIAL</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Unemployment</h1>
            <p className="leading-relaxed mb-3">Today a large quator of worlds population suffers from Unemployment and we are commeted to solve it.</p>
            <div className="flex items-center flex-wrap">
              <Link href="/news/Unemployment">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
       
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static-cse.canva.com/blob/558554/studyingtips1.4762374a.jpg"  alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EDUCATION</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Get scholarship (NSAT)</h1>
            <p className="leading-relaxed mb-3">NSAT (NAP SCHOLARSHIP ADMISSION TEST)

            </p>
            <div className="flex items-center flex-wrap ">
              <Link href="/news/NSAT">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   <Link href="/news" passHref >
<center><a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer underline underline-offset-4 ">
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>See More News
              </a></center></Link>
      <Accordion />
      <Footer />
    </>
  );
}
