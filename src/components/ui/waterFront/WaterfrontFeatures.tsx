import React from "react";
import PlaceCard from "../../common/PlaceCard";
import { IoIosArrowBack } from "react-icons/io";
import { navigate } from "gatsby";
import waterfrontAmenitiesFeatures from "../../../data/waterfront-amenities-features-data";
import { CardItem } from "../../../types/PlaceCardTypes";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
function WaterfrontFeatures() {
  const data = useStaticQuery(graphql`
    query WaterfrontFeatureImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 60
              formats: [AUTO, WEBP, AVIF]
              width: 350
              height: 260
              breakpoints: [240, 320, 480]
            )
          }
        }
      }
    }
  `);

  const handleGoBackToHome = () => {
    navigate("/");
  };

  const imageMap: Record<string, any> = {};
  for (const n of data.allFile.nodes) {
    imageMap[n.relativePath] = getImage(n.childImageSharp);
  }

  return (
    <section
      id="waterfront-amenities"
      className="container py-12 pt-[64px] sm:pt-[76px] lg:pt-[88px]"
    >
      <div className="my-3 md:my-7 ">
        <button
          onClick={handleGoBackToHome}
          className="bg-transparent flex justify-start items-center gap-2 pr-3  py-2 rounded-md text-primaryText/70 hover:transition-colors hover:text-primaryText hover:border-[0.3px] hover:border-primaryText  hover:scale-105 transition-all 2s ease-out  text-sm sm:text-base md:text-lg font-medium"
        >
          <IoIosArrowBack className="text-lg sm:text-xl md:text-2xl" />
          <span className="leading-none">Back To Home</span>
        </button>
      </div>
      <h2 className="font-['Prata'] font-semibold mb-3 text-lg sm:text-xl md:text-3xl lg:text-5xl md:mt-4 leading-none">
        Waterfront Amenities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  my-2 sm:4 md:mt-8 lg:mt-12  gap-4 sm:gap-6 md:gap-10 lg:gap-12 ">
        {waterfrontAmenitiesFeatures.map(
          (cardItem: CardItem, index: number) => {
            const imageData = imageMap[cardItem.imageName] || null;
            return (
              <PlaceCard
                key={index}
                label={cardItem.label}
                imageData={imageData}
                alt={cardItem.label}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default React.memo(WaterfrontFeatures);
