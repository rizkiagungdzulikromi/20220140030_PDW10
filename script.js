document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const alamat = document.getElementById('alamat').value;
    const peminatan = document.getElementById('peminatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const angkatan = document.getElementById('angkatan').value;

    const notificationDiv = document.getElementById('notification');
    notificationDiv.innerHTML = `
        <strong>Form Submitted!</strong><br>
        <p>Nama: ${nama}</p>
        <p>NIM: ${nim}</p>
        <p>Alamat: ${alamat}</p>
        <p>Peminatan: ${peminatan}</p>
        <p>Tanggal: ${tanggal}</p>
        <p>Angkatan: ${angkatan}</p>
        <button onclick="hideNotification()">OK</button>
    `;
    notificationDiv.classList.add('show');
});

// Set current date to the tanggal input
const today = new Date().toISOString().split('T')[0];
document.getElementById('tanggal').value = today;

function hideNotification() {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.classList.remove('show');
}
