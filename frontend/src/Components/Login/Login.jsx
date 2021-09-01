import React, { useState } from "react";
import { authenticateSignup } from "../../Services/api";
import { authenticateLogin } from "../../Services/api";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = ({ open, setOpen, setAccount }) => {
  const classes = useStyles();
  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState(false);

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      alert("Invalid login details");
      console.log("Invalid login");
      showError(true);
    } else {
      showError(false);
      handleClose();
      setAccount(login.username);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
          <Box style={{ display: "flex" }}>
            <Box className={classes.image}>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Box>
            {account.view === "login" ? (
              <Box className={classes.login}>
                <TextField
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  label="Enter Username"
                />
                {error && (
                  <Typography className={classes.error}>
                    Please enter valid Username or Password
                  </Typography>
                )}
                <TextField
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  label="Enter Password"
                />
                <Typography className={classes.text}>
                  By continuing, you agree to Flipkart's Terms of Use and
                  Privacy Policy.
                </Typography>
                <Button
                  className={classes.loginBtn}
                  onClick={() => loginUser()}
                >
                  Login
                </Button>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <Button variant="contained" className={classes.requestBtn}>
                  Request OTP
                </Button>
                <Typography
                  className={classes.createText}
                  onClick={() => toggleUserAccount()}
                >
                  New to Flipkart? Create an account
                </Typography>
              </Box>
            ) : (
              <Box className={classes.login}>
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="firstname"
                  label="Enter Firstname"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="lastname"
                  label="Enter Lastname"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="username"
                  label="Enter Username"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="email"
                  label="Enter Email"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="password"
                  label="Enter Password"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="phone"
                  label="Enter Mobile number"
                />

                <Button
                  variant="contained"
                  onClick={() => signupUser()}
                  className={classes.loginBtn}
                >
                  SignUp
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
