import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';



export class HomePage extends React.PureComponent {
    render() {
        const { t } = this.props;

        return (
            <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h3>Welcome to Home Page</h3>
                    </Col>
                </Row>

                <Row>
                    {/* <TotalSubscribers />
                    <TotalItems /> */}

                </Row>

                <Row>
                    {/* <TotalItemsTable/> */}
                </Row>

            </Container>
        )
    }
}