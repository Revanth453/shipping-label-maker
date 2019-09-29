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
                shippingOption: 1
            }
        }
    }
    onSenderAddressChange() {
        console.log('changed')
    }
    render () {
        return (
            <Wizard 
                header="Shipping Label Maker"
                wizardContext={this.state.shippingInfo}
                steps={[<GetSenderAddress onAction={this.onSenderAddressChange}/>, <GetReceiverAddress />, <GetWeight />, <GetShippingOption />, <Confirm />]}
            />
        )
    }
}

export default ShippingLabelMaker;