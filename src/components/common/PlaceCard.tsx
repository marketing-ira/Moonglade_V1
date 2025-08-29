import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { PlaceCardProps } from "../../types/PlaceCardTypes";

function PlaceCard({ label, imageData, alt }: PlaceCardProps) {
  return (
    <article className="flex justify-between items-start flex-col shadow-sm bg-bgPrimary">
      <div className="flex justify-center items-center aspect-[4/3] w-full overflow-hidden">
        {imageData ? (
          <GatsbyImage
            image={imageData}
            alt={alt || label}
            className="w-full h-full"
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: "4/3" }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse aspect-[4/3]" />
        )}
      </div>
      <div className="w-full">
        <h3 className="text-left font-['Prata'] font-normal text-base sm:text-sm md:text-lg lg:text-26px tracking-normal p-4">
          {label}
        </h3>
      </div>
    </article>
  );
}

export default React.memo(PlaceCard);
