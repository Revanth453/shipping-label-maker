import React from 'react';
import { Container, Header, Form } from 'semantic-ui-react';

const GetWeight = (props) => {
    const { weight } = props.wizardContext;
    return (
        <Container>
            <Header as='h2'>Weight of the shipment</Header>
            <Form>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Enter weight of the shipment' value={weight} onChange={(evt) => props.action(evt.target.value)}/>
                </Form.Field>
            </Form>
        </Container>
    )
}

export default GetWeight;