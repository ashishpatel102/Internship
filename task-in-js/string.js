"Create an object and access a dynamic property key."


// const object = {
//     name: 'ashish patel',
//     get: function (key) {
//         console.log(`your ${key} : ` + this[key]);

//     },
//     set: function (key, value) {
//         this[key] = value
//     }

// }

// object.get('name');
// object.set('age', 21);
// object.get('age')



"Program Using Only String Methods "


let modelBox = [
    {
        query: 'What is your name',
        output: 'my name is ashish patel'
    },
    {
        query: 'you are ashish',
        output: 'yes i am ashish'
    }
];


function NLP(query) {
    const token = query.split(' ');

    for (let model of modelBox) {
        let count = 0;
        const modelTokens = model.query.split(' ');

        token.forEach(data => {
            if (modelTokens.includes(data)) {
                count++;
            }
        });

        if (count >= Math.floor(token.length / 2)) {
            return model.output;
        }
    }

    return "Your Query not found";
}



// let query = 'your name';
// let query = 'name';
let query = 'you ashish ';
let output = NLP(query);
console.log(output);



