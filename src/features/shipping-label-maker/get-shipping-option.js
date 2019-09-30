import React from 'react';
import { Header, Container, Form, Dropdown } from 'semantic-ui-react';

const GetShippingOption = (props) => {
    const { shippingOption } = props.wizardContext;
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
                    text: 'Priority',
                    value: 2
                }]}
                value={shippingOption}
                onChange={(evt, data) => props.action(data.value)} />
            </Form>
        </Container>
    )
}

export default GetShippingOption;