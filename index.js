// const AngleApi = require('./AngleLibrary/AngleApi');

// const api = new AngleApi("https://jsonplaceholder.typicode.com");


// api.get('/posts')
//     .then(data => console.log("Data:", data))
//     .catch(err => console.error("API Request Failed:", err));



// // Refactor code using arrow functions and destructuring


// let object = {
//     name: "ashish patel",
//     age: 21,
//     Skil: ['java', 'c', 'javaScript', 'react js', 'node js', 'Express js ', 'mongodb'],
// }

// function Prining(object) {

//     console.log(`Name ${object.name} \n Age ${object.age}`);
//     console.log('Skil');
//     object.Skil.map(function (skil) {
//         console.log(skil);
//     })
// }

// Prining(object);


// // Refactor code

// let Prining = ({ name, age, Skil }) => ` Name ${name}\n Age ${age}\n Skil ${Skil.toString()}`

// let data = Prining(object);
// console.log(data);





// const fetchData = async (url) => {

//     try {
//         const res = await fetch(url);
//         if (res.status === 200) {
//             const data = await res.json();
//             console.log(data);
//         } else {
//             console.log("Responce not ok", res);
//         }

//     } catch (error) {
//         console.log("fetching Error : ", error);
//     }

// }

// fetchData('https://jsonplaceholder.typicode.com/post')



// Convert CommonJS module to ES6



// import object from "./temp.js";

// console.log(object);








