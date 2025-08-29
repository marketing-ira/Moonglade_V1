import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const TailoredSpace = () => {
  const data = useStaticQuery(graphql`
    query TailoredSpaceImage {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "moonGlade" }
        }
      ) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);

  const bgNode = (
    data.allFile.nodes as { relativePath: string; publicURL: string }[]
  ).find((n) => n.relativePath === "moonGlade/tailoredSpace.png");

  const bgUrl = bgNode?.publicURL;

  return (
    <section
      className="w-full h-[26vh] md:h-[120vh] bg-contain md:bg-cover "
      style={
        bgUrl
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    />
  );
};

export default TailoredSpace;
