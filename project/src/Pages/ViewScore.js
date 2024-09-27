import React, { useEffect, useState } from "react";
import "../CSS/ViewScore.css";
import axios from "axios";

function ViewScore() {
  const [batdata, setBatData] = useState("");
  const [bowldata, setBowlData] = useState("");
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const response = await axios.get("http://192.168.0.192:8080/all");
        console.log(response);
        setBatData(response);
      };
      fetchdata();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchdata = async () => {
        const response = await axios.get(
          "http://192.168.0.56:8080/bowler/getall"
        );
        console.log(response);
        setBowlData(response);
      };
      fetchdata();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="score-container">
      <div className="innings-caption">
        <span>Australia Innings</span>
        <span className="score">304/7</span>
      </div>

      <table className="score-table">
        <thead>
          <tr>
            <th>Batter</th>
            <th>R</th>
            <th>B</th>
            <th>4s</th>
            <th>6s</th>
          </tr>
        </thead>
        <tbody>
          {batdata.data?.map((item, id) => (
            <tr key={id}>
              <td>{item.pname}</td>
              <td>{item.score}</td>
              <td>{item.balls}</td>
              <td>{item.fours}</td>
              <td>{item.sixes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      

      <table className="score-table">
        <thead>
          <tr>
            <th>Bowler</th>
            <th>O</th>
            <th>R</th>
            <th>W</th>
            <th>NB</th>
            <th>WD</th>
          </tr>
        </thead>
        <tbody>
          {bowldata.data?.map((item, id) => (
            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.overs}</td>
              <td>{item.runs}</td>
              <td>{item.wicket}</td>
              <td>{item.noball}</td>
              <td>{item.wide}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewScore;
