import { bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import {login, signup} from '../actions'
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


const mapDispatchToProps = dispatch => bindActionCreators ({
  signup,
  login, 
},dispatch
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);

