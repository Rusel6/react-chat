import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';



const styles = theme => ({ 
  textField: {
    marginTop: 0,
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: 0,
    width: '100%'
  },
});
class Signup extends React.Component {

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  }

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
  }

  handleInputChange = (event) => {

    
    event.persist();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }



  handleSubmit = (event) => {

    event.preventDefault();

    if (!this.validate()) {
      return;
    } 

    const { username, password } = this.state;
    console.log( `SignUp page -  ${username.value} ${password.value}`)
   this.props.onSubmit(username.value, password.value);
  }



  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={classes.messageInputWrapper} >
     
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username ..."
          type="text"
          margin="normal"
          name="username"
          autoComplete="username"
          value={username.value}        
          className={classes.textField}
          onChange={this.handleInputChange}
          error={!username.isValid}

        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password ..."
          type="password"
          margin="normal"
          name="password"
          autoComplete="password"
          value={password.value}        
          className={classes.textField}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
         <TextField
          required
          fullWidth
          label="Confirm Password"
          placeholder="Type your password ..."
          type="password"
          name="repeatedPassword"
          margin="normal"
          autoComplete="repeatedPassword"
          value={repeatedPassword.value}         
          className={classes.textField}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button 
          fullWidth
          variant="raised" 
          color="primary" 
          type="submit"
          className={classes.button}
        >
          Sign Up
        </Button>
        </form>
    )
  }
}
export default withStyles(styles)(Signup);
