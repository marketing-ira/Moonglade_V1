import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ContactCard = React.lazy(() => import("../../common/ContactCard"));

interface FileNode {
  relativePath: string;
  publicURL: string;
}
interface HeroProps { hideContactCard?: boolean }
function Hero({ hideContactCard = false }: HeroProps) {
  const data = useStaticQuery(graphql`
    query WaterfrontHeroImage {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "waterfront-hero.png" }
        }
      ) {
        nodes {
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 80
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
              breakpoints: [480, 768, 1024, 1280]
              sizes: "(max-width: 768px) 100vw, 100vw"
            )
          }
        }
      }
    }
  `);
  const waterFront = data.allFile.nodes.find((node: FileNode) => {
    return node.relativePath === "waterfront-hero.png";
  });
  const imageData = (waterFront as any)?.childImageSharp
    ? getImage((waterFront as any).childImageSharp)
    : null;

  return (
    <section className="relative w-full h-screen opacity-100" aria-label="Hero Section">
      {imageData ? (
        <GatsbyImage
          image={imageData}
          alt="Waterfront hero"
          className="w-full h-full"
          loading="eager"
          fetchPriority="high"
          style={{ height: "100vh" }}
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      )}
      <div className="container absolute inset-0 flex md:flex-row flex-col justify-end items-center md:py-12 pt-12 pb-6 pointer-events-none">
        {!hideContactCard && (
          <div className="pointer-events-auto">
            <ContactCard showEmail={true} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
