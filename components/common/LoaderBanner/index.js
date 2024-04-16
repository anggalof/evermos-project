import React from "react"
import ContentLoader from "react-content-loader"

const LoaderBanner = (props) => (
  <ContentLoader
    uniqueKey="uniqueKey"
    width="100%"
    height={260}
    viewBox="0 0 440 200"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="224" />
  </ContentLoader>
)

export default LoaderBanner;
