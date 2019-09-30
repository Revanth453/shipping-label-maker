import React from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Header } from 'semantic-ui-react';

const GetSenderAddress = (props) => {
    const { name, street, city, state, zip } = props.wizardContext.from;
    return (
        <Container>
            <Header as='h2'>Sender's Address</Header>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={name} onChange={(evt) => props.action('name', evt.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Street</label>
                    <input placeholder='Street' value={street} onChange={(evt) => props.action('street', evt.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City' value={city} onChange={(evt) => props.action('city', evt.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input placeholder='State' value={state} onChange={(evt) => props.action('state', evt.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Zip</label>
                    <input placeholder='Zip' value={zip} onChange={(evt) => props.action('zip', evt.target.value)}/>
                </Form.Field>
            </Form>
        </Container>
    )
}

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
}

export default GetSenderAddress;