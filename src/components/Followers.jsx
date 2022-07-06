import React from "react";
import Paginate from "../components/Paginate";
import CardFollowers from "../components/CardFollowers";
import loadingGif from "../assets/loading.gif";
import { useState } from "react";
import { Row, Container } from "react-bootstrap";

const Followers = ({ followers }) => {
  const { loading, followerList } = followers;
  const [followersPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastFollower = currentPage * followersPerPage;
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage;
  const currentFollowers = followerList.slice(
    indexOfFirstFollower,
    indexOfLastFollower
  );
  const totalPages = followerList.length / followersPerPage;

  return (
    <div>
      {loading ? (
        <div>
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <div>
          <Container>
            <Row xs={2} md={3} lg={4}>
              {currentFollowers?.map((follower, index) => (
                <div key={index}>
                  <CardFollowers follower={follower} />
                </div>
              ))}
            </Row>
          </Container>
          <div>
            <Paginate pages={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
