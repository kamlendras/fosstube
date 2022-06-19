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
      
       <h2>🌎 Carbon Neutral</h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">We are the worlds 1st e-company to achive the title of 100% carbon neutral.</p>
      <p>Carbon neutrality is a state of net-zero carbon dioxide emissions. This can be achieved by balancing emissions of carbon dioxide with its removal (often through carbon offsetting) or by eliminating emissions from society (the transition to the "post-carbon economy")</p>
      <p>The term is used in the context of carbon dioxide-releasing processes associated with transportation, energy production, agriculture, and industry.</p>
      <blockquote>
        <p>“We can only preserve the planet for generations to come if companies and governments act together to build a clear path towards carbon neutrality.</p>
      </blockquote>
      <p>Reducing carbon emissions can be done by moving towards energy sources and industry processes that produce less greenhouse gases, thereby transitioning to a low-carbon economy. Shifting towards the use of renewable energy such as wind, geothermal, and solar power, as well as nuclear power reduces greenhouse gas emissions. Although both renewable and non-renewable energy production produce carbon emissions in some form, renewable sources produce negligible to almost zero carbon emissions. Transitioning to a low-carbon economy would also mean making changes to current industrial and agricultural processes to reduce carbon emissions, for example, diet changes to livestock such as cattle can potentially reduce methane production by 40%. Carbon projects and emissions trading are often used to reduce carbon emissions, and carbon dioxide can even sometimes be prevented from entering the atmosphere entirely (such as by carbon scrubbing).</p>
      <p>One way to implement carbon-neutral products is by making these products cheaper and more cost effective than carbon positive fuels. Various companies have pledged to become carbon neutral or negative by 2050, some of which include: Arrow Nap (Us) ,Microsoft, Delta Air Lines, BP, IKEA, and BlackRock. However, without cheaper carbon-neutral products, companies are less likely to switch over to renewable sources.</p>
      {/* <h2>What to expect from here on out</h2> */}
      <p>In the case of individuals, decision-making is likely to be straightforward, but for more complex institutions it usually requires political leadership and popular agreement that the effort is worth making.

Commitment from countries and the organizations within is critical to the forward movement of Carbon Neutrality. The Net Zero Challenge Report states that “commitments made by governments so far are far from sufficient.” One way to obtain more commitment would be to set carbon-neutral goals but allow flexibility for the organizations and governments to decide how to achieve these goals. Large well-known companies like Apple are laying out roadmaps to help these commitments become a reality. Then lesser well-known companies like Kinaxis, a supply chain management company, met their net-zero goal in 2020 by fully committing to their carbon emission objectives



</p>
      
      
    </div>
  </div>
</div>

      
  
      <Accordion />
      <Footer />
    </>
  );
}