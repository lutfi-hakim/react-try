import React, { useState } from "react";
import "./index.scss";
function Navbar() {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">react nav</div>
        <ul
          className="nav-links"
          style={{
            transform: openSide ? "translateX(0px)" : "translateX(-800px)",
          }}
        >
          <li>
            <a href="">kelas</a>
          </li>
          <li>
            <a href="">mitra</a>
          </li>
          <li>
            <a href="">tentang</a>
          </li>
          <li>
            <a href="">keranjang</a>
          </li>
          <li>
            <a href="">a</a>
          </li>
          <li>
            <a href="">masuk</a>
          </li>
          <li>
            <a href="">daftar</a>
          </li>
        </ul>
        <i
          onClick={() => setOpenSide(!openSide)}
          className="fas fa-bars burger"
        ></i>
      </nav>
    </div>
  );
}

export default Navbar;
