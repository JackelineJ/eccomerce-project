import ItemCount from '../ItemCount/ItemCount';
import Data from '../../data.json';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Item.css';

const Item = () => {
    return (
        <div>{
            Data && Data.map((data) => {
                return(
                    <Container>
                        <Row>
                            <Col> 
                                <Card key={data.id} style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={data.thumbnailURL} />
                                <Card.Body>
                                    <Card.Title className="titleStyle">{data.title}</Card.Title>
                                    <Card.Text>${data.price}</Card.Text>
                                    <Card.Text>{data.description}</Card.Text>
                                    <ItemCount />
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )
            })
        }</div>
    )
}

export default Item