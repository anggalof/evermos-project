import React from "react"
import ContentLoader from "react-content-loader"

const LoaderProducts = (props) => (
  <ContentLoader
    uniqueKey="uniqueKey"
    viewBox="0 0 440 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="254" rx="4" ry="4" width="100%" height="28" />
    <rect x="0" y="393" rx="3" ry="3" width="100%" height="58" />
    <rect x="0" y="303" rx="3" ry="3" width="219" height="18" />
    <rect x="0" y="7" rx="10" ry="10" width="100%" height="224" />
  </ContentLoader>
)

export default LoaderProducts;
