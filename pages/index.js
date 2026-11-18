import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Gabriel Andres Brandalisse — Full-Stack Developer & Software Engineer"
      description="Architectural portfolio of Gabriel Andres Brandalisse. Full-Stack Developer and Software Engineer at Naranja X specializing in Node.js, TypeScript, React, Next.js, and AWS Serverless."
    >
      <Hero />
      <FavouriteProjects />
      <Experience />
      <AboutMe />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = (await getLatestRepos(userData, token)) || [];

  return {
    props: {
      repositories,
    },
  };
};
