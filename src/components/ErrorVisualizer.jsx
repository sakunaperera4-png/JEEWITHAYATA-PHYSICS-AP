/**
 * Error Visualizer Component
 * Shows visual feedback for zero error calibration
 */
import React, { useMemo } from 'react';
import './ErrorVisualizer.css';

export function ErrorVisualizer({ errorValue = 0 }) {
  const errorState = useMemo(() => {
    if (errorValue > 0.01) {
      return {
        type: 'positive',
        color: '#00F0FF',
        label: `Positive Error: +${errorValue.toFixed(3)} mm`,
        description: 'Scale reads higher than actual'
      };
    } else if (errorValue < -0.01) {
      return {
        type: 'negative',
        color: '#FF003C',
        label: `Negative Error: ${errorValue.toFixed(3)} mm`,
        description: 'Scale reads lower than actual'
      };
    } else {
      return {
        type: 'none',
        color: '#00FF66',
        label: '✅ Perfect Calibration',
        description: 'Zero Error: Perfectly calibrated'
      };
    }
  }, [errorValue]);

  return (
    <div className={`error-visualizer error-visualizer--${errorState.type}`}>
      <div className="error-indicator" style={{ borderColor: errorState.color }}>
        <div
          className="error-dot"
          style={{ backgroundColor: errorState.color }}
        />
      </div>
      <div className="error-text">
        <p className="error-label" style={{ color: errorState.color }}>
          {errorState.label}
        </p>
        <p className="error-description">{errorState.description}</p>
      </div>
    </div>
  );
}

export default ErrorVisualizer;
