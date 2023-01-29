import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <div className="image-container">
        <img src="" alt="" className="image" />
        {/* 🎬 Entertainment Hub 🎥 */}
      </div>
    </span>
  )
}

export default Header
