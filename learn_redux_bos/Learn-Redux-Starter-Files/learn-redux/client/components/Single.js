import React from 'react';
import Photo from './Photo';
// import comments
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);
    return (
      <div classname="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
})

export default Single;