import { Row, Col, Container } from "react-bootstrap/";

import FetchHomepage from "./FetchHomepage";
import Video from "./Video";
import Myinserzione from "./Myinserzione";

const MyMainHomepage = () => {
  return (
    <>
      <Container>
        <Myinserzione />
        <FetchHomepage />
      </Container>
      <Video />
    </>
  );
};
export default MyMainHomepage;
