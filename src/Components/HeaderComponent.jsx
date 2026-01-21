import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <a
            className="navbar-brand navbar-heading-style"
            href="https://github.com/vanamvinay04/productInventorySystem"
          >
            Product Inventory System
          </a>
        </nav>
      </header>
    </div>
  );
};
export default HeaderComponent;
