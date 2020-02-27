import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AddPost from "../pages/AddPost";
import Elements from "../pages/Elements";
import AllPosts from "../pages/AllPosts";
import SinglePost from "../pages/SinglePost";

const Home = () => {
  return (
    <div className="home">
      <div className="home__sidebar">
        <Link to="/admin">
          <div className="sidebar-item">Dashboard</div>
        </Link>
        <Link to="/admin/posts">
          <div className="sidebar-item">View all posts</div>
        </Link>
        <Link to="/admin/add">
          <div className="sidebar-item">Add new post</div>
        </Link>
        <Link to="/admin/elements">
          <div className="sidebar-item">Component library</div>
        </Link>
      </div>
      <div className="home__content">
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin/posts" component={AllPosts} />
          <Route path="/admin/add" component={AddPost} />
          <Route path="/admin/elements" component={Elements} />
          <Route exact path="/admin/post/:postId" component={SinglePost} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
