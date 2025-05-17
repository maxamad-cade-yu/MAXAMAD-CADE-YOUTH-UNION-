
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const memberList = document.getElementById('memberList');
    const memberDisplay = document.getElementById('memberDisplay');

    if (localStorage.getItem('formSubmitted')) {
        form.style.display = 'none';
        const msg = document.createElement('p');
        msg.innerText = "You have already submitted the form.";
        document.querySelector('.container').appendChild(msg);
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const data = {
            fullName: document.getElementById('fullName').value,
            motherName: document.getElementById('motherName').value,
            age: document.getElementById('age').value,
            location: document.getElementById('location').value,
            clanBranch: document.getElementById('clanBranch').value,
            educationLevel: document.getElementById('educationLevel').value,
            degree: document.getElementById('degree').value,
            occupation: document.getElementById('occupation').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        localStorage.setItem('formSubmitted', 'true');
        localStorage.setItem('memberData', JSON.stringify(data));
        alert('Form submitted successfully!');
        form.reset();
        form.style.display = 'none';
    });

    const password = prompt("Admin Only: Enter password to view members:");
    if (password === 'admin123') {
        const memberData = JSON.parse(localStorage.getItem('memberData'));
        if (memberData) {
            memberList.style.display = 'block';
            const li = document.createElement('li');
            li.textContent = `${memberData.fullName}, ${memberData.clanBranch}, ${memberData.educationLevel}, ${memberData.occupation}`;
            memberDisplay.appendChild(li);
        }
    }
});
