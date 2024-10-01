import React, { useEffect, useState } from "react";
import "../CSS/MatchCards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Matchloader from "../Assets/matchcard loader.gif";

const MatchCards = () => {
  const [matchData, setMatchData] = useState([]);
  // const [acronym, setAcronym] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.149:8080/newscore/viewnewscore`
        );
        console.log(response.data);

        setMatchData(response.data);
        // if(response.data.team1)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="card-section">
      <div className="heading">MATCH</div>
      <div className="card-container">
        <Carousel responsive={responsive}>
          {matchData.length > 0 ? (
            matchData.map((match, id) => (
              <Link to={`/scorecard/${match.id}`} key={id} className="link">
                <div data-aos="zoom-in-up" className="card">
                  <h5 className="match-name">{match.matchname}</h5>
                  <div className="teams">
                    <div className="team-a">
                      <h5>{match.team1.acronyms}</h5>
                      <p>
                        {match.team1.score}/{match.team1.wicket} (
                        {match.team1.overs} overs)
                      </p>
                    </div>
                    <h5 className="versus">V/S</h5>
                    <div className="team-b">
                      <h5>{match.team2.acronyms}</h5>
                      <p>
                        {match.team2.score}/{match.team2.wicket} (
                        {match.team2.overs} overs)
                      </p>
                    </div>
                  </div>
                  <hr />
                  <p className="result">{match.result}</p>
                  <hr />
                  <p className="venue">{match.venue}</p>
                  <p className="date">{match.matchdate}</p>
                </div>
              </Link>
            ))
          ) : (
            <img className="match-loader" src={Matchloader} alt="" />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default MatchCards;
