import React, { Fragment } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // componentDidCatch(error, info) {
    //     // You can also log the error to an error reporting service
    //     logErrorToMyService(error, info);
    // }

    render() {

        /* eslint-disable */
        const { hasError, error } = this.state;
        const { children } = this.props;
        /* eslint-enable */

        return hasError ? (
            <Fragment>
                <h1>Something went wrong.</h1>
                <p>{error}</p>
            </Fragment>
        ) : children;

    }
}

export default ErrorBoundary;