import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const InfraProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "infra" }
        }
      ) {
        nodes {
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 80
            )
          }
        }
      }
    }
  `);

  type InfraImageNode = { relativePath: string; publicURL: string };
  const infraImages = data.allFile.nodes as unknown as InfraImageNode[];

  // Map display metadata by file base name
  const projectMeta: Record<string, { title: string; subtitle: string }> = {
    skyven: {
      title: "E- INFRA SKYVEN",
      subtitle: "4 BHK Apartments At Kokapet",
    },
    lacasa: {
      title: "E- INFRA LACASA",
      subtitle: "4 BHK Villas At Adibatla",
    },
    nivasa: {
      title: "E- INFRA ELEGANT NIVASA",
      subtitle: "2 & 3 BHK Apartments At Kollur",
    },
    miracle: {
      title: "IRA MIRACLE",
      subtitle: "3 BHK Apartments At Kollur",
    },
    aspiration: {
      title: "IRA ASPIRATION",
      subtitle: "2 & 3 BHK Apartments At Kollur",
    },
    square: {
      title: "IRA THE SQUARE",
      subtitle: "4 BHK Villas At Adibatla",
    },
  };

  // Desired visual order (left-to-right, top-to-bottom on desktop)
  const desiredOrder = [
    "skyven",
    "lacasa",
    "nivasa",
    "miracle",
    "aspiration",
    "square",
  ];

  const sortedImages = [...infraImages]
    .map((node) => {
      const rel = node?.relativePath ?? "";
      const baseKey = rel.split("/").pop()?.split(".")[0] ?? "";
      return { ...node, baseKey } as InfraImageNode & { baseKey: string };
    })
    .filter((n) => n.baseKey in projectMeta)
    .sort(
      (a, b) =>
        desiredOrder.indexOf(a.baseKey) - desiredOrder.indexOf(b.baseKey)
    );

  return (
    <section id="#our-projects" className="bg-bgSecondaryLight">
      <div className="px-4 sm:px-8 lg:px-[120px] py-8 lg:py-16">
        <h2 className="font-['Prata'] text-[24px] sm:text-[40px] lg:text-[48px] leading-[55px] lg:font-normal mb-6 lg:mb-10 md:font-medium">
          Projects from E-Infra & IRA
        </h2>

        {/* Mobile Layout: Custom 2-column with split content */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
          {/* Left Column: First 3 items */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {sortedImages.slice(0, 3).map((image: any, index: number) => {
              const meta = projectMeta[image.baseKey];
              return (
                <div key={`mobile-left-${index}`} className="bg-white">
                  {image.childImageSharp ? (
                    <GatsbyImage
                      image={getImage((image as any).childImageSharp)!}
                      alt={meta.title}
                      loading="lazy"
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                    />
                  ) : (
                    <img
                      src={image.publicURL}
                      alt={meta.title}
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="px-3 py-3 sm:px-4 sm:py-4">
                    <div className="font-['Prata'] text-secondaryText uppercase text-[11px] sm:text-2xl tracking-wide">
                      {meta.title}
                    </div>
                    <div className="font-['Prata'] text-primaryText text-[9px] sm:text-xl">
                      {meta.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Last 3 items */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {sortedImages.slice(3, 6).map((image: any, index: number) => {
              const meta = projectMeta[image.baseKey];
              return (
                <div key={`mobile-right-${index}`} className="bg-white">
                  {image.childImageSharp ? (
                    <GatsbyImage
                      image={getImage((image as any).childImageSharp)!}
                      alt={meta.title}
                      loading="lazy"
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                    />
                  ) : (
                    <img
                      src={image.publicURL}
                      alt={meta.title}
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="px-3 py-3 sm:px-4 sm:py-4">
                    <div className="font-['Prata'] text-secondaryText uppercase text-[11px] sm:text-2xl tracking-wide">
                      {meta.title}
                    </div>
                    <div className="font-['Prata'] text-primaryText text-[9px] sm:text-xl">
                      {meta.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout: Original 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedImages.length > 0 ? (
            sortedImages.map((image: any, index: number) => {
              const meta = projectMeta[image.baseKey];
              return (
                <div key={`desktop-${index}`} className="bg-white">
                  {image.childImageSharp ? (
                    <GatsbyImage
                      image={getImage((image as any).childImageSharp)!}
                      alt={meta.title}
                      loading="lazy"
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                    />
                  ) : (
                    <img
                      src={image.publicURL}
                      alt={meta.title}
                      className="w-full h-[97px] sm:h-[323px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="px-3 py-3 sm:px-4 sm:py-4">
                    <div className="font-['Prata'] text-secondaryText uppercase text-[11px] sm:text-2xl tracking-wide">
                      {meta.title}
                    </div>
                    <div className="font-['Prata'] text-primaryText text-[9px] sm:text-xl">
                      {meta.subtitle}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No images found in the images/InfraImage directory.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfraProjects;
