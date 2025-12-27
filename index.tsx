import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // log to console and keep the error for display
    // eslint-disable-next-line no-console
    console.error('Unhandled error caught by ErrorBoundary:', error, info);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#1a0505', color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ maxWidth: 980 }}>
            <h1 style={{ margin: 0, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto', fontSize: 22 }}>An error occurred</h1>
            <p style={{ color: '#FFF8E7' }}>Open the browser console for details. Error message:</p>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#FFF8E7', background: 'rgba(0,0,0,0.4)', padding: 12, borderRadius: 8 }}>
              {String(this.state.error ?? 'Unknown error')}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Show runtime errors and unhandled rejections in a visible overlay (helps debugging blank UI).
window.addEventListener('error', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Runtime error:', ev.error ?? ev.message);
});
window.addEventListener('unhandledrejection', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled promise rejection:', ev.reason);
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
