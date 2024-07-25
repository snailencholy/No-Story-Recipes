import { useState } from 'react';
import { Flex, Layout, Button, Modal, Input } from 'antd';
import md5 from 'md5';

const { Header, Content } = Layout;

const SplashPage = (props) => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loginText, setLoginText] = useState("Log in");
  const [signupText, setSignupText] = useState("Click Here to Sign Up");
  const [emailInput, setEmailInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [pwAddonBeforeText, setPwAddonBeforeText] = useState("16 characters, alpha-numeric, special-characters");
  const [pwError, setPwError] = useState("");
  const [emailAddonBeforeText, setEmailAddonBeforeText] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignup = () => {
    setSignup(!signup)
    if (signup) {
      console.log(signup)
      setLoginText("Log in");
      setSignupText("Click Here to Sign up");
    }
    else {
      setLoginText("Sign up");
      setSignupText("Click Here to Log in");
    }
    setEmailInput("");
    setEmailAddonBeforeText("");
    setEmailError("");
    setPasswordInput("");
    setPwAddonBeforeText("16 characters, alpha-numeric, special-characters");
    setPwError("");
    setUserNameInput("");
  }


  const handleOk = () => {
    let emailHash;
    let userHash;
    let passwordHash;
    if (signup) {
      if (emailInput !== undefined && userNameInput !== undefined && passwordInput !== undefined) {
        let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let pwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{16,}$/;
        if (!(emailInput.match(emailPattern) && passwordInput.match(pwPattern))) {
          if (!emailInput.match(emailPattern)) {
            setEmailAddonBeforeText("Not a valid email address");
            setEmailError("error");
          }

          if (!passwordInput.match(pwPattern)) {
            setPwAddonBeforeText("Invalid Password.");
            setPwError("error");
          }
        } else {
          emailHash = md5(emailInput);
          userHash = md5(userNameInput);
          passwordHash = md5(passwordInput);
          setEmailInput("");
          setEmailAddonBeforeText("");
          setEmailError("");
          setPasswordInput("");
          setPwAddonBeforeText("16 characters, alpha-numeric, special-characters");
          setPwError("");
          setUserNameInput("");
        }
      }
    }
    setUserNameInput("");
    setPasswordInput("");
    //props.setLoggedIn(!props.loggedIn)
    setOpen(false);

  }

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Dosis',
            fontWeight: "bold",
            fontSize: "40px"
          }}
        >
          NO STORY RECIPES
        </Header>
        <Content
          style={{
            padding: "2.5%",
            justifyContent: "center",
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'justify',
            color: '#fff',
            backgroundColor: '#000c17',
            fontSize: '24px',
            fontFamily: 'Dosis',
          }}
        >
          <div
            style={{
              margin: "2.5%"
            }}
          >
            When I was a young lad on my Gam-gam's farm in rural mudhutsville I looked at the sunset while eating a delicious flan...
          </div>
          <div
            style={{
              margin: "2.5%"
            }}
          >
            No one want's to read a novel while they're trying to cook dinner or bake bread. Use this as a place to store and display your recipes.
          </div>
          <div
            style={{
              margin: "2.5%"
            }}
          >
            If you do want to put a novel in the directions, however, that's on you.
          </div>
          <Button
            block
            style={{
              backgroundColor: '#001529',
              color: "#fff"
            }}
            onClick={() => setOpen(!open)}
          >
            Login/Signup
          </Button>
        </Content>
      </Layout>
      <Modal
        title="SIGN UP OR LOG IN"
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
        okText={loginText}
      >
        <p>Log in with your account or sign up for one here</p>
        <Button type="primary" style={{ marginBottom: "12px" }} onClick={handleSignup}>{signupText}</Button>
        {
          signup
            ?
            <Flex vertical gap={12}>
              <Input
                id="emailInput"
                addonBefore={emailAddonBeforeText}
                status={emailError}
                placeholder="email"
                value={emailInput}
                onChange={e => { setEmailInput(e.target.value) }}
              />
              <Input
                id="usernameInput"
                placeholder="Username"
                value={userNameInput}
                onChange={e => { setUserNameInput(e.target.value) }}
              />
              <Input
                type="password"
                id="pwInput"
                addonBefore={pwAddonBeforeText}
                status={pwError}
                placeholder="Password"
                value={passwordInput}
                onChange={e => { setPasswordInput(e.target.value) }}
              />
            </Flex>
            :
            <Flex vertical gap={12}>
              <Input
                id="usernameInputLogin"
                placeholder="Username"
                value={userNameInput}
                onChange={e => { setUserNameInput(e.target.value) }}
              />
              <Input
                type="password"
                id="pwInputLogin"
                placeholder="Password"
                value={passwordInput}
                onChange={e => { setPasswordInput(e.target.value) }}
              />
            </Flex>
        }
      </Modal>
    </>
  )
}

export default SplashPage;