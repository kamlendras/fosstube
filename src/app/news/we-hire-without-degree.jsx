import Head from "next/head";
import QA from "/components/QA";
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
      
       <h2>💼 We hire without a collage degree </h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">We belive degree or any kind of certificate is not necessary to get a job.</p>
      <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, habits, and personal development. Education originated as transmission of cultural heritage from one generation to the next. Today, educational goals increasingly encompass new ideas such as liberation of learners, critical thinking about presented information, skills needed for the modern society, empathy and complex vocational skills.

UNESCO defines three main learning settings.</p>
      <p> Formal education takes place in education and training institutions, is usually structured by curricular aims and objectives, and learning is typically guided by a teacher. In most regions, formal education is compulsory up to a certain age and commonly divided into educational stages such as kindergarten, primary school and secondary school. Nonformal learning occurs as addition or alternative to formal education. It may be structured according to educational arrangements, but in a more flexible manner, and usually takes place in community-based, workplace-based or civil society-based settings. Lastly, informal settings occurs in daily life, in the family, any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational, whether unintentional or intentional. In practice there is a continuum from the highly formalized to the highly informalized, and informal learning can occur in all three settings. For instance, homeschooling can be classified as nonformal or informal, depending upon the structure.</p>
      <blockquote>
        <p>“An investment in knowledge pays the best interest.</p>
      </blockquote>
<p>Regardless of setting, educational methods include teaching, training, storytelling, discussion, and directed research. The methodology of teaching is called pedagogy. Education is supported by a variety of different philosophies, theories and empirical research agendas.

There are movements for education reforms, such as for improving quality and efficiency of education towards relevance in students' lives and efficient problem solving in modern or future society at large, or for evidence-based education methodologies. A right to education has been recognized by some governments and the United Nations. Global initiatives aim at achieving the Sustainable Development Goal 4, which promotes quality education for all.</p>
      
      
    </div>
  </div>
</div>

      
  
      <QA />
      <Footer />
    </>
  );
}