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
      
       <h2>🎓 Get Scholarship (NSAT)</h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">NSAT (NAP SCHOLARSHIP ADMISSION TEST)</p>
      <p>A scholarship is a form of financial aid awarded to students to further education. Scholarships are awarded based upon various criteria, such as academic merit, diversity and inclusion, athletic skill, and financial need. Scholarship criteria usually reflect the values and goals of the donor or founder of the award. While scholarship recipients are not required to repay scholarships.</p>
      <p>The awards may require that the recipient continue to meet certain requirements during their period of support, such maintaining a minimum grade point average or engaging in a certain activity (e.g., playing on a school sports team for athletic scholarship holders, or serving as a teaching assistant for some graduate scholarships). Scholarships may provide a monetary award, an in-kind award (e.g., waiving of tuition fees or fees for housing in a dormitory), or a combination.</p>
      <blockquote>
        <p>“The learner always begins by finding fault, but the scholar sees the positive merit in everything.</p>
      </blockquote>
    <p>Some prestigious, highly competitive scholarships are well-known even outside the academic community, such as Fulbright Scholarship and the Rhodes Scholarships at the graduate level, and the Robertson, Morehead-Cain and Jefferson Scholarships at the undergraduate level.</p>
      
      
    </div>
  </div>
</div>

      
  
      <Accordion />
      <Footer />
    </>
  );
}