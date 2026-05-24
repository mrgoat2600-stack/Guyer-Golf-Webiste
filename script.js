const logoMenu = document.getElementById('Logo-Button');

let clubs = ["Lob Wedge", "Sand Wedge", "Gap Wedge", "Pitching Wedge", "9 Iron", "8 Iron", "7 Iron", "6 Iron", "5 Iron", "4 Iron", "Hybrid", "3 Wood", "Driver"]

document.querySelector('#Averages').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-row')) {
        e.target.closest('tr').remove();
    }
});



