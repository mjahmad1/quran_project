// Initial donation data
let totalCollected = 39266.36;
const targetAmount = 5000000;

// Function to handle donations
function donate(amount) {
    totalCollected += amount;
    alert('Thank you for donating £' + amount + '!');
    updateProgress();
}

// Function to update the progress bar and displayed amounts
function updateProgress() {
    const progressBar = document.querySelector('progress');
    const collectedAmount = document.querySelector('#collected-amount');
    progressBar.value = totalCollected;
    collectedAmount.textContent = 'Collected: £' + totalCollected.toFixed(2);
}

// Initialize the progress bar on page load
document.addEventListener('DOMContentLoaded', updateProgress);
