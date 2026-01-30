import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
      {children}
    </div>
    );
};

export default Container;