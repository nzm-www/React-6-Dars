// import React, { useState } from "react";

// function App() {
//   const [fruits, setFruits] = useState(["olma", "nok", "anjir", "banan"]);

//   function handleRemove(event) {
//     event.preventDefault();

//     let copieFruits = JSON.parse(JSON.stringify(fruits));

//     copieFruits.splice(2, 0, "meva");
//     setFruits(copieFruits);
//   }
//   return (
//     <div>
//       <ul></ul>
//       {fruits.length > 0 &&
//         fruits.map(function (fruit, index) {
//           return <li key={index}>{fruit}</li>;
//         })}
//       <button onClick={handleRemove}>Remuve</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [user, setUser] = useState({
//     name: "Javlon",
//     age: 45,
//   });

//   function increment(event) {
//     event.preventDefault();

//     let copieUser = JSON.parse(JSON.stringify(user))
//     copieUser.age ++
//     setUser(copieUser);
//   }

//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <h2>{user.age}</h2>

//       <button onClick={increment}>increment</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     desc: "",
//   });

//   function handelNeme(event) {
//     setForm({ ...form, name: event.target.value });
//   }

//   function handelAge(event) {
//     setForm({ ...form, age: event.target.value });
//   }

//   function handleDesc(event) {
//     setForm({ ...form, desc: event.target.value });
//   }

//   return (
//     <div>
//       <form>
//         <input onChange={handelNeme} value={form.name} type="text" />
//         <input onChange={handelAge} value={form.age} type="number" />
//         <textarea
//           onChange={handleDesc}
//           value={form.desc}
//           name=""
//           id=""
//           cols="30"
//           rows="10"
//         ></textarea>
//         <button>save</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React,{useState, useRef} from 'react'

// function App() {

// const [form, setForm] = useState({})

// const nameRef = useRef('')
// const ageRef = useRef('')
// const descRef = useRef('')

// function validate(event) {
//   event.preventDefault()
//   if(!nameRef.current.value){
//     alert('name is not')
//     nameRef.current.focus()
//     nameRef.current.style.outlineColor = 'red'
//     return false
//   }
//   return true
// }

// function name(params) {

// }

//   return (
//     <div>
//      <input   type="text" />
//          <input  type="number" />
//         <textarea
//           name=""
//           id=""
//           cols="30"
//           rows="10"
//         ></textarea>
//         <button >save</button>

//     </div>
//   )
// }

// export default

// import React, { useState, useEffect } from "react";

// function App() {
//   cosnt[(counter, setCounter)] = useState(0);
//   cosnt[(counter1, setCounter1)] = useState(0);

//     useEffect(() => {
//       console.log('hello');
//     })

//   useEffect(() => {
//     console.log('Sahifa  yuklandi');
//   }, [])

//   useEffect(() => {
//     console.log("hello");
//   }, [counter]);

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         increment
//       </button>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";

// function App() {
//   const [users, serUsers] = useState([]);

//   async function getDataFromApi(url) {
//     try {
//       const response = await fetch(url);
//       let data = [];
//       if (response.status == 200) {
//         data = await response.json();
//       }
//       return data;
//     } catch (error) {
//       console.log(error);
//     }

//     useEffect(() => {
//       getDataFromApi("https://jsonplaceholder.typicode.com/photos")
//         .then((data) => {
//           useEffect(data);
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
//   }
//   return (
//     <div>
//       {users.length > 0 &&
//         users.map(function (user, index) {
//           return (
//             <div
//               style={{
//                 border: "1px  solid black",
//                 padding: "20px",
//                 marginBottom: "20px",
//               }}
//             >
//               <h2>{user.mame}</h2>
//               <h2>{user.email}</h2>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default App;
import React from "react";
import Card from "./Components/Card/card";
import Header from "./Components/Header/header";

function App() {
  return (
    <div className="all">
      <Header />
      <Card />
    </div>
  );
}

export default App;
