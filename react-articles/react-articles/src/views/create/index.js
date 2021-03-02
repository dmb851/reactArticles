import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import ArticleForm from './ArticleForm';

const axios = require('axios').default;

function CreatePage(){
    return(
        <>
        <Container>
            <Col>
            <Row className="justify-content-center">
                Create article
            </Row>

            <Row className="justify-content-center">
                <ArticleForm></ArticleForm>
            </Row>
            
            </Col>

        </Container>
        </>
    );
}

export default CreatePage;