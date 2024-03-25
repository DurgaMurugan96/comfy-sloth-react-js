// import { useState } from "react";
// import "../Login/LoginPage.css";

// const LoginPage = () => {
//     const [formData, setFormData] = useState({ username: "", password: "" });
//     const [error, setError] = useState("");

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.username.trim() === "" || formData.password.trim() === "") {
//             setError("Please fill in all fields.");
//         } else {
//             console.log("Submitted form data:", formData);
//             setError("");
//             setFormData({ username: "", password: "" });
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <a href="/products"> <button type="submit">Login</button>
//                 </a>
//                 {error && <p className="error-message">{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default LoginPage;



