import { useState } from "react";
import { BorderBeam } from "../ui/border-beam"
import Peka from '@/assets/Peka Thumbnail.jpg';
import SJ from '@/assets/Seratan Jawa.png';
import TTiger from '@/assets/T-Traxtion.jpg';
import Widyanaya from '@/assets/Slide 16_9 - 1(1).jpg';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectDetail = [
    {
        image: Peka,
        title: 'PEKA - Peduli Kanker App',
        detail: 'PEKA, an acronym for "Peduli Kanker" (Care About Cancer), is a mobile application designed to help users reduce or prevent cancer risk by analyzing the ingredients and nutritional content of everyday foods. Leveraging an OCR (Optical Character Recognition) API integrated with a Python Flask API, the app scans food labels to detect ingredients and assesses their potential health impact. By providing users with insights into which ingredients may contribute to cancer risk, PEKA aims to promote healthier dietary choices and increase public awareness about cancer prevention. This project showcases advanced integration of machine learning and API development to deliver a practical health-oriented solution.'
    },
    {
      image: SJ, 
      title: 'Seratan Jawa',
      detail: `Seratan Jawa is a digital learning platform dedicated to preserving and promoting the Javanese script, known as Aksara Jawa. Developed as part of an educational research initiative, the platform introduces an engaging and innovative approach to learning Javanese letters. Drawing inspiration from Duolingo’s gamified learning method, Seratan Jawa offers interactive lessons aimed at fostering cultural preservation. Built using Flutter for cross-platform development and Firebase for backend support, the platform provides flexibility for future content expansion.
Building on the success of Seratan Jawa, its successor, Pandum, introduces a web-based version of the platform, eliminating the need for app downloads and making the learning experience more accessible. Both applications underwent usability testing with over 100 users. Our research on the development of Pandum was published in the Cakrawala Journal, highlighting the app’s effectiveness and its potential for broader implementation in Javanese cultural education.`
    },
    {
      image: TTiger,
      title: 'T-Traxtion | Tiger Tracking IoT device',
      detail: `T-Traxtion is an IoT-based tiger tracking device developed as part of the OPSI Research Program, led by two high school students. As the technical consultant for this project, I provided guidance on system architecture, hardware integration, and software development. My contributions included developing a monitoring system using Next.js and Firebase, as well as coding the Arduino-based tracking device. The project’s objective was to enable real-time tracking of tigers, supporting conservation efforts. The success of this initiative earned a Bronze Medal at the National Level Competition, demonstrating the project's innovation and potential for wildlife conservation.`
    }
    ,{
      image: Widyanaya,
      title: 'Widayana (Educational Platform for Scientific Writing)',
      detail: `Widayana is an educational web platform designed to raise awareness among young people about the importance of scientific writing. This project was developed as part of a web development competition aimed at addressing the knowledge gap in scientific writing skills among youth. The platform provides interactive resources and guidance to help users understand the principles and practices of effective scientific writing. By fostering better writing skills, Widayana aims to empower students and young researchers to contribute to academic and research communities. This project highlights my experience in web development, user experience design, and educational technology for social impact.`
    }
]

const ReadMoreText = ({ text, maxLength = 220 }: {text: string, maxLength: number}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const displayedText = isExpanded ? text : text.slice(0, maxLength) + '...';

  return (
    <div className="">
      <p className={`text-gray-700 text-justify relative text-left text-base transition-all `}>
        <span className={` block ${isExpanded ? 'max-h-full' : 'max-h-20 md:max-h-60 overflow-hidden'}`}>
            {displayedText} </span>
            {displayedText.length > maxLength && 
        <Button variant={isExpanded ? 'outline' : 'link'} className={cn(!isExpanded ? `bg-gradient-to-r from-transparent via-white to-white border-0 hover:border-0 absolute bottom-0 right-0 pl-32`: '')} onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
}
      </p>


    </div>
  );
};

const SingleProject = (props: (typeof ProjectDetail[0])) => {
    return <div>
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span>
                <img src={props.image} alt={props.title}  />
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <h3 className="text-2xl font-semibold text-left my-4">{props.title}</h3>
        <ReadMoreText text={props.detail} maxLength={210}/>
    </div>
}

const Projects = () => {
    return <div className="flex flex-col gap-4">{ProjectDetail.map(item => <SingleProject {...item} />)}</div>
}

export default Projects;