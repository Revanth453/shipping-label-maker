import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Container, Header } from 'semantic-ui-react';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }
    onPrevClick() {
        this.setState({ activeStep: this.state.activeStep - 1 })
    }
    onNextClick() {
        this.setState({ activeStep: this.state.activeStep + 1 })
    }
    render () {
        const { activeStep } = this.state;
        const { header, steps } = this.props;
        return (
            <Container>
                <Header as='h1'>{header}</Header> 
                {
                    steps[activeStep]
                }
                { activeStep !== 0 && <Button onClick={this.onPrevClick}>Prev</Button> }
                { activeStep !== steps.length-1 && <Button onClick={this.onNextClick}>Next</Button>}
                {
                    activeStep === steps.length-1 && <Button>Complete</Button>
                }
            </Container>
        )
    }
}

Wizard.propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
}

export default Wizard;