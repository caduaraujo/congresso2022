import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <h1>{'Congresso Nacional'}</h1>
          <h2>{'Gen ID: A nossa identidade hoje'}</h2>
        </Col>
      </Row>
    </Container>
    </section>
  )
}