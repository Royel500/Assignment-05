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

document.querySelectorAll('.number-01').forEach(button => {
    button.addEventListener('click', function() {
        const headingNumberElement = document.getElementById('heading-number');
        const normalNumberElement = document.getElementById('normal-number');
        const paraElement = document.getElementById('para');

        const convertNumber = parseInt(headingNumberElement.innerText);
        const convertNormal = parseInt(normalNumberElement.innerText);

        headingNumberElement.innerText = convertNumber + 1;
        normalNumberElement.innerText = convertNormal - 1;

        const newDiv = document.createElement('div');
        const currentDateTime = new Date().toLocaleString();
        const cardTitle = button.closest('.card').querySelector('.card-heading').innerText; // Corrected line
        newDiv.innerText = `You have completed the task ${cardTitle} at ${currentDateTime}`;
        paraElement.appendChild(newDiv);

        button.disabled = true;
        alert('Board Update successfully');
        // Check if all buttons are disabled
        const allDisabled = Array.from(document.querySelectorAll('.number-01')).every(btn => btn.disabled);
        if (allDisabled) {
            // Disable all buttons
            document.querySelectorAll('button').forEach(btn => btn.disabled = true);
            alert('Congrates !! You have completed all the current task');
        }
    });
});

