import React, { Component } from 'react'
import Wizard from '../../core/components/wizard/wizard';
import GetSenderAddress from './get-sender-address';
import GetWeight from './get-weight';
import GetReceiverAddress from './get-receiver-address';
import GetShippingOption from './get-shipping-option';
import Confirm from './confirm';

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingInfo: {
                from: {
                    name: "John Smith", 
                    street: "131 Dartmouth St", 
                    city: "Boston",
                    state: "MA", 
                    zip: "02116"
                },
                to: {
                    name: "Linda Jackson", 
                    street: "40 Fulton St", 
                    city: "New York", 
                    state: "NY",
                    zip: "10038"
                },
                weight: 2,
                shippingOption: 1,
                shippingRate: 0.40
            }
        }
        this.onSenderAddressChange = this.onSenderAddressChange.bind(this);
        this.onReceiverAddressChange = this.onReceiverAddressChange.bind(this);
        this.onWeightChange = this.onWeightChange.bind(this);
        this.onShippingOptionChange = this.onShippingOptionChange.bind(this);
    }
    onSenderAddressChange(key, value) {
        this.setState({ shippingInfo: { ...this.state.shippingInfo, from: { ...this.state.shippingInfo.from, [key]: value }}})
    }
    onReceiverAddressChange(key, value) {
        this.setState({ shippingInfo: { ...this.state.shippingInfo, to: { ...this.state.shippingInfo.to, [key]: value }}})
    }
    onWeightChange(value) {
        this.setState({ shippingInfo: { ...this.state.shippingInfo, weight: value }})
    }
    onShippingOptionChange(value) {
        this.setState({ shippingInfo: { ...this.state.shippingInfo, shippingOption: value }})
    }
    render () {
        return (
            <Wizard 
                header="Shipping Label Maker"
                wizardContext={this.state.shippingInfo}
                steps={[<GetSenderAddress wizardContext={this.state.shippingInfo} action={this.onSenderAddressChange}/>, <GetReceiverAddress wizardContext={this.state.shippingInfo} action={this.onReceiverAddressChange}/>, <GetWeight wizardContext={this.state.shippingInfo} action={this.onWeightChange}/>, <GetShippingOption wizardContext={this.state.shippingInfo} action={this.onShippingOptionChange}/>, <Confirm wizardContext={this.state.shippingInfo}/>]}
            />
        )
    }
}

export default ShippingLabelMaker;