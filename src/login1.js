// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./features/userSlice";
// import { auth } from "./firebase";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [profilePic, setProfilePic] = useState("");
//   const dispatch = useDispatch();

//   const loginToApp = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         dispatch(
//           login({
//             email: userAuth.user.email,
//             uid: userAuth.user.uid,
//             displayName: userAuth.user.displayName,
//             photoURL: userAuth.user.photoURL,
//           })
//         );
//       })
//       .catch((error) => alert(error));
//   };
//   const register = (e) => {
//     e.preventDefault();
//     if (!name) {
//       return alert("Please enter a full name");
//     }
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         userAuth.user
//           .updateProfile({
//             displayName: name,
//             photoURL: profilePic,
//           })
//           .then(() => {
//             dispatch(
//               login({
//                 email: userAuth.user.email,
//                 uid: userAuth.user.uid,
//                 displayName: name,
//                 photoURL: profilePic || " ",
//               })
//             );
//           });
//       })
//       .catch((error) => alert(error));
//   };
//   return (
//     <div className="login">
//       <div className="left_section">
//         <h1>Join the biggest professional community</h1>
//         <form>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Full Name (required for signup)"
//           />
//           <input
//             value={profilePic}
//             onChange={(e) => setProfilePic(e.target.value)}
//             type="text"
//             placeholder="Profile Pic URL (optional)"
//           />
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//           />
//           <button type="submit" onClick={loginToApp}>
//             Sign In
//           </button>
//           <p className="center">Not a member?</p>
//           <button className="login_register" onClick={register}>
//             Register Now
//           </button>
//         </form>
//       </div>
//       <div className="right_image">
//         <img
//           src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
//           alt="guy with laptop"
//         />
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./features/userSlice";
// import { auth } from "./firebase";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [profilePic, setProfilePic] = useState("");
//   const [registerToggle, setRegisterToggle] = useState(false);
//   const dispatch = useDispatch();

//   const loginToApp = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         dispatch(
//           login({
//             email: userAuth.user.email,
//             uid: userAuth.user.uid,
//             displayName: userAuth.user.displayName,
//             photoURL: userAuth.user.photoURL,
//           })
//         );
//       })
//       .catch((error) => alert(error));
//   };
//   const register = (e) => {
//     e.preventDefault();
//     if (!name) {
//       return alert("Please enter a full name");
//     }
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         userAuth.user
//           .updateProfile({
//             displayName: name,
//             photoURL: profilePic,
//           })
//           .then(() => {
//             dispatch(
//               login({
//                 email: userAuth.user.email,
//                 uid: userAuth.user.uid,
//                 displayName: name,
//                 photoURL: profilePic || " ",
//               })
//             );
//           });
//       })
//       .catch((error) => alert(error));
//   };
//   return (
//     <div className="login">
//       <div className="left_section">
//         <h1>Join the biggest professional community</h1>
//         <form>
//           {registerToggle && (
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Full Name (required for signup)"
//             />
//           )}
//           {registerToggle && (
//             <input
//               value={profilePic}
//               onChange={(e) => setProfilePic(e.target.value)}
//               type="text"
//               placeholder="Profile Pic URL (optional)"
//             />
//           )}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//           />
//           {!registerToggle && (
//             <button className="org" type="submit" onClick={loginToApp}>
//               Sign In
//             </button>
//           )}
//           {!registerToggle && <p className="center">Not a member?</p>}

//           {!registerToggle && (
//             <button
//               type="submit"
//               className="login_register dup"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setRegisterToggle(!registerToggle);
//               }}
//             >
//               Register Now
//             </button>
//           )}

//           {registerToggle && (
//             <button className="login_register org" onClick={register}>
//               Register Now
//             </button>
//           )}
//           {registerToggle && (
//             <button
//               className="dup"
//               type="submit"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setRegisterToggle(!registerToggle);
//               }}
//             >
//               Sign In
//             </button>
//           )}
//         </form>
//       </div>
//       <div className="right_image">
//         <img
//           src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
//           alt="guy with laptop"
//         />
//       </div>
//     </div>
//   );
// }

// export default Login;
