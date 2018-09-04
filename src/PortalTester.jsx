import * as React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, Input, FormGroup, Label } from 'reactstrap'

const MyContext = React.createContext('no value provided');

function ContextUser() {
    return (

        <MyContext.Consumer>
            {value => <span>Context value: <em>{value}</em></span>}
        </MyContext.Consumer>

    )
}

export default class PortalTester extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            value: 'no value provided',
        };
    }

    toggle() {
        this.setState({
            popoverOpen: true // Only true to keep it open for this test
        });
    }

    render() {
        return (
            <React.Fragment>
                <FormGroup>
                    <Label for="#myInput">Changing the text in the input field should update the popover, but it currently doesn't work.</Label>
                    <Input id="myInput" value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
                    <Button id="Popover1" onClick={this.toggle}>
                        Launch Popover
                    </Button>
                </FormGroup>
                <MyContext.Provider value={this.state.value}>

                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle} onClick={() => { }}>
                        <PopoverHeader>Values:</PopoverHeader>
                        <PopoverBody>
                            <ContextUser />
                            <div>
                                Direct value: <em>{this.state.value}</em>
                            </div>
                        </PopoverBody>
                    </Popover>
                </MyContext.Provider>
            </React.Fragment>
        );
    }
}