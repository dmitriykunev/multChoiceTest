import DataTransaction from "./dataTransaction";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state;
};

class IdentityValidation {
  token(payload) {}
}

export default connect(mapStateToProps)(new IdentityValidation());
