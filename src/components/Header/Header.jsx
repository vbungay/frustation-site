import React from 'react'
import './Header.scss'
import { TbMenu } from 'react-icons/tb'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <span className="loc">
            Somewhere, Earth
          </span>
          <span className="logo">
            Thy Art's Embers
          </span>
          <span className="icon">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </span>
        </div>
      </div>
    </>
  )
}

export default Header