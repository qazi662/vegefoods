import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import UserLoading from "./UserLoading";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import classnames from "classnames";

import UserContext from "../context/user";
import HomeContext from "../context/home";

import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";

const LoginModal = (props) => {
  const { user, userLogin } = React.useContext(UserContext);
  const { notify, loading, setLoading } = React.useContext(HomeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  let logging = true;

  let isLoginEmpty = !email || !password || !logging || user.token;
  let isSignupEmpty =
    !email || !password || !username || !logging || user.token;

  const handleLoginSumbit = async (e) => {
    setLoading(true);
    logging = false;
    e.preventDefault();
    let response = await loginUser({ email, password });
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      notify(`🚩You are logged in as: ${username}`);
      logging = true;
      setLoading(false);
    } else {
      notify("❌An error occured. Try again");
      logging = true;
      setLoading(false);
    }
  };
  const handleSignupSumbit = async (e) => {
    setLoading(true);
    logging = false;
    e.preventDefault();
    let response = await registerUser({ email, password, username });
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      notify(`🚩You are logged in as: ${username}`);
      logging = true;
      setLoading(false);
      setEmail("");
      setPassword("");
      setUsername("");
    } else {
      notify("❌An error occured. Try again");
      logging = true;
      setLoading(false);
    }
  };

  const { buttonLabel, className, buttonClassName } = props;

  const [modal, setModal] = useState(false);

  const [activeTab, setActiveTab] = useState("1");

  const modalToggle = () => setModal(!modal);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (loading) {
    return <UserLoading />;
  }

  return (
    <div>
      <ToastContainer />
      <div className={buttonClassName} onClick={modalToggle}>
        {buttonLabel}
      </div>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={modalToggle}
        className={className}
      >
        <ModalHeader toggle={modalToggle}>
          <Nav tabs>
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Signup
              </NavLink>
            </NavItem>
          </Nav>
        </ModalHeader>
        <ModalBody>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Form>
                    <FormGroup>
                      <Label for="loginEmail">Email</Label>
                      <Input
                        type="email"
                        name="loginEmail"
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="loginPassword">Password</Label>
                      <Input
                        type="password"
                        name="loginPassword"
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    {isLoginEmpty && (
                      <p className="my-2">Please fill out all the fields</p>
                    )}
                    {!isLoginEmpty && (
                      <Button
                        className="btn btn-primary py-3 px-5"
                        onClick={handleLoginSumbit}
                      >
                        Login
                      </Button>
                    )}
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Form>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="signupEmail">Email</Label>
                      <Input
                        type="email"
                        name="signupEmail"
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="signupPassword">Password</Label>
                      <Input
                        type="password"
                        name="signupPassword"
                        id="signupPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    {isSignupEmpty && (
                      <p className="my-2">Please fill out all the fields</p>
                    )}
                    {!isSignupEmpty && (
                      <Button
                        className="btn btn-primary py-3 px-5"
                        onClick={handleSignupSumbit}
                      >
                        Signup
                      </Button>
                    )}
                  </Form>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
