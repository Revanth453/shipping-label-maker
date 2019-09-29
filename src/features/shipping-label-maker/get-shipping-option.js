import React from 'react';
import { Header, Container, Form, Dropdown } from 'semantic-ui-react';

const GetShippingOption = () => {
    return (
        <Container>
            <Header as='h2'>How do you want to ship the shipment?</Header>
            <Form>
                <Dropdown placeholder='Shipment Options' search selection options={[{
                    key: 'ground',
                    text: 'Ground',
                    value: 1
                },
                {
                    key: 'priority',
                    text: 'Priprity',
                    value: 2
                }]} />
            </Form>
        </Container>
    )
}

export default GetShippingOption;