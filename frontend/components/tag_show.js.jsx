import React from 'react';

import TagStore from './../stores/tag';
import ApiUtil from './../util/api_util';
import PostGrid from './post_grid.js';
import UserHeader from './user_header.js';

var TagShow = React.createClass ({

  componentDidMount: function(){
    TagStore.addChangeListener(this._changed);

    ApiUtil.fetchTag(this.props.params.tagName);
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchTag(newProps.params.tagName);
  },

  componentWillUnmount: function(){
    TagStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({tags: TagStore.all()});
  },

  render: function(){
    var tagPosts;
    var tagHeader;
    if (this.state && this.state.tags){
        tagHeader = <UserHeader curUser={this.state.tags}/>;
        tagPosts = <PostGrid posts={this.state.tags.posts}/>;
    }
    return <div>
            <div className = "user-container">
              {tagHeader}
              {tagPosts}
            </div>
          </div>;
  }
});

export default TagShow;
