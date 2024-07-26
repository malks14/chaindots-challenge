import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, CircularProgress, Typography } from "@mui/material";
import AuthContext from "../../../store/auth-context";


const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()

  const [error, setError] = useState('');
  const [userFormData, setUserFormData] = useState({
    userName: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const onFormFieldChange = (event) => {
    const { name, value } = event.target;

    setUserFormData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateUserName = (userName) => {
    const regexUserName = /^[a-zA-Z]+$/;
    return regexUserName.test(userName);
};
  const handleSubmit = async (event) => {
      setIsLoading(true)
      event.preventDefault();
      if (!validateUserName(userFormData.userName)) {
        setError("Only alphabetical characters can be used")
    }
  
      try {
        const response = await fetch('/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const users = await response.json();
        const user = users.find(
          (user) =>
            user.username === userFormData.userName &&
            user.password === userFormData.password
        );
          authCtx.login(user.token, user.username);
          navigate("/");
      } catch (err) {
          setError("Wrong username or password");
      }
      setIsLoading(false)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px', mx: 'auto' }}>
      <TextField
        id="userName"
        label="User"
        variant="outlined"
        name="userName"
        required
        value={userFormData.userName}
        onChange={onFormFieldChange}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
        value={userFormData.password}
        onChange={onFormFieldChange}
      />
      <Button type="submit" variant="contained">Login</Button>
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default LoginPage;
