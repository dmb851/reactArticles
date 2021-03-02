import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const axios = require('axios').default;

function LoginPage(){
    return(
        <>
        <Container>
            <Col>
            <Row>
                Login here

                <button onClick={hitBackend}>Add to Database</button>

            </Row>
            
            </Col>

        </Container>
        </>
    );
}

const hitBackend = () => {
    axios.get('/insert')
    .then((response) => {
    console.log(response.data)
    })
}

export default LoginPage;