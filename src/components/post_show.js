import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost, deletePost} from '../actions';

class PostShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.fetchPost(id);
  }

  handleDelete() {
    const {id} = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });

  }
  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <button
          type="button"
          className="btn btn-danger pull-xs-right"
          onClick={this.handleDelete.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps) {
  //return { posts: state.posts };
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
