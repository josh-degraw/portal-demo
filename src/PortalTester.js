import * as React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, Input, FormGroup, Label } from 'reactstrap'

const MyContext = React.createContext('no value provided');

function ContextUser({ directValue }) {
    return (
        <React.Fragment>
            <MyContext.Consumer>
                {value => <div>Context value: <em>{value}</em></div>}
            </MyContext.Consumer>
            <div>
                Direct value: <em>{directValue}</em>
            </div>
        </React.Fragment>
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
                    <Popover isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle} onClick={() => { }}>
                        <PopoverHeader>Values:</PopoverHeader>
                        <PopoverBody>
                            <ContextUser directValue={this.state.value} />
                        </PopoverBody>
                    </Popover>
                    <div>
                        <h4>It should work right here, since its not a child of the popover</h4>
                        <ContextUser directValue={this.state.value} />
                    </div>
                </MyContext.Provider>
            </React.Fragment>
        );
    }
}