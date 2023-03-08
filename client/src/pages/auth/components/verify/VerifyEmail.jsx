import React, { Component } from "react";
import Loading from "../../../../components/loading/Loading";
import auth from "../../../../firebase";
import AuthResult from "./AuthResult";
import { applyActionCode } from "firebase/auth";

export default class VerifyEmail extends Component {
  state = { validCode: null, verifiedCode: false };

  componentDidMount() {
    // Try to apply the email verification code.

    applyActionCode(auth, this.props.actionCode).then(
      () => {
        // Email address has been verified.
        this.setState({ validCode: true, verifiedCode: true });
        auth.currentUser.reload();
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
      component = (
        <AuthResult
          action={"Email verification"}
          result={"successful."}
          message={"Welcome to Rocketstart!"}
        />
      );
    } else if (verifiedCode && !validCode) {
      component = (
        <AuthResult
          action={"Email verification"}
          result={"unsuccessful."}
          message={
            "Your request to verify your email has expired or the link has already been used. Please try again."
          }
        />
      );
    }

    return component;
  }
}
