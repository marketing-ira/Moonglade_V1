import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import MainLayout from "../layout/MainLayout";

import LandscapesFeatureSection from "../components/ui/landScapes/LandscapesFeatures";
import LazyDownloadBrochure from "../components/LazyDownloadBrochure";

const LandscapesWaterscapes: React.FC<PageProps> = () => {
  const [isModalShow, setIsModalShow] = React.useState(false);



  return (
    <MainLayout setIsModalShow={setIsModalShow} isModalShow={isModalShow}>
      <section className="bg-bgWaterFront">
        <LandscapesFeatureSection />
      </section>
      <LazyDownloadBrochure />
    </MainLayout>
  );
};

export default LandscapesWaterscapes;

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query LandscapesHeroPreloadQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);
  const hero = data.allFile.nodes.find(
    (n: { relativePath: string }) => n.relativePath === "landscapes-hero.png"
  );

  return (
    <>
      <title>Landscapes & Waterscapes</title>
      <meta
        name="description"
        content="Discover landscaped waterscapes and amenities at Moonglade. View features and download the brochure to learn more."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/static/fonnts.com-theseasons-reg.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      {hero?.publicURL ? (
        <link
          rel="preload"
          as="image"
          href={hero.publicURL}
          fetchPriority="high"
        />
      ) : null}
      <link
        rel="canonical"
        href="https://www.yourdomain.tld/landscapes-waterscapes"
      />
    </>
  );
};
