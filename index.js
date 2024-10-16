//Did you know...?

const amount = ['all', 'most', 'some', 'a few', 'the majority of', 
    'a minority of', '62% of', '13% of', 'a lot of', '78.6% of'];

const animal = ['badgers', 'foxes', 'buffalo', 'giraffes', 'horses', 
    'wolves', 'dogs', 'clown fish', 'emus', 'moths'];

const doing = ['struggle at', 'are the worst at', 'are terrible at', 
    'are not great at', 'require assistance at', 'have no skill at', 
    'need some help at', 'are dangerously underqualified at', 'are embarrassingly poor at', 'are bad at'];

const action = ['referencing in academic writing', 'Playstation AND X-box games', 
    'baking a sour-dough', 'interpreting Shakespeare', 'using a national survey map', 
    'underwater yoga', 'wine tasting', 'choosing a favourite song', 're-upholstering furniture', 
    'identifying the colour aquamarine'];


    const facts = () => {
        let i = Math.floor(Math.random() * 10);
        let j = Math.floor(Math.random() * 10);
        let k = Math.floor(Math.random() * 10);
        let l = Math.floor(Math.random() * 10);
        console.log("Did you know...?")
        return (`That ${amount[i]} ${animal[j]} ${doing[k]} ${action[l]}.`)
    };

    console.log(facts());

//Need arrays of outputs. Random number generator to cycle through and select random 
// array positions and return the values in a string.