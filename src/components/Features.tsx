import { graphql, useStaticQuery, navigate } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";

interface FeaturesProps {
  type: "waterfront" | "landscapes";
  list: string[];
}

const Features: React.FC<FeaturesProps> = ({ type, list }) => {
  const data = useStaticQuery(graphql`
    query FeaturesBackgroundImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: {
            in: [
              "waterfront-bg.png"
              "landscapes-bg.png"
              "blue-section-gradient.svg"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);

  const featureBackground = data.allFile.nodes.find(
    (node: FileNode) => node.relativePath === `${type}-bg.png`
  );
  const featureGradient = data.allFile.nodes.find(
    (node: FileNode) => node.relativePath === "blue-section-gradient.svg"
  );
  const backgroundImage = featureBackground?.publicURL
    ? `url(${featureBackground.publicURL})`
    : "none";
  const gradientImage = featureGradient?.publicURL
    ? `url(${featureGradient.publicURL})`
    : "none";
  const getTitle = () => {
    return type === "waterfront"
      ? "Waterfront Amenities"
      : "Landscapes Waterscapes";
  };

  const handleButtonClick = () => {
    const route =
      type === "waterfront"
        ? "/waterfront-amenities"
        : "/landscapes-waterscapes";
    navigate(route);
  };

  // Distribute feature items across columns on desktop
  const splitIntoColumns = (items: string[], columns: number) => {
    const cols: string[][] = Array.from({ length: columns }, () => []);
    items.forEach((item, i) => cols[i % columns].push(item));
    return cols;
  };

  const columns = splitIntoColumns(list, 5);

  return (
    <section id="#amenities"
      className="relative w-full h-[130vh] md:h-[140vh] overflow-hidden flex flex-col justify-end items-center pb-[34px] md:pb-[59px]"
      style={{
        backgroundImage: backgroundImage,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      aria-label={`${getTitle()} section`}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-[70%] "
        style={{
          backgroundImage: gradientImage,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 container flex flex-col justify-end">
        <h2 className="text-center font-normal font-['Prata'] text-white tracking-normal leading-none text-[48px] sm:text-[38px] lg:text-[80px] xl:text-[90px]">
          {getTitle()}
        </h2>

        <div className="mt-3 lg:mt-8 mx-auto">
          {/* Mobile & tablet grid */}
          <ul className="xl:hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 sm:gap-y-4 text-white list-disc list-inside">
            {list.map((item) => (
              <li
                key={item}
                className="font-['Prata'] text-[9px] sm:text-[16px]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Desktop 5 columns */}
          <div className="hidden xl:flex justify-between gap-8">
            {columns.map((col, idx) => (
              <ul key={idx} className="text-white list-disc list-inside">
                {col.map((item) => (
                  <li key={item} className="mb-5 text-[18px] font-['Prata']">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 lg:mt-12">
          <button
            onClick={handleButtonClick}
            className="font-['Prata'] py-2 sm:py-3 px-4 sm:px-12 border border-white text-white rounded-full text-[14px] sm:text-[20px] lg:text-[24px] hover:bg-white/10 transition-colors"
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
