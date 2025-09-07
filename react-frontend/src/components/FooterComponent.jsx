import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="footer" >
           <div
  style={{
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center", // vertical center
    
  }}
>
  <span className="text-muted">All Rights Reserved</span>
</div>
        </footer>
    );
};

export default FooterComponent;
