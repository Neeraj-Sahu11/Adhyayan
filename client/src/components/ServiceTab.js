import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Web Development" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Mobile Apps"
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Programming Languages" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Database" }
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Modern React with Redux",
        contentDesc:
          "This course explores Javascript based front-end application development, and in particular the React library. This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms. You will be introduced to the Flux architecture and Redux. You will explore various aspects of Redux and use it to develop React-Redux powered applications.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "The Complete React Native Course",
        contentDesc:
          "Do you want to learn the whole process of building an App.This is the course for you.We will start from the very beginning,from I don't even know how to install it to actually understanding how React Native works and make it communicate with other technologies like Firebase and Redux.You will learn all the logic and practice behind React Native  in different modules, and as we advance through the course we will be increasing the difficulty.Since I believe that the best way to fully learn is by coding, after each important section we will put everything in practice with a very large practice project, using third party libraries, firebase and redux.Since React Native is bases on React for web, you need to know a little bit about React.But don’t sweat it, if you do not know anything about React for web, as a bonus you get a small React for web course.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "JavaScript: Understanding the Weird Parts",
        contentDesc:
          " Javascript is the language that modern developers need to know, and know well. Truly knowing Javascript will get you a job, and enable you to build quality web and server applications.NOTE: This course includes information on ECMAScript 6 (ES6) the next version of Javascript!In this course you will gain a deep understanding of Javascript, learn how Javascript works under the hood, and how that knowledge helps you avoid common pitfalls and drastically improve your ability to debug problems. You will find clarity in the parts that others, even experienced coders, may find weird, odd, and at times incomprehensible. You'll learn the beauty and deceptive power of this language that is at the forefront of modern software development today.This course will cover such advanced concepts as objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "MongoDB - The Complete Developer Guide",
        contentDesc:
          "MongoDB is one of the most important NoSQL databases you can work with these days. It's extremely popular and MongoDB developers are in high demand.No matter if you're building web applications, mobile applications or any other kind of application or if you're a data scientist - you'll need to work with data. Storing data, querying it efficiently and minimizing complexities whilst optimizing performance are crucial tasks.MongoDB makes working with data simple it's built on a philosophy that prioritizes performance and efficiency.",
        serviceLink: "service-details-left-sidebar"
      }
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Most Viewed Courses <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
