import React, { useState } from 'react';
import { Container, Modal, Navbar, Nav } from 'react-bootstrap';
import styles from "../assets/css/App.module.scss";
import ShoppingCart from '../components/ShoppingCart'

function Navigation() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  

  const handleToggleFirstModal = () => {
    setShowFirstModal(!showFirstModal);
  };

  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
  };


  const handleToggleSecondModal = () => {
    setShowSecondModal(!showSecondModal);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };
  

  return (
    <>
      <Navbar expand="md" id={styles.navbar} className="fixed-top mt-3 pb-4" collapseOnSelect={false}>
        <Container>
          <div onClick={handleToggleFirstModal} className={`${styles.burgerIcon}`}>
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
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
            <Nav.Link 
              href="#link6" 
              className={`d-flex align-items-center me-4 ${styles.cartIcon}`}
              onMouseEnter={handleToggleSecondModal}
              onMouseLeave={handleCloseSecondModal}
            >
              {/* SECOND MODAL */}
              <Modal 
                show={showSecondModal} 
                onHide={handleCloseSecondModal} 
                dialogClassName={styles.customSecondModal}
                contentClassName={styles.customSecondModalContent}

              >
                <Modal.Header>
                  <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className='pt-5 pb-5 text-center'>Your cart is empty.</p>
                  <div className='text-center'>
                    <span>quantity</span>
                    <span>total price</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></span>
                  </div>
                </Modal.Body>
              </Modal>
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
      {/* FIRST MODAL */}
      <Modal 
        show={showFirstModal} 
        dialogClassName={styles.customModal}
        onHide={handleCloseFirstModal}
        fullscreen={fullscreen}
        contentClassName={styles.customModalContent}
      >
        <Modal.Header closeButton={false} className={styles.customHeader}>
          <Modal.Title>
            <button
              className="btn-close"
              aria-label="Close"
              onClick={handleToggleFirstModal}
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