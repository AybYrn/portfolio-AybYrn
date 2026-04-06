import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const coursesRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleEducationScroll = () => {
    window.scrollTo({
      top: educationRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCoursesScroll = () => {
    window.scrollTo({
      top: coursesRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleSkillsScroll={handleSkillsScroll}
          handleEducationScroll={handleEducationScroll}
          handleCoursesScroll={handleCoursesScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="terminal-kicker text-base tablet:text-lg p-1 tablet:p-2 font-medium w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-4xl laptop:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tracking-[0.04em]"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="terminal-muted-strong text-2xl tablet:text-4xl laptop:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tracking-[0.04em]"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="terminal-accent-text text-xl tablet:text-3xl laptop:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tracking-[0.08em]"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            Work.
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 tablet:grid-cols-2 gap-6">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                logo={project.logoSrc}
                name={project.title}
                role={project.role}
                dates={project.dates}
                accomplishments={project.accomplishments}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            Services.
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={skillsRef}>
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            Skills.
          </h1>
          <p className="terminal-readable tablet:m-10 mt-2 text-base laptop:text-xl w-full laptop:w-3/5">
            {data.resume.description}
          </p>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-3 gap-6">
            <div className="terminal-panel terminal-section-card rounded-[28px] p-6">
              <p className="terminal-kicker pt-4 text-[11px]">focus-area</p>
              <h2 className="text-xl font-medium">Cloud & Infrastructure</h2>
              <ul className="terminal-readable mt-4 space-y-2 text-sm laptop:text-base">
                {data.resume.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="terminal-panel terminal-section-card rounded-[28px] p-6">
              <p className="terminal-kicker pt-4 text-[11px]">focus-area</p>
              <h2 className="text-xl font-medium">DevOps & Operations</h2>
              <ul className="terminal-readable mt-4 space-y-2 text-sm laptop:text-base">
                {data.resume.frameworks.map((framework, index) => (
                  <li key={index}>{framework}</li>
                ))}
              </ul>
            </div>
            <div className="terminal-panel terminal-section-card rounded-[28px] p-6">
              <p className="terminal-kicker pt-4 text-[11px]">focus-area</p>
              <h2 className="text-xl font-medium">Development & Tools</h2>
              <ul className="terminal-readable mt-4 space-y-2 text-sm laptop:text-base">
                {data.resume.others.map((other, index) => (
                  <li key={index}>{other}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={educationRef}>
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            Education.
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.resume.education.map((item, index) => (
              <div
                key={index}
                className="terminal-panel terminal-section-card rounded-[28px] p-6 laptop:p-8"
              >
                <p className="terminal-kicker pt-4 text-[11px]">education.entry</p>
                <h2 className="text-2xl font-medium">{item.school}</h2>
                <p className="terminal-muted-strong mt-2 text-lg tracking-[0.04em]">
                  {item.program}
                </p>
                <p className="terminal-readable mt-4 text-base laptop:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={coursesRef}>
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            Courses & Certifications.
          </h1>
          <div className="terminal-panel terminal-section-card mt-5 tablet:m-10 rounded-[28px] p-6 laptop:p-8">
            <p className="terminal-kicker pt-4 text-[11px]">
              certification.index
            </p>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-10 gap-y-4">
              {data.resume.coursesAndCertifications.map((item, index) => (
                <div key={index} className="flex gap-3 terminal-muted-strong">
                  <span className="terminal-inline-code mt-[0.35rem] flex-shrink-0">
                    &gt;
                  </span>
                  <span className="tracking-[0.04em] leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold tracking-[0.08em]">
            About.
          </h1>
          <p className="terminal-readable tablet:m-10 mt-2 text-base laptop:text-xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
