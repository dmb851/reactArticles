import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import {useParams} from 'react-router-dom';

function DetailsPage(){

    let {id} = useParams();
    return(
        <>
        <Container>
            <Col>
            <Row>
                You are viewing Article id : {id};
            </Row>
            
            </Col>

        </Container>
        </>
    );
}

export default DetailsPage;
