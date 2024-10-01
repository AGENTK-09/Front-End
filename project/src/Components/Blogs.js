import React, { useEffect, useState } from "react";
import { Data } from "../data";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../CSS/Blogs.css";
import AOS from "aos";

const Blogs = () => {
  const [newsData, setNewsData] = useState(Data);
  console.log(newsData);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="news-card-section">
      <div className="heading">BLOGS</div>
      <div data-aos="zoom-in-up" className="news-card-container">
        {newsData.map((item, id) => (
          <Card style={{ width: "18rem" }} key={id} className="news-card">
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="news-details">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link className="link">
                <Button>Read more...</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
