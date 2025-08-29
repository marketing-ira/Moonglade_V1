import React, { useState, useEffect, useRef } from "react";

const DownloadBrochureWithForm = React.lazy(() =>
  import("./DownloadBrochureWithForm")
);

function LazyDownloadBrochure() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Load when element is 200px away from viewport
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!shouldLoad) {
    return (
      <div 
        ref={placeholderRef}
        className="h-96 bg-gray-50 animate-pulse"
        aria-label="Download form loading"
      />
    );
  }

  return (
    <React.Suspense 
      fallback={
        <div className="h-96 bg-gray-50 animate-pulse" />
      }
    >
      <DownloadBrochureWithForm />
    </React.Suspense>
  );
}

export default LazyDownloadBrochure;
