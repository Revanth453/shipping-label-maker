import React from 'react';
import { Form, Container, Header } from 'semantic-ui-react';

const GetReceiverAddress = () => {
    return (
        <Container>
            <Header as='h2'>Receiver's Address</Header>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Street</label>
                    <input placeholder='Street' />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City' />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input placeholder='State' />
                </Form.Field>
                <Form.Field>
                    <label>Zip</label>
                    <input placeholder='Zip' />
                </Form.Field>
            </Form>
        </Container>
    )
}

export default GetReceiverAddress;