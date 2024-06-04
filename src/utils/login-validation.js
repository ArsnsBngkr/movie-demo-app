// const validateEmail = (email) => {
//     const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!regEmail.test(email)) {
//       return setError("Invalid Email");
//     } else if (regEmail.test(email)) {
//       return true;
//     }
//   };

//   const validatePassword = (password) => {
//     const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
//     if (!regPassword.test(password)) {
//       return setError("Invalid Password");
//     } else if (regPassword.test(password)) {
//       return true;
//     }
//   };