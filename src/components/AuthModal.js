import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

const AuthModal = (props) => {
  const {
    className,
    setToken
  } = props;

  const [modal, setModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true)

  const toggle = () => setModal(!modal);
  const toggleForm = () => setShowLogin(!showLogin); // toggle between loginForm and signUpForm

  return (
    <>
      <p onClick={toggle} style={{cursor:'pointer',margin:0}}>Login</p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {
          showLogin ?
          <LoginForm toggle={toggle} toggleForm={toggleForm} setToken={setToken}/>
          :
          <SignUpForm toggle={toggle} toggleForm={toggleForm}/>
        }
      </Modal>
    </>
  );
}

export default AuthModal;