import React from "react"
import styled from "@emotion/styled"

const PostWrapper = styled.div`
  grid-area: p;
`

const Post = ({ siteTitle }) => (
  <PostWrapper>
    <h1>Title</h1>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
  </PostWrapper>
)

export default Post
