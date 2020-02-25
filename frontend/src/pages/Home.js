import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AddPost from "../pages/AddPost";
import Elements from "../pages/Elements";
import AllPosts from "../pages/AllPosts";

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
          <div className="sidebar-item">UI Elements</div>
        </Link>
      </div>
      <div className="home__content">
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin/posts" component={AllPosts} />
          <Route path="/admin/add" component={AddPost} />
          <Route path="/admin/elements" component={Elements} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
{
  /* {loading && <h1>Loading</h1>}
        {data && (
          <div>
            <h1>Loaded content</h1>
            {data.getPosts.map(post => {
              return <Card card={post} />;
            })}
          </div>
        )} */
}
