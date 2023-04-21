
import Head from "next/head";

import QA from "../components/QA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cod Nap</title>
        <meta
          name="description"
          content="Cod Nap| Cod Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapblack.png" />
      </Head>
     <div className="mt-6">
      <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Help</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The knowledge-sharing community Of Developers.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
      </div>
    </div>
    </div>
      
  
      <QA />
      <Footer />
    </>
  );
}
