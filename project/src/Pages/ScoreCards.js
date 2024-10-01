import React, { useEffect, useState } from "react";
import "../CSS/ScoreCard.css";
import Navbars from "../Components/Navbars";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const ScoreCards = () => {
  const [matchData, setMatchData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.149:8080/newscore/viewnewscore/${params.id}`
        );
        console.log(response.data);
        setMatchData(response.data); // Expecting a single match object
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  // console.log(matchData.team1.battersteam1.map((item, id) => item.name));

  return (
    <div className="scorecard-section">
      <Navbars />
      <div className="scorecard">
        {matchData ? (
          <Card className="text-center">
            <Card.Header>{matchData.matchname}</Card.Header>
            <Card.Body>
              <Card.Title>{matchData.team1.team1name}</Card.Title>
              <Card.Text>
                {matchData.team1.score}/{matchData.team1.wicket} (
                {matchData.team1.overs} overs)
              </Card.Text>
            </Card.Body>
            <h1>V/S</h1>
            <Card.Body>
              <Card.Title>{matchData.team2.team2name}</Card.Title>
              <Card.Text>
                {matchData.team2.score}/{matchData.team2.wicket} (
                {matchData.team2.overs} overs)
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Venue: {matchData.venue}
            </Card.Footer>
            <Card.Footer className="text-muted">
              Date: {matchData.matchdate}
            </Card.Footer>
            <Card.Footer className="text-muted">
              Result: {matchData.result}
            </Card.Footer>
          </Card>
        ) : (
          "No Data"
        )}
      </div>
      <div>
        <Table responsive="sm md  lg xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>overs</th>
              <th>4s</th>
              <th>6s</th>
            </tr>
          </thead>
          <tbody>
            {/* {matchData.team1.battersteam1.map((item, id) => item.name)} */}
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ScoreCards;
