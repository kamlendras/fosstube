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
      
       <h2>💡 Learning</h2>

    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.</p>
      <p>The ability to learn is possessed by humans, animals, and some machines; there is also evidence for some kind of learning in certain plants. Some learning is immediate, induced by a single event (e.g. being burned by a hot stove), but much skill and knowledge accumulate from repeated experiences.</p>
      <p>The changes induced by learning often last a lifetime, and it is hard to distinguish learned material that seems to be "lost" from that which cannot be retrieved.</p>
      <blockquote>
        <p>“Learning never exhausts the mind.</p>
      </blockquote>
      <p>Human learning starts at birth (it might even start before in terms of an embryo's need for both interaction with, and freedom within its environment within the womb.) and continues until death as a consequence of ongoing interactions between people and their environment. The nature and processes involved in learning are studied in many established fields (including educational psychology, neuropsychology, experimental psychology, cognitive sciences, and pedagogy), as well as emerging fields of knowledge (e.g. with a shared interest in the topic of learning from safety events such as incidents/accidents, or in collaborative learning health systems). Research in such fields has led to the identification of various sorts of learning. For example, learning may occur as a result of habituation, or classical conditioning, operant conditioning or as a result of more complex activities such as play, seen only in relatively intelligent animals. Learning may occur consciously or without conscious awareness. Learning that an aversive event can't be avoided or escaped may result in a condition called learned helplessness. There is evidence for human behavioral learning prenatally, in which habituation has been observed as early as 32 weeks into gestation, indicating that the central nervous system is sufficiently developed and primed for learning and memory to occur very early on in development.</p>
      {/* <h2>What to expect from here on out</h2> */}
      <p>Play has been approached by several theorists as a form of learning. Children experiment with the world, learn the rules, and learn to interact through play. Lev Vygotsky agrees that play is pivotal for children's development, since they make meaning of their environment through playing educational games. For Vygotsky, however, play is the first form of learning language and communication, and the stage where a child begins to understand rules and symbols. This has led to a view that learning in organisms is always related to semiosis, and often associated with representational systems/activity.



</p>
      
      
    </div>
  </div>
</div>

      
  
      <QA />
      <Footer />
    </>
  );
}