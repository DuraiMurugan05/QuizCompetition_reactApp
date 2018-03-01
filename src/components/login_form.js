import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            password:"",
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit()
    {
        this.validateUserName()
        const {redirect } = this.state;
        this.setState({ redirect: true })
    }

    validateUserName() {
        // assessment json array index is assessment_id
        if (this.state.userName.length > 20) {

            } else {
                this.setState({
                    userName: "Darren"
                })
            }

        this.props.onUsernameSubmit(this.state.userName);

        }
        // else redirect to error page

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/assessment'  userName={this.state.userName}/>;
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({userName:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );

        const style = {
            margin: 15,
        };
    }

}

export default Login;