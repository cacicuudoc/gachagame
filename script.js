document.addEventListener('DOMContentLoaded', () => {
    const gachaButton = document.getElementById('gachaButton');
    const gachaCharacterImg = document.getElementById('gachaCharacter');
    const characterNameDisplay = document.getElementById('characterName');
    const bodyPartSelect = document.getElementById('bodyPart');
    const colorPicker = document.getElementById('colorPicker');
    const applyCustomizationButton = document.getElementById('applyCustomization');
    const characterInventory = document.getElementById('characterInventory');
    const gachaBall = document.getElementById('gachaBall');
    const gachaWindow = document.querySelector('.gacha-window');

    const characters = [
        { id: 'char1', name: 'luna', image: 'images/luna.png' },
        { id: 'char2', name: 'luna', image: 'images/luna.png' },
        // Tambahkan lebih banyak karakter
    ];

    let currentCharacter = null;
    let inventory = [];
    let isGachaActive = false; // Flag untuk mencegah gacha berulang

    function performGacha() {
        return new Promise(resolve => {
            if (isGachaActive) return;
            isGachaActive = true;

            // Animasi bola jatuh
            gachaBall.style.transform = 'translateY(50px)';
            setTimeout(() => {
                gachaBall.style.backgroundColor = 'lightgray'; // Efek bola keluar
                gachaBall.style.transform = 'translateY(120px)'; // Lebih jauh agar terlihat keluar

                setTimeout(() => {
                    // Pilih karakter acak
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    const rolledCharacter = characters.splice(randomIndex, 1)[0] || { id: 'default', name: 'Tidak ada karakter', image: 'images/placeholder.png' }; // Ambil dan hapus dari array (opsional)
                    currentCharacter = { ...rolledCharacter };

                    // Tampilkan karakter
                    gachaCharacterImg.src = currentCharacter.image;
                    characterNameDisplay.textContent = currentCharacter.name;

                    // Tambahkan ke inventaris
                    if (!inventory.some(char => char.id === currentCharacter.id) && currentCharacter.id !== 'default') {
                        inventory.push(currentCharacter);
                        renderInventory();
                    } else if (currentCharacter.id !== 'default') {
                        alert(`Anda sudah memiliki ${currentCharacter.name} di inventaris!`);
                    } else {
                        alert('Sayang sekali, tidak ada karakter yang keluar kali ini!');
                    }

                    // Reset bola gacha
                    gachaBall.style.transform = 'translateY(0)';
                    gachaBall.style.backgroundColor = 'yellow';
                    isGachaActive = false;
                    resolve(rolledCharacter);
                }, 1000); // Durasi bola "keluar"
            }, 500); // Durasi bola jatuh
        });
    }

    gachaButton.addEventListener('click', () => {
        performGacha();
    });

    // Fungsi untuk memuat opsi kustomisasi (tetap sama)
    function loadCustomizationOptions() {
        // ... (kode sebelumnya)
    }

    // Event listener untuk tombol terapkan kustomisasi (tetap sama)
    applyCustomizationButton.addEventListener('click', () => {
        // ... (kode sebelumnya)
    });

    // Fungsi untuk menampilkan inventaris (tetap sama)
    function renderInventory() {
        // ... (kode sebelumnya)
    }

    // Inisialisasi
    loadCustomizationOptions();
    renderInventory();
});