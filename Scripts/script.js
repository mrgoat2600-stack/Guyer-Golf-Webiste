const logoMenu = document.getElementById('Logo-Button');

let clubs = [
    { name: "Lob Wedge", value: 60, average: ''},
    { name: "Sand Wedge", value: 70, average: ''},
    { name: "Gap Wedge", value: 80, average: ''},
    { name: "Pitching Wedge", value: 90, average: ''},
    { name: "9 Iron", value: 191, average: ''},
    { name: "8 Iron", value: 192, average: ''},
    { name: "7 Iron", value: 193, average: ''},
    { name: "6 Iron", value: 194, average: ''},
    { name: "5 Iron", value: 195, average: ''},
    { name: "4 Iron", value: 196, average: ''},
    { name: "Hybrid", value: 300, average: ''},
    { name: "3 Wood", value: 400, average: ''},
    { name: "Driver", value: 500, average: ''},
];

function renderTable() {
 const addClubRow = document.getElementById('add-Club');
    const tbody = addClubRow.parentNode;

    // clear existing rows first
    const rows = tbody.querySelectorAll('tr:not(.Table-Header):not(#add-Club)');
    rows.forEach(row => row.remove());

    // Rebuild from the clubs array
    clubs.forEach(club => {
        const newRow = document.createElement('tr');
        newRow.className = 'one';
         const deleteBtn = club.average ? '' : '<button class="delete-row">X</button>';
         newRow.innerHTML = `<td data-name="${club.name}">${deleteBtn} ${club.name}</td><td>${club.average || ''}</td>`;
        tbody.insertBefore(newRow, addClubRow);
    });
}
renderTable(); 

document.querySelector('#Averages').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-row')) {
        const row = e.target.closest('tr');

        const clubName = row.cells[0].dataset.name;
        clubs = clubs.filter(club => club.name !== clubName);
        row.remove(); 
    }

    else if (e.target.classList.contains('add-club')) {
        const input = document.querySelector('.club-input');
        if (input.value === '') {
            return;
        }

        else if (clubs.length === 13) {
            return;
        }

        const clubName = input.value;
        const lower = clubName.toLowerCase();
        const num = parseFloat(lower) || 0; // pulls the number out of the name, e.g. "5 iron" → 5

        let value;

        if (lower.includes('driver')) {
            value = 500;
        } else if (lower.includes('wood')) {
            value = 400 - num; 
        } else if (lower.includes('hybrid')) {
            value = 300 - num;  
        } else if (lower.includes('iron')) {
            value = 200 - num;  
        } else if (lower.includes('pitching wedge')) {
            value = 90;
        } else if (lower.includes('gap wedge')) {
            value = 80;
        } else if (lower.includes('sand wedge')) {
            value = 70;
        } else if (lower.includes('lob wedge')) {
            value = 60;
        } else {
            value = 1;
        }

    clubs.push({ name: clubName, value: value });
    clubs.sort((a, b) => a.value - b.value);
    renderTable();

    input.value = '';
    }
});

        const Home = document.getElementById('Home');
        const PracRoom = document.getElementById('Practice-Room');
        const Rotations = document.getElementById('Rotations');
        const DistanceInputs = document.getElementById('Distance-Inputs');
        const SpeedInputs = document.getElementById('Speed-Inputs');
        
DistanceInputs.addEventListener('click', () => {
        window.location.href = '/html/Distance.html';
});

PracRoom.addEventListener('click', () => {
        window.location.href = '/html/index.html';
});

Home.addEventListener('click', () => {
        window.location.href = '/html/Home.html';
});

Rotations.addEventListener('click', () => {
        window.location.href = '/html/Rotations.html';
});

SpeedInputs.addEventListener('click', () => {
        window.location.href = '/html/Speed.html';
});
















