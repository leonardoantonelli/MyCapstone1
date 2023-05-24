import React, { useState } from "react";
import url from "../../assets/json.json";
import ShoesCard from "./Shoescard";
import { Button, Col, Form, Row } from "react-bootstrap";

const Searchbar = () => {
  const [search, setSearch] = useState("nike");
  console.log(search);

  return (
    <>
      <Form.Group>
        <Form.Label>Search a book</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search here"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
      </Form.Group>
      <Row>
        {this.props.shoes
          .filter((s) => s.title.toLowerCase().includes(this.state.searchQuery))
          .map((sh) => (
            <Col xs={12} md={4} key={sh.Id}>
              <ShoesCard />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Searchbar;
