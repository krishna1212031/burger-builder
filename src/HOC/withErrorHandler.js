import { Component } from "react";
import Modal from "../Components/UI/Modal/Modal";
import Aux from "./Hoc";

const withErrorHandler = (WrappedComponent, props) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      
      props.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request
      });
      props.interceptors.response.use(responce => responce , error => {
        this.setState({ error: error });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
