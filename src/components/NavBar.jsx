import React, { useState } from 'react';
import { Container, Modal, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../assets/css/App.module.scss";

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar expand="md" id={styles.navbar} className="fixed-top mt-3 pb-4" collapseOnSelect={false}>
        <Container>
          <div className={styles.burgerIcon} onClick={handleToggleModal}>
            <div className={showModal ? styles.burgerLineActive : styles.burgerLine} />
            <div className={showModal ? styles.burgerLineActive : styles.burgerLine} />
            <div className={showModal ? styles.burgerLineActive : styles.burgerLine} />
          </div>
          <Navbar.Brand href="#home" className="order-1 order-md-2 ms-4 pb-2">
            <img src="/images/logo.svg" alt="logo sneakers.com" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="order-2">
            <Nav className="me-auto pt-1">
              <Nav.Link className="me-3" href="#link1">Collections</Nav.Link>
              <Nav.Link className="me-3" href="#link2">Men</Nav.Link>
              <Nav.Link className="me-3" href="#link3">Women</Nav.Link>
              <Nav.Link className="me-3" href="#link4">About</Nav.Link>
              <Nav.Link className="me-3" href="#link5">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto order-3 order-md-4 d-flex flex-row">
            <Nav.Link href="#link6" className="d-flex align-items-center me-4">
              <div>
                <svg
                  className={styles.cartIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
                </svg>
              </div>
            </Nav.Link>
            <Nav.Link href="#link7" className="d-flex align-items-center me-4">
              <img src="/images/image-avatar.png" alt="customer avatar" className={styles.avatar} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* {showModal && (
        <div className={styles.customModal}>
          <div className={styles.customModalContent}>
            <nav className="flex-column">
              <a href="#link1">Collections</a>
              <a href="#link2">Men</a>
              <a href="#link3">Women</a>
              <a href="#link4">About</a>
              <a href="#link5">Contact</a>
            </nav>
          </div>
        </div>
      )} */}

      <Modal 
        show={showModal} 
        dialogClassName={styles.customModal}
        onHide={handleToggleModal}
        fullscreen={fullscreen}
        contentClassName={styles.customModalContent}
      >
        <Modal.Header closeButton={false} className={styles.customHeader}>
          <Modal.Title>
            <button
              className="btn-close"
              aria-label="Close"
              onClick={handleToggleModal}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav className={`flex-column ${styles.navLinks}`}>
            <Nav.Link href="#link1">Collections</Nav.Link>
            <Nav.Link href="#link2">Men</Nav.Link>
            <Nav.Link href="#link3">Women</Nav.Link>
            <Nav.Link href="#link4">About</Nav.Link>
            <Nav.Link href="#link5">Contact</Nav.Link>
          </Nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
