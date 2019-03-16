import React from 'react';
import Photo from './Photo';
// import comments
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);
    const postComments = this.props.comments[postId] || [];
    return (
      <div classname="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
})

export default Single;