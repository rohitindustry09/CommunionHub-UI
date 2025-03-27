import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './FooterTab.css'

const FooterTab = () => {
  return (
    <>
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/terms" className="text-light mx-2">
            Terms & Conditions
          </a>
          <span className="text-muted"> | </span>
          <a href="/privacy" className="text-light mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default FooterTab