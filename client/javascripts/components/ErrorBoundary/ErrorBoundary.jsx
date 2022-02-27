import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({ error, errorInfo });
  }

  render() {
    if(this.state.errorInfo) {
      return (
        <div>
          <h2>An Error Has Occured</h2>
          <div>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.defaultProps = {
  children: <div/>,
};

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};