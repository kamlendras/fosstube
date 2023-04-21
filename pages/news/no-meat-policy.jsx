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
      
       <h2>🍖 No Meat Policy</h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">Since meat contribute in 15% in Global carbon footprint we are no longer providing meat to our employees.</p>
      <p>The environmental impact of meat production varies because of the wide variety of agricultural practices employed around the world. All agricultural practices have been found to have a variety of effects on the environment. Some of the environmental effects that have been associated with meat production are pollution, greenhouse gas emissions through fossil fuel usage, animal methane, effluent waste, and water and land consumption. Meat is obtained through a variety of methods, including organic farming, free range farming, intensive livestock production, subsistence agriculture, hunting, and fishing.</p>
      <p>Meat is considered one of the prime factors contributing to the current biodiversity loss crisis.</p>
      <blockquote>
        <p>“Eating meat isn't necessary for your health or survival.</p>
      </blockquote>
      <p>The 2019 IPBES assessment report found that industrial agriculture and overfishing are the primary drivers of the extinction, with the meat and dairy industries having a substantial impact. The 2006 report Livestock's Long Shadow, released by the Food and Agriculture Organization (FAO) of the United Nations, states that "the livestock sector is a major stressor on many ecosystems and on the planet as a whole. Globally it is one of the largest sources of greenhouse gases (GHG) and one of the leading causal factors in the loss of biodiversity, and in developed and emerging countries it is perhaps the leading source of water pollution."


Meat production is a main driver of tropical deforestation

Average greenhouse gas emissions by food product
Grazing occupies 26% of the earth's ice-free terrestrial surface, and feed crop production uses about one third of all arable land or about 75% of agriculturally used land. The global food system is responsible for one third of the global anthropogenic GHG emissions, of which meat accounts for nearly 60%.


Cereal-use statistic showing an estimated large fraction of crops used as fodder
There can be competition for resources, such as land, between growing crops for human consumption and growing crops for animals, where the "global land squeeze" also has impacts on food security. Meat production, especially beef production, is main driver of tropical deforestation, with around 80% of all converted land being used to rear cattle and 91% of Amazon land deforested since 1970 converted to cattle ranching.

Others concerns about meat production include concerns about health impacts which are often linked to the environmental impacts</p>
      <p>Some fraction of these effects is assignable to non-meat components of the livestock sector such as the wool, and egg and dairy production, and to the livestock used for tillage. Livestock have been estimated to provide power for tillage of as much as half of the world's cropland.</p>
      {/* <h2>What to expect from here on out</h2> */}
      <p>
      Multiple studies have found that increases in meat consumption are currently associated with human population growth and rising individual incomes or GDP. Without changes, these increases will increase carbon emissions and further biodiversity loss. The IPCC, in their 2019 special report summary, and others assert that a shift towards plant-based diets would be needed for the mitigation of and adaptation to climate change.


</p>
      
      
    </div>
  </div>
</div>

      
  
      <QA />
      <Footer />
    </>
  );
}