import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { Burger } from "../HW37/burger";
import { Title } from "../HW37/title";
import { Alerts } from "../HW37/alerts/";
import { Counter } from "../Tests/counter";
import { LightSwitch } from "../Tests/LightSwitch";
import { PostCollection } from "../HW38/PostCollection";
import { HW39 } from "../HW39";
import "./index.scss";

export const App = () => {
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState("home");
  console.log(page);

  useEffect(() => {
    fetch("https://66411982a7500fcf1a9f928c.mockapi.io/products/posts")
      .then((response) => response.json())
      .then((json) => setPostData(json));
  }, []);

  return (
    <React.Fragment>
      <Header setPage={setPage} />
      {page === "home" && (
        <>
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

            <h1 className="HW-Title">HW38</h1>
            <div className="post-collection">
              <PostCollection postData={postData} />
            </div>
          </div>
          <div className="test__container">
            <h1 className="HW-Title">Tests</h1>
            <Counter initialValue={0} step={2} />
            <LightSwitch isLightOn={true} />
          </div>
        </>
      )}

      {page === "Homework" && (
        <div className="HW__container">
          <div className="HW37" >
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
          <div className="HW38" >
            <h1 className="HW-Title">HW38</h1>
            <div className="post-collection">
              <PostCollection postData={postData} />
            </div>
          </div>
          <div className="HW39" >
          <h1 className="HW-Title">HW39</h1>
          < HW39 />    
        </div>
        </div>
      )}

      {page === "Test" && (
        <div className="test__container">
          <h1 className="HW-Title">Tests</h1>
          <Counter initialValue={0} step={2} />
          <LightSwitch isLightOn={true} />
        </div>
      )}

      {page === "HW37" && (
        <div className="HW37" >
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
      )}

      {page === "HW38" && (
        <div className="HW38" >
            <h1 className="HW-Title">HW38</h1>
            <div className="post-collection">
              <PostCollection postData={postData} />
            </div>
          </div>
      )}
      {page === "HW39" && (
        <div className="HW39" >
          < HW39 />    
        </div>
      )}


    </React.Fragment>
  );
};
