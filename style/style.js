// ------button color-----------

const colors = ["#007BFF", "#28A745", "#DC3545", "#FFC107", "#17A2B8", "#6610F2"];

const button = document.getElementById('colorButton');

let currentColorIndex = 0;

button.addEventListener('click', function() {

    document.getElementById('body').style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// -----go to the second page--------------
document.getElementById('Go-to').addEventListener('click', function() {
    window.location.href = "./question.html";
});


document.getElementById('last-button').addEventListener('click', function() {
    const paraElement = document.getElementById('para');
    paraElement.innerText = "";
});   


// ----------card button -------------------

document.querySelectorAll('#number-01').forEach(button => {
    button.addEventListener('click', function() {
        const headingNumberElement = document.getElementById('heading-number');
        const normalNumberElement = document.getElementById('normal-number');
        const paraElement = document.getElementById('para');

        const convertNumber = parseInt(headingNumberElement.innerText);
        const convertNormal = parseInt(normalNumberElement.innerText);

        headingNumberElement.innerText = convertNumber + 1;
        normalNumberElement.innerText = convertNormal - 1;

        const newDiv = document.createElement('div');
        newDiv.innerText = "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly.";
        paraElement.appendChild(newDiv);

        button.disabled = true;
    });
});

