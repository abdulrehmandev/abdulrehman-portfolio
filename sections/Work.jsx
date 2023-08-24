import Container from "@/components/Container";
import SkillButton from "@/components/SkillButton";
import GithubProfile from "@/components/profiles/GithubProfile";
import LargeHeading from "@/components/ui/LargeHeading";
import PrimaryLink from "@/components/ui/PrimaryLink";
import SectionDescription from "@/components/ui/SectionDescription";
import { work } from "@/data/work";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const Work = () => {
  return (
    <div id="work" className="pt-20 pb-10 text-center">
      <Container>
        <LargeHeading text="My Work" />
        <SectionDescription text="Projects That Showcase My Skills" />
        <div className="md:columns-2 w-fit mx-auto gap-6 mt-14 sm:mt-20">
          {work.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {/* <PrimaryLink
          className="mx-auto mt-20"
          href="https://github.com/abdulrehmandev/"
        >
          <span>More Projects on Github</span> <FiExternalLink />
        </PrimaryLink> */}
        <div className="mx-auto mt-20 w-fit">
          <GithubProfile text="More Projects on Github" />
        </div>
      </Container>
    </div>
  );
};

const ProjectCard = ({ title, skills, image, github, preview }) => {
  return (
    <div className="text-left p-4 md:p-8 mx-auto max-w-lg md:max-w-lg w-full rounded-xl transition-all duration-300 bg-stone-200/50 dark:bg-stone-800/75 border dark:border-stone-800 border-stone-200 h-fit mb-6">
      <Image
        className="w-full aspect-[4/3] rounded-lg mb-4 object-cover"
        src={image}
        width={800}
        height={800}
        alt={title}
      />
      <h4 className="text-xl sm:text-2xl mt-6 tracking-tight font-semibold">
        {title}
      </h4>
      <div className="flex items-center flex-wrap gap-2 mt-5 mb-5">
        {skills.map((skill) => (
          <SkillButton text={skill} />
        ))}
      </div>
      {preview || github ? (
        <div className="flex w-fit gap-3 ml-auto justify-self-end">
          {preview && (
            <PrimaryLink href={preview}>
              <span>Preview</span> <FiExternalLink />
            </PrimaryLink>
          )}
          {github && (
            <PrimaryLink href={github}>
              <span>Github</span> <FiExternalLink />
            </PrimaryLink>
          )}
        </div>
      ) : (
        <p className="mx-auto w-fit mt-6 text-xs tracking-wide opacity-60">
          Client Confidential
        </p>
      )}
    </div>
  );
};

export default Work;
