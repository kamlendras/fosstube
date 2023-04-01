import Head from "next/head";
import Link from 'next/link'
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
function index() {
  return (
    <div>
      <Head>
        <title>Newsroom | Nap</title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <center><h1 class="mt-1 text-blue-500  text-2xl">Newsroom</h1></center>
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
                    <Link
                      href="/news/carbon-neutral"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

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
                    <Link
                      href="/news/Right-to-Code"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

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
                    <Link
                      href="/news/no-meat-policy"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

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
                    <Link
                      href="/news/We-hire-without-degree"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

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
                    <Link
                      href="/news/Unemployment"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

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
                    <Link
                      href="/news/NSAT"
                      className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>

                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
        <center><Link href="/community" legacyBehavior>
          <button type="button" class="text-white bg-gradient-to-r 
        from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
        focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2"><ExpandCircleDownRoundedIcon/>  See More</button>
        </Link>
        </center>
    </div>
  );
}

export default index;
