import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const waterfrontList: string[] = [
  "Zen Zone",
  "Sun Deck",
  "Skating ring",
  "Bubbling Waters",
  "Elevated Walkway",
  "Tree House",
  "Outdoor Gymnasium",
  "Reflecting Waters",
  "Camping Space",
  "Senior Citizen Park",
  "Forest Trail",
  "Cricket Pitch",
  "Aquatic Pool",
  "Bird Feeding Lawn",
  "Swing Set",
];
const landscapesList: string[] = [
  "Entrance Canopy",
  "Sun Lawn/Yoga Lawn",
  "Mini Amphitheater",
  "Outdoor Dining",
  "Barbecue/Food Area",
  "Water Bridge",
  "Oxygen Valley",
  "Meadow Lawn",
  "Pergola Seating",
  "Powder Room",
  "Iconic Sculpture",
  "Kiosk/Dining",
  "Sculpture Garden",
  "Cycling Track",
  "Children's Play Area",
];

import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";
import InfraProjects from "../components/InfraProjects";
import Features from "../components/Features";

const EinfraIraProjectDes = React.lazy(
  () => import("../components/EinfraIraProjectDes")
);
const InfoWalkthrough = React.lazy(
  () => import("../components/InfoWalkthrough")
);
const Clubhouse = React.lazy(() => import("../components/Clubhouse"));
const TailoredSpaceHeader = React.lazy(
  () => import("../components/TailoredSpaceHeader")
);
const TailoredSpace = React.lazy(() => import("../components/TailoredSpace"));
const FloorPlans = React.lazy(() => import("../components/FloorPlans"));
const MoongladeLocality = React.lazy(
  () => import("../components/MoongladeLocality")
);
const SiteVisitBar = React.lazy(() => import("../components/SiteVisitBar"));
const DownloadBrochureWithForm = React.lazy(
  () => import("../components/DownloadBrochureWithForm")
);
const FAQs = React.lazy(() => import("../components/FAQs"));
const DownloadBrochure = React.lazy(
  () => import("../components/DownloadBrochure")
);

const IndexPage: React.FC<PageProps> = () => {
  const [isModalShow, setIsModalShow] = React.useState(false);
  const [isShowModalTitle, setIsModalTitle] = React.useState(false);

  return (
    <React.Suspense fallback={<div />}>
      <MainLayout
        setIsModalShow={setIsModalShow}
        isModalShow={isModalShow}
        setIsModalTitle={setIsModalTitle}
        isShowModalTitle={isShowModalTitle}
      >
        <Hero setIsModalShow={setIsModalShow} isModalShow={isModalShow} />
        <section className="bg-[#FFF9F7]">
          <EinfraIraProjectDes />
        </section>

        <InfoWalkthrough />

        <Clubhouse />
        <Features type="waterfront" list={waterfrontList} />
        <DownloadBrochure
          setIsModalShow={setIsModalShow}
          setIsModalTitle={setIsModalTitle}
        />
        <Features type="landscapes" list={landscapesList} />
        <TailoredSpaceHeader />
        <TailoredSpace />
        <FloorPlans
          setIsModalShow={setIsModalShow}
          setIsModalTitle={setIsModalTitle}
        />
        <SiteVisitBar
          setIsModalShow={setIsModalShow}
          setIsModalTitle={setIsModalTitle}
        />
        <section className="bg-bgPrimary md:bg-bgSecondaryLight ">
          <MoongladeLocality />
        </section>

        <DownloadBrochureWithForm />
        <section className="bg-bgSecondaryLight">
          <InfraProjects />
          <FAQs />
        </section>
      </MainLayout>
    </React.Suspense>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Moonglade | Luxury Apartments in Kokapet, Hyderabad</title>
    <meta
      name="description"
      content="Explore Moonglade luxury apartments in Kokapet with premium amenities, floor plans, and locality highlights. Book a site visit and download the brochure."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />

    <link
      rel="preload"
      href="/static/fonnts.com-theseasons-reg.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />

    <link
      rel="preload"
      as="image"
      href="/static/moonglade-hero.svg"
      fetchPriority="high"
    />
    <link
      rel="preload"
      as="image"
      href="/static/mobile-hero.svg"
      fetchPriority="high"
    />

    <link rel="preload" as="image" href="/static/waterfront-bg.png" />
    <link rel="preload" as="image" href="/static/blue-section-gradient.svg" />

    <link rel="canonical" href="https://www.yourdomain.tld/" />

    <meta
      property="og:title"
      content="Moonglade | Luxury Apartments in Kokapet, Hyderabad"
    />
    <meta
      property="og:description"
      content="Explore Moonglade luxury apartments in Kokapet with premium amenities, floor plans, and locality highlights."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);
