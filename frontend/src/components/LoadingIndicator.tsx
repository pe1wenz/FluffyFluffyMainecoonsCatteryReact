// LoadingIndicator.js
import React from 'react';

const LoadingIndicator = () => {
    return (
        <div style={
            { textAlign: 'center',
                padding: '20px',
                height: '100%',
            }
        }>
            <p>Loading the page...</p>
            <p>This may take a moment, please wait.</p>
            {/* You can customize these messages as needed */}
        </div>
    );
};

export default LoadingIndicator;
