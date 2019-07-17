import React from "react"

import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from '../components/Post'

export default () => (
  <PrimaryLayout column="col-xs-6">
    <Post 
      title="This is my first post" 
      excerpt="Writing that will be displayed in excerpt"
    />
    <Post 
      title="This is my second post" 
      excerpt="Writing that will be displayed in excerpt"
    />
    <Post 
      title="This is my third post" 
      excerpt="Writing that will be displayed in excerpt"
    />
  </PrimaryLayout>
)
