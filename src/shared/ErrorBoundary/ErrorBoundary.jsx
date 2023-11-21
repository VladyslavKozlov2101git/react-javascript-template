import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static propTypes = {
    children: PropTypes.node,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.root}>
          <h2 className={styles.title}>Something went wrong!</h2>

          <details className={styles.details}>
            <summary className={styles.summary}>Details</summary>
            <div className={styles.desc}>
              <div className={styles.descInner}>
                Error
                <br />
                Error
              </div>
            </div>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
