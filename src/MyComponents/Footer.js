import React from 'react'
let footerStyle = {
position: 'relative',
width: '100%',
top: '100vh'
}
export const Footer = () => {
  return (
    <div className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyroght &copy; Amitkumar.com</p>
    </div>
  )
}