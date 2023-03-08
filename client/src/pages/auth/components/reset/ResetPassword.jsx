import React, { Component } from "react";
import Loading from "../../../../components/loading/Loading";
import auth from "../../../../firebase";
import AuthResult from "../verify/AuthResult";
import { verifyPasswordResetCode } from "firebase/auth";
import PasswordResult from "./PasswordResult";

export default class ResetPassword extends Component {
  state = { validCode: null, verifiedCode: false };

  componentDidMount() {
    // Try to apply the email verification code.

    verifyPasswordResetCode(auth, this.props.actionCode).then(
      () => {
        // Email address has been verified.
        this.setState({ validCode: true, verifiedCode: true });
      },
      (error) => {
        // Code is invalid or expired. Ask the user to verify their email address
        this.setState({
          error: error.message,
          validCode: false,
          verifiedCode: true,
        });
      }
    );
  }

  render() {
    const { validCode, verifiedCode } = this.state;

    let component;
    if (!verifiedCode) {
      component = <Loading />;
    } else if (verifiedCode && validCode) {
      component = <PasswordResult actionCode={this.props.actionCode} />;
    } else if (verifiedCode && !validCode) {
      component = (
        <AuthResult
          action={"Password reset"}
          result={"unsuccessful."}
          message={
            "Your request to reset your password has expired or the link has already been used. Please try again."
          }
        />
      );
    }

    return component;
  }
}
