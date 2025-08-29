import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BrandsLogo from "../assets/images/brandslogo-hero.svg";
import Einfraa from "../assets/icons/einfraa.svg";
import IraWhite from "../assets/icons/Irawhite.svg";
const ContactCard = React.lazy(() => import("./common/ContactCard"));

interface FileNode {
  relativePath: string;
  publicURL: string;
}
interface HeroProps {
  setIsModalShow?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalShow:boolean
}
function Hero({ setIsModalShow  ,isModalShow}: HeroProps) {
  const data = useStaticQuery(graphql`
    query HeroImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { in: ["moonglade-hero.png", "mobile-hero.png"] }
        }
      ) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);
  const moonGlade = data.allFile.nodes.find((node: FileNode) => {
    return node.relativePath === "moonglade-hero.png";
  });
  const moonGladeBackgroundImage = moonGlade?.publicURL
    ? `url(${moonGlade.publicURL})`
    : "none";

  const smallScreenImage = data.allFile.nodes.find((node: FileNode) => {
    return node.relativePath === "mobile-hero.png"; // using your existing mobile-hero image
  });
  const smallScreenBackgroundImage = smallScreenImage?.publicURL
    ? `url(${smallScreenImage.publicURL})`
    : moonGladeBackgroundImage;

  return (
    <section
      id="/"
      className="relative w-full h-screen opacity-100 sm:px-[120px] flex md:flex-row flex-col justify-evenly md:justify-between md:pb-12   sm:pt-[76px] lg:pt- pb-6  md:items-center bg-hero-responsive mt-[64px]  sm:mt-[76px] lg:mt-[88px] text-center md:text-start"
      style={
        {
          "--mobile-bg-url": smallScreenBackgroundImage,
          "--desktop-bg-url": moonGladeBackgroundImage,
        } as React.CSSProperties & {
          "--mobile-bg-url": string;
          "--desktop-bg-url": string;
        }
      }
      aria-label="Hero Section"
    >
      <div className="flex flex-col font-medium text-[#1D256C]   text-[34px] leading-[41px] md:text-[4rem] md:leading-[72px] tracking-normal pt-16 md:pt-0">
        <span>Where</span>
        <span>your dreams</span>
        <span>take orbit</span>
      </div>
      {!isModalShow && <div className="mx-auto md:mx-0 text-left pt-48 md:pt-0">
       <ContactCard />
      </div>}

      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 sm:left-[120px] sm:transform-none flex justify-start items-center  hero-icons space-x-6">
        <div className="w-24 md:w-32 lg:w-40 flex items-center">
          <Einfraa />
        </div>
        <div className="w-20 md:w-28 lg:w-36 flex items-center">
          <IraWhite />
        </div>
      </div>
    </section>
  );
}

export default Hero;
