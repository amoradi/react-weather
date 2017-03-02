import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route component={PostsNew} path="posts/new" />
    <Route component={PostsShow} path="posts/:id" />
  </Route>
);
