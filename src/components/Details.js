// import colorSharp from "../assets/img/color-sharp.png"
import Container from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export const Details = () => {

  return (
    <Card>
      <Stack gap={2}>

      <Card style={{ width: '60%' }}>

      <Card.Body>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );



        {/* <div className="bg-light border">First item</div> */}
        {/* <div className="bg-light border">Second item</div> */}
        <div className="bg-light border">Third item</div>
      </Stack>
    </Card>
  );
}
