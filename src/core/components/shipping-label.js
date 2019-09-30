import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption, shippingRate } = props.wizardContext;
    return (
        <Container>
            <Header as='h2'>Shipping Label</Header>
            <Header as='h4'>From address:</Header>
                <label>Name: {from.name}</label>
                <label>Street: {from.street}</label>
                <label>City: {from.city}</label>
                <label>State: {from.state}</label>
                <label>Zip: {from.zip}</label>
            <Header as='h4'>To address:</Header>
                <label>Name: {to.name}</label>
                <label>Street: {to.street}</label>
                <label>City: {to.city}</label>
                <label>State: {to.state}</label>
                <label>Zip: {to.zip}</label>
            <br />
            <label>Weight: {weight}</label>
            <label>Shipping Cost: {weight * shippingRate * (shippingOption === 1 ? 1 : 1.5)}</label>
        </Container>
    )
}

export default ShippingLabel;