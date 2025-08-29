import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import MainLayout from "../layout/MainLayout";

import WaterfrontFeaturesSection from "../components/ui/waterFront/WaterfrontFeatures";
import LazyDownloadBrochure from "../components/LazyDownloadBrochure";

const WaterfrontAmenities: React.FC<PageProps> = () => {
  const [isModalShow, setIsModalShow] = React.useState(false);



  return (
    <MainLayout setIsModalShow={setIsModalShow} isModalShow={isModalShow}>
      <section className="bg-bgWaterFront">
        <WaterfrontFeaturesSection />
      </section>
      <LazyDownloadBrochure />
    </MainLayout>
  );
};

export default WaterfrontAmenities;

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query WaterfrontHeroPreloadQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);
  const hero = data.allFile.nodes.find(
    (n: { relativePath: string }) => n.relativePath === "waterfront-hero.png"
  );

  return (
    <>
      <title>Waterfront Amenities</title>
      <meta
        name="description"
        content="Explore Moonglade's waterfront amenities, features, and lifestyle offerings. Book a site visit and download the brochure."
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
        <link rel="preload" as="image" href={hero.publicURL} fetchPriority="high" />
      ) : null}
      <link rel="canonical" href="https://www.yourdomain.tld/waterfront-amenities" />
    </>
  );
};
