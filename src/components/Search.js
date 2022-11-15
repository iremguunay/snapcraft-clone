import React from "react";
import { SearchBox, Button, Row, Col } from "@canonical/react-components";
import "./styles.css";

const Search = () => {
  return (
    <div className="search-area">
      <div className="u-fixed-width">
        <Row>
          <Col size={12}>
            <h2>The app store for Linux</h2>
          </Col>
          <Col medium={10} size={6}>
            <SearchBox placeholder="Search thousands of snaps" />
          </Col>
          <Col medium={10} size={2}>
            <Button className="search-button" appearance="positive">
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Search;
