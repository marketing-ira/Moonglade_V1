import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GrPrevious, GrNext, GrFormClose } from "react-icons/gr";

import Lock from "../assets/images/lock.svg";
type PlanItem = {
  file: string;
  label: string;
  secondaryLabel: string;
  locked?: boolean;
  highlight?: boolean;
};

const plansOrder: PlanItem[] = [
  {
    file: "3BHK1400sft.png",
    label: "3BHK, 1400 sft. (East Facing)",
    secondaryLabel: "Unit No: 1, 2, 3, 4",
  },
  {
    file: "3BHK1670sft.png",
    label: "3BHK, 1670 sft. (East Facing)",
    secondaryLabel: "Unit No: 6, 7, 8",
  },
  {
    file: "3BHK2050sft.png",
    label: "3BHK, 2050 sft. (East Facing)",
    secondaryLabel: "Unit No: 6, 7, 8",
  },
  {
    file: "3BHK2320sft.png",
    label: "3BHK, 2320 sft. (East Facing)",
    secondaryLabel: "Unit No: 9",
  },
  {
    file: "3BHK2740sft.png",
    label: "3BHK, 2740 sft. (East Facing)",
    secondaryLabel: "Unit No: 12, 13, 14, 15, 16, 17, 18",
    locked: true,
  },
  {
    file: "4BHK3535sft.png",
    label: "4BHK, 3535 sft. (West Facing)",
    secondaryLabel: "Unit No: 2, 8, 9",
    locked: true,
  },
];

interface FloorPlansPropsType {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalTitle: React.Dispatch<React.SetStateAction<boolean>>;
}

function FloorPlans({ setIsModalShow  ,setIsModalTitle}: FloorPlansPropsType) {
  const [isGalleryModalShow, setIsGallaryModalShow] = useState(false);
  const [selectIndexImage, setSelectedIndexImage] = useState<number | null>(
    null
  );
  const data = useStaticQuery(graphql`
    query FloorPlansAssets {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "plans" }
        }
      ) {
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

  const pathToImage: Record<string, any> = Object.fromEntries(
    (
      data.allFile.nodes as {
        relativePath: string;
        publicURL: string;
        childImageSharp?: any;
      }[]
    ).map((n) => [
      n.relativePath.split("/").pop() ?? n.relativePath,
      n.childImageSharp ? getImage(n.childImageSharp) : null,
    ])
  );
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isGalleryModalShow) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isGalleryModalShow]);

  const handleModalShow = (id: number) => {
    setSelectedIndexImage(id);
    setIsGallaryModalShow(true);
  };
  const closeModal = () => {
    setIsGallaryModalShow(false);
    setSelectedIndexImage(null);
  };
  const showNext = () => {
    if (selectIndexImage === null) return;
    let nextIndex = selectIndexImage + 1;
    while (nextIndex < plansOrder.length && plansOrder[nextIndex].locked) {
      nextIndex++;
    }
    if (nextIndex < plansOrder.length) {
      setSelectedIndexImage(nextIndex);
    }
  };

  const showPrev = () => {
    if (selectIndexImage === null) return;
    let prevIndex = selectIndexImage - 1;
    while (prevIndex >= 0 && plansOrder[prevIndex].locked) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      setSelectedIndexImage(prevIndex);
    }
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-2   lg:grid-cols-3 gap-6 lg:gap-12 md:w-5/6 md:mx-auto">
          {plansOrder.map((p, index) => {
            const image = pathToImage[p.file];
            const content = (
              <div
                onClick={() => {
                  if (!p.locked) {
                    handleModalShow(index);
                  }
                }}
                className="relative w-full aspect-[7/6] overflow-hidden rounded-xl cursor-pointer"
              >
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt={p.label}
                    className="w-full h-full "
                    loading="lazy"
                    imgClassName="w-full h-full object-cover rounded-xl shadow-md"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-gray-100 shadow-md rounded-xl" />
                )}

                {p.locked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-evenly text-center bg-[#3b3e91]/80">
                    <div className="flex items-center justify-center   text-white">
                      <div className="hidden md:block">
                        <Lock className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px]" />
                      </div>
                    </div>

                    <p className="px-6 font-normal font-['Prata'] text-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-[18px] tracking-normal leading-[14px] lg:leading-[22px] ">
                      Get Instant Access to
                      <br /> Our Complete Floor Plans
                    </p>
                    <button
                      onClick={() => {
                        if (p.locked) {
                          setIsModalShow(true);
                          setIsModalTitle(true)
                        }
                      }}
                      type="button"
                      className="rounded-full bg-[#DEAF97] text-primaryText font-['Prata'] text-[7.7px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-4 py-2 shadow"
                    >
                      Download Our Brochure Now
                    </button>
                  </div>
                )}

                {p.highlight && (
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-secondaryText" />
                )}
              </div>
            );

            return (
              <div key={p.file} className="flex flex-col">
                {content}
                <div className="mt-3 font-['Prata'] font-normal text-primaryText text-[10px] sm:text-[16px] lg:text-[19px] leading-[100%]">
                  {p.label}
                </div>
                <p className="text-gray-600 font-normal text-base mt-1">
                  {p.secondaryLabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {isGalleryModalShow && selectIndexImage !== null && (
        <section className="fixed inset-0 z-50 w-full h-full bg-black/80 backdrop-blur-md flex justify-center items-center">
          <React.Suspense fallback={<div>Loading...</div>}>
            {/* prevent modal click close */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center w-full max-w-5xl  "
            >
              {/* Previous Button */}
              <button
                onClick={showPrev}
                disabled={selectIndexImage === 0}
                className=" p-3 bg-black rounded-full disabled:cursor-not-allowed shadow hover:scale-105 transition-all 1s ease-in  disabled:opacity-40"
              >
                <GrPrevious fontSize={25} className="text-bgPrimary" />
              </button>

              {/* Image in center */}
              <div className="flex-1 flex justify-center px-6">
                {(() => {
                  const plan = plansOrder[selectIndexImage];
                  const image = pathToImage[plan.file];

                  return (
                    image && (
                      <div className="w-full full aspect-video rounded-lg shadow-sm ">
                        <GatsbyImage
                          loading="lazy"
                          image={image}
                          alt={plan.label}
                          objectFit="cover"
                          imgStyle={{ border: "10px" }}
                          className="w-full h-full"
                        />
                      </div>
                    )
                  );
                })()}
              </div>
              <button
                onClick={closeModal}
                className="absolute -top-4 sm:top-0 right-0 p-3 bg-black rounded-full  shadow hover:scale-105 transition-all 1s ease-in  disabled:opacity-40"
              >
                <GrFormClose fontSize={25} className="text-bgPrimary" />
              </button>

              <button
                onClick={showNext}
                disabled={selectIndexImage === plansOrder.length - 3}
                className="p-3 bg-black rounded-full disabled:cursor-not-allowed shadow hover:scale-105 transition-all 1s ease-in disabled:opacity-40"
              >
                <GrNext fontSize={25} className="text-bgPrimary" />
              </button>
            </div>
          </React.Suspense>
        </section>
      )}
    </section>
  );
}

export default FloorPlans;
