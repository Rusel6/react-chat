import React from 'react';
import { withStyles } from 'material-ui/styles';
import Message from './Message';



const styles = theme => ({
  wrapper: {
    overflowY: 'auto',
    height: `calc(100% - 88px)`,
    width: '100%',
    paddingBottom: theme.spacing.unit * 11,

  },
});

class ChatMeassages extends React.Component {

  componentDidMount() {
    this.scrollDownHistory()
  }
  componentDidUpdate() {
    this.scrollDownHistory()
  }

  scrollDownHistory() {
    const wrapper = this.refs.wrapper;
    if (wrapper) {
      wrapper.scrollTop = wrapper.scrollHeight
    }
  }
  render() {
    const {classes, messages } = this.props;
    return (
      <div className={classes.wrapper} ref="wrapper">
        {
          messages && messages.map((message, index) => (
          <Message key={index} {...message}></Message>
          ))
        }
      </div>
    )   
  }

}



export default withStyles(styles)(ChatMeassages);
