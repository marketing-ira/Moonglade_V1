import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const bullets = [
  {
    title: "Schools:",
    text: "5–15 minutes (Global Edge, DPS, Oakridge)",
  },
  {
    title: "Hospitals:",
    text: "9–20 minutes (Continental, Apollo, Care)",
  },
  {
    title: "IT Parks:",
    text: "4–15 minutes (Kokapet, Financial District, Wipro Circle)",
  },
  {
    title: "Shopping:",
    text: "5 minutes (Kokapet One Mall)",
  },
  {
    title: "Connectivity:",
    text: "Close to ORR & NH-65, RGIA (20 minutes)",
  },
];

function MoongladeLocality() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
        }
      }
    }
  `);

  const mapNode = data.allFile.nodes.find(
    (n: { relativePath: string }) =>
      n.relativePath === "moonglade-locality-map.png"
  );

  const mapImage = mapNode?.childImageSharp
    ? getImage(mapNode.childImageSharp)
    : null;

  return (
    <section className="px-4 sm:px-[120px] pt-[35px] md:pt-[85px] md:pb-[65px]   md:bg-transparent ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] lg:gap-12 items-center">
        {/* Left copy */}
        <div className="p-[1rem] sm:p-0  flex flex-col justify-between  gap-5  ">
          <h4 className="font-['Prata'] text-primaryText text-[24px] leading-[38px] font-normal md:font-medium md:text-[54px] sm:text-[44px] lg:text-[54px] md:leading-[64px]">
            Perfectly Positioned
            <br /> to be SEEN
          </h4>

          <ul className="mt-6 space-y-5">
            {bullets.map((item) => (
              <li
                key={item.title}
                className="font-['Prata'] text-primaryText flex items-start gap-3"
              >
                <span className="w-2 h-2 bg-primaryText rounded-full mt-2 flex-shrink-0"></span>
                <div className="flex flex-col">
                  <p className="font-semibold text-[16px] sm:text-[18px]">
                    {item.title}
                  </p>
                  <p className="text-[14px] sm:text-[16px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right map */}
        <div className="w-full  ">
          <div className="bg-[#FFF1EA]    w-full   lg:rounded-[50px] ">
            {mapImage ? (
              <GatsbyImage
                image={mapImage}
                alt="Moonglade Locality Map"
                className="w-full   lg:rounded-[50px]  md:scale-95 scale-100"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] bg-gray-100 lg:rounded-[20px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoongladeLocality;
