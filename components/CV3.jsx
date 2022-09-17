import Image from "next/image";
import { HiOutlineMail, HiOutlineLink, HiExternalLink } from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const CV3 = () => {
  const items = "flex items-center mr-3 mt-2 ";
  const itemsSVG = "h-4 w-4 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-xl";
  const paragraphSize = "text-[0.705rem] mt-1 text-gray-700 font-light";
  const jobSize = "text-[0.775rem] text-gray-500 font-light";

  const cv = useContext(CvContext);

  const websiteWithoutHttps = (website) => {
    if (website.includes("https://")) {
      return website;
    } else {
      return website.replace("", "https://");
    }
  };

  const deleteHttpsAndwww = (website) => {
    if (website.includes("https://")) {
      return website
        .replace("https://www.", "")
        .replace("www.", "")
        .replace("https://", "");
    } else {
      return website;
    }
  };

  return (
    <div className="w-full h-full flex" id="cv">
      <div className=" w-[30%] pr-4 flex flex-col  mr-1 h-full">
        {[cv.cv].map((item, index) => {
          return (
            <>
              {item.displayImage ? (
                <div className="mr-3 flex float-left">
                  <Image
                    src={item.image || "/favicon.png"}
                    className="rounded-full"
                    width="100px"
                    height="100px"
                    alt="profilePicture"
                    quality={100}
                    objectFit="cover"
                  />
                </div>
              ) : null}
              {/* SOCIAL */}
              <section id="social" className="mt-5">
                <div className="flex  flex-col flex-wrap font-light text-xs mt-1 items-left align-middle  ">
                  {item.email && item.displayMail ? (
                    <div className={items}>
                      <HiOutlineMail className={itemsSVG} />
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                  ) : null}
                  {item.website && item.displayWebSite ? (
                    <div className={items}>
                      <HiOutlineLink className={itemsSVG} />
                      <a
                        href={websiteWithoutHttps(item.website)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {deleteHttpsAndwww(item.website)}
                      </a>
                    </div>
                  ) : null}
                  {item.github && item.displayGithub ? (
                    <div className={items}>
                      <AiFillGithub className={itemsSVG} />

                      <a
                        href={`https://github.com/${item.github}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.github}
                      </a>
                    </div>
                  ) : null}
                  {item.twitter && item.displayTwitter ? (
                    <div className={items}>
                      <TbBrandTwitter className={itemsSVG} />
                      <a
                        href={`https://twitter.com/${item.twitter}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.twitter}
                      </a>
                    </div>
                  ) : null}
                  {item.linkedIn && item.displayLinkedIn ? (
                    <div className={items}>
                      <AiOutlineLinkedin className={itemsSVG} />
                      <a
                        href={`https://www.linkedin.com/in/${item.linkedIn}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkedIn}
                      </a>
                    </div>
                  ) : null}
                  {item.instagram && item.displayInstagram ? (
                    <div className={items}>
                      <AiOutlineInstagram className={itemsSVG} />
                      <a
                        href={`https://www.instagram.com/${item.instagram}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.instagram}
                      </a>
                    </div>
                  ) : null}
                  {item.facebook && item.displayFacebook ? (
                    <div className={items}>
                      <AiOutlineFacebook className={itemsSVG} />
                      <a
                        href={`https://www.facebook.com/${item.facebook}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.facebook}
                      </a>
                    </div>
                  ) : null}
                </div>
              </section>
              {/* SOCIAL END */}
              <section id="skills_and_projects" className="flex mt-3">
                {/* SKILLS START */}
                <section id="skills" className="">
                  <div className="mt-3">
                    <h4 className="text-sm ">{item.skillTitle1}</h4>
                    <p className={paragraphSize}>
                      {item.toolsAndTechSkills.join(", ")}
                    </p>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-sm">{item.skillTitle2}</h4>
                    <p className={paragraphSize}>
                      {item.industryKnowledge.join(", ")}
                    </p>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-sm ">{item.skillTitle3}</h4>
                    <p className={paragraphSize}>{item.languages.join(", ")}</p>
                  </div>
                </section>
                {/* SKILLS END */}
              </section>
              {/* EDUCATION */}
              <section id="education" className="mt-5">
                <h4 className="text-sm mb-1">Education</h4>

                {item.education.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <h4 className="text-[0.755rem] mt-1 font-medium">
                        {item.title}
                      </h4>
                      <p className="text-[0.705rem] mt-1 text-gray-600">
                        {item.school}
                      </p>
                      <p className="text-[0.705rem] text-gray-500">
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                  );
                })}

                <p className={paragraphSize}>{}</p>
              </section>
            </>
          );
        })}
      </div>
      <div className="relative h-full  ">
        {[cv.cv].map((item, index) => {
          return (
            <>
              {/* ABOUT TEXT START  */}
              {item.about ? (
                <section id="about">
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <h4 className=" text-gray-400 pb-1 text-sm font-medium">
                    {item.jobTitle}
                    {item.location ? " - " : null}
                    {item.location}
                  </h4>

                  <p className="text-[0.705rem] mt-1 text-gray-700 font-light ">
                    {item.about}
                  </p>
                </section>
              ) : null}
              {/* ABOUT TEXT END */}
              {/* EXPERIENCE START */}
              <section className="mt-6 relative">
                <h3 className={titles}>Experience</h3>

                {item.experiences.map((experience, index) => {
                  return (
                    <div className="relative " key={index}>
                      <div className="flex mt-3 flex-col  justify-between">
                        <h4 className="font-medium  text-md">
                          {experience.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <p className={jobSize}>{experience.company}</p>{" "}
                          <span className={jobSize}>|</span>
                          <span className="flex items-center space-x-1">
                            <p className={jobSize}>{experience.startDate}</p>
                            {experience.endDate ? (
                              <span className={jobSize}> - </span>
                            ) : null}

                            <p className={jobSize}>{experience.endDate}</p>
                          </span>
                        </div>
                      </div>
                      <p className="text-[0.705rem] mb-2 mt-2 text-gray-700 font-light">
                        {experience.summary}
                      </p>
                    </div>
                  );
                })}
              </section>
              {/* EXPERIENCE END */}
              {/* PROJECTS START */}
              <section id="projects" className="relative">
                <h3 className={titles}>Projects</h3>

                {item.projects.map((project, index) => {
                  return (
                    <div key={index} className="mt-2 relative">
                      <h4 className="font-medium text-md">
                        {project.title}
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <HiExternalLink className="ml-1 inline" />
                          </a>
                        ) : null}
                      </h4>
                      <p className={paragraphSize}>{project.summary}</p>
                    </div>
                  );
                })}
              </section>
              {/* PROJECTS END */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CV3;
