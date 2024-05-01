let foo = 3;
let bar = false;

if (foo === 3) {

    const obj = {
        hello: 123,
        world: 456
    };

    for (let i = 0; i < Object.keys(obj).length; ++i) {

        document.documentElement.appendChild(document.createElement('div')); // Insert a div into our HTML node / the DOM tree's root instead of the document object
        document.getElementById('xyz').style.border = '1px solid #000';
        document.getElementById('xyza').style.color = 'white';
        document.getElementById('xyzab').style.marginTop = '160px';
        document.getElementById('xyzabc').style.border = '1px solid #123';

        const children = document.querySelector("parent").children; // Or whatever our parent is supposed to be named
        let currChildIndex = 0;
        while (currChildIndex < children.length && children[currChildIndex].nodeName() !== 'span'){
            ++currChildIndex;
        };
        if (currChildIndex < children.length) { 
            // We have found a span child, now we can do whatever we want with it in here
        }
        obj.result = multiply(i, i - 3); // I am unsure what you were originally trying to do, so I will save the result to obj and then set foo to obj.result
        foo = obj.result;

    }

}

function multiply(x, y) { // Made this const function use the function keyword so that it can automatically be hoisted to the top
    return x * y;
};