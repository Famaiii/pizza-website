import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="277" rx="0" ry="0" width="280" height="0" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="85" />
    <rect x="123" y="418" rx="10" ry="10" width="152" height="37" />
    <rect x="0" y="418" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
