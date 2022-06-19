import Head from "next/head";
import Accordion from "/components/Accordion";
import Footer from "/components/Footer";
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
      <div class="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
  <img src="/img/beams.jpg" alt="" class="fixed top-48 left-1/2 -translate-x-2/3 -translate-y-1/2 max-w-none" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="max-w-prose mx-auto lg:text-lg">
      
       <h2>⛄ Unemployment</h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">Today a large quator of worlds population suffers from Unemployment and we are commeted to solve it.</p>
      <p>Unemployment and the status of the economy can be influenced by a country through, for example, fiscal policy. Furthermore, the monetary authority of a country, such as the central bank, can influence the availability and cost for money through its monetary policy.</p>
      <p>In addition to theories of unemployment, a few categorisations of unemployment are used for more precisely modelling the effects of unemployment within the economic system. Some of the main types of unemployment include structural unemployment, frictional unemployment, cyclical unemployment, involuntary unemployment and classical unemployment. Structural unemployment focuses on foundational problems in the economy and inefficiencies inherent in labor markets, including a mismatch between the supply and demand of laborers with necessary skill sets. Structural arguments emphasize causes and solutions related to disruptive technologies and globalization. Discussions of frictional unemployment focus on voluntary decisions to work based on individuals' valuation of their own work and how that compares to current wage rates added to the time and effort required to find a job. Causes and solutions for frictional unemployment often address job entry threshold and wage rates..</p>
      <blockquote>
        <p>“We need to end Unemployment.</p>
      </blockquote>
   <p>According to the UN's International Labour Organization (ILO), there were 172 million people worldwide (or 5% of the reported global workforce) without work in 2018.

Because of the difficulty in measuring the unemployment rate by, for example, using surveys (as in the United States) or through registered unemployed citizens (as in some European countries), statistical figures such as the employment-to-population ratio might be more suitable for evaluating the status of the workforce and the economy if they were based on people who are registered, for example, as taxpayers.</p>
      
      
    </div>
  </div>
</div>

      
  
      <Accordion />
      <Footer />
    </>
  );
}