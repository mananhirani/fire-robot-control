// Initialize Chart.js
const ctx = document.getElementById('sensorChart').getContext('2d');
const sensorChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature (°C)',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }, {
            label: 'Smoke Level (%)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Simulated sensor data (replace with actual API calls)
function updateSensorData() {
    const temperature = Math.random() * 50 + 20;
    const smokeLevel = Math.random() * 100;
    
    document.getElementById('temperature').textContent = `${temperature.toFixed(1)}°C`;
    document.getElementById('smoke-level').textContent = `${smokeLevel.toFixed(0)}%`;
    
    // Update chart
    const now = new Date();
    const timeLabel = now.toLocaleTimeString();
    
    sensorChart.data.labels.push(timeLabel);
    sensorChart.data.datasets[0].data.push(temperature);
    sensorChart.data.datasets[1].data.push(smokeLevel);
    
    // Keep only the last 10 data points
    if (sensorChart.data.labels.length > 10) {
        sensorChart.data.labels.shift();
        sensorChart.data.datasets[0].data.shift();
        sensorChart.data.datasets[1].data.shift();
    }
    
    sensorChart.update();
}

// Robot control functions
function moveRobot(direction) {
    console.log(`Moving robot: ${direction}`);
    // Add actual robot control API calls here
}

// Water control
let waterActive = false;
function toggleWater() {
    waterActive = !waterActive;
    const button = document.getElementById('water-toggle');
    button.textContent = waterActive ? 'Stop Water' : 'Start Water';
    button.classList.toggle('bg-blue-500');
    button.classList.toggle('bg-red-500');
    
    console.log(`Water system: ${waterActive ? 'ON' : 'OFF'}`);
    // Add actual water control API calls here
}

// Update pressure value display
document.getElementById('water-pressure').addEventListener('input', (e) => {
    const value = e.target.value;
    document.getElementById('pressure-value').textContent = `${value}%`;
    console.log(`Water pressure set to: ${value}%`);
    // Add actual pressure control API calls here
});

// Simulate connection status changes
function updateConnectionStatus() {
    const status = document.getElementById('connection-status');
    const connected = Math.random() > 0.1; // 90% chance of being connected
    status.textContent = connected ? 'Connected' : 'Disconnected';
    status.classList.toggle('text-green-300', connected);
    status.classList.toggle('text-red-300', !connected);
}

// Update data periodically
setInterval(updateSensorData, 2000);
setInterval(updateConnectionStatus, 5000);

// Initial updates
updateSensorData();
updateConnectionStatus();

// 📄 Detailed fire safety paragraph (can be replaced with API content later)
const fireSafetyParagraph = `
    Fire emergencies can escalate rapidly, and understanding the appropriate steps can be the difference between safety and disaster. 
    If a fire is detected, prioritize your personal safety and the safety of others. Begin by sounding the alarm and notifying emergency services. 
    If you're in a monitored facility equipped with a fire robot, assess whether it's safe to deploy it to investigate or suppress the fire source. 
    Avoid taking unnecessary risks. If conditions worsen or visibility decreases due to smoke, evacuate immediately using marked exits. 
    Never attempt to retrieve belongings or re-enter the building. Designated evacuation plans should be followed, and all staff should be trained to assist individuals with special needs. 
    Once safely outside, remain at the designated assembly point and wait for updates from emergency responders. 
    Fire preparedness is a shared responsibility — ensure fire extinguishers, sensors, and systems are regularly inspected and that all personnel are aware of emergency protocols.
`;

document.addEventListener('DOMContentLoaded', () => {
    const infoParagraphContainer = document.getElementById('fire-info-paragraph');
    if (infoParagraphContainer) {
        infoParagraphContainer.textContent = fireSafetyParagraph;
    }
});
// Smooth scroll for the "back to main control" button
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('a[href="index.html"]');
    
    // If back button exists, we can add smooth scroll effect
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent the default anchor click
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => {
                window.location.href = 'index.html'; // After scrolling, go to main page
            }, 500); // Give the scroll some time to complete before navigating
        });
    }
});
