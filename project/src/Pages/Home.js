import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import LoaderImg from "../Components/LoaderImg";
const Home = () => {
  const [cardData, setData] = useState("");
  const [filterDup, setFilterDup] = useState();
  const [loading, setLoading] = useState(false);

  if (loading) {
    <LoaderImg />;
  }
  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        const fetchData = async () => {
          const response = await axios.get(
            "http://192.168.0.149:8080/viewcard"
          );
          setFilterDup([
            ...new Set(response.data.map((item) => item.matchName)),
          ]);
          setData(response);
          setLoading(false);
        };
        fetchData();
      }, 3000);
    } catch (error) {}
  }, []);

  console.log(filterDup);

  return (
    <>
      <div className="section">
        {loading ? (
          <LoaderImg />
        ) : (
          <div className="container">
            <div className="card">
              <div className="vennue">{filterDup}</div>
              <div className="score-container">
                {cardData.data?.map((item, id) => (
                  <div key={id} className="scores">
                    <h3>{item.team}</h3>
                    <h4>
                      {item.run}/ {item.wicket}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
