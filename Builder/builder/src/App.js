import { Component, React } from "react";
import MainAdminDashboard from "./components/mainAdminDashboard";
import "./index.css";
import { connect } from "react-redux";
import DataTransaction from "./components/dataTransaction";

const mapStateToProps = state => {
  return state;
};

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const payload = {
      username: username,
      token: token
    };

    const validate = async payload => {
      console.log("before");
      try {
        return await DataTransaction.token(payload);
      } catch (e) {
        console.log("caught an error");
        this.props.history.push("/whoTheFuckAreYou");
      }
    };
    const data = validate(payload);
    this.props.dispatch({
      type: "INITIATE_APPLICATION",
      data
    });
  }
  // userValidationCheck = () => {
  //   if (payload) {
  //     // console.log(validate);
  //     this.props.dispatch({
  //       type: "INITIATE_APPLICATION",
  //       payload
  //     });

  //     this.props.history.push("/");
  //     return ;
  //   } else {
  //     this.props.history.push("/whoTheFuckAreYou");
  //   }
  // };

  render() {
    return (
      <div>
        <MainAdminDashboard />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
