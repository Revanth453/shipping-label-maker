import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Header } from 'semantic-ui-react';

class GetSenderAddress extends Component {
    render() {
        return (
            <Container>
                <Header as='h2'>Sender's Address</Header>
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
}

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
}

export default GetSenderAddress;