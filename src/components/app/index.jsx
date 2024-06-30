import React, { useState, useEffect } from 'react';
import { Header } from "../header";
import { Burger } from '../HW37/burger';
import { Title } from '../HW37/title';
import { Alerts } from '../HW37/alerts/';
import { Counter } from '../Tests/counter';
import { LightSwitch } from '../Tests/LightSwitch';
import { PostExmpl } from '../HW38/postExmpl';
import { PostCollection } from '../HW38/PostCollection';
import './index.scss';

export const App = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://66411982a7500fcf1a9f928c.mockapi.io/products/posts")
      .then((response) => response.json())
      .then((json) => setPostData(json));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="HW__container">
        <h1 className="HW-Title">HW37</h1>
        <Title isMouseOn={true} />
        <Burger isMenuOpen={true} />
        <section className="alert">
          <div className="alert__container">
            <Alerts status="alert" />
            <Alerts status="block" />
            <Alerts status="check" />
            <Alerts status="info" />
            <Alerts status="bell" />
          </div>
        </section>
      </div>
      <div className="HW__container">
        <h1 className="HW-Title">HW38</h1>
        <div className="posts">
          <PostExmpl postData={postData} size="xl" />
          <PostExmpl postData={postData} size="l" />
          <PostExmpl postData={postData} size="m" />
        </div>
        <div className="post-collection">
          <PostCollection postData={postData} />
        </div>
      </div>
      <div className="HW__container">
        <h1 className="HW-Title">Tests</h1>
        <Counter initialValue={0} step={2} />
        <LightSwitch isLightOn={true} />
      </div>
    </React.Fragment>
  );
};
