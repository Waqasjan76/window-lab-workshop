/**
 * Window Lab Workshop - Frontend Interaction Script
 * Based on the project structure from source[cite: 25]
 */

// Toggles the side drawer open and closed for the creator application form
function toggleDrawer() {
    const drawer = document.getElementById('onboardingDrawer');
    drawer.classList.toggle('open');
}

// Simulates switching between different user roles (Student, Artist, Admin)
function switchRole(role) {
    alert('Switched view to: ' + role.toUpperCase() + ' mode.\nIn production, this toggles permissions and dashboard layouts.');
}

// Handles discipline filtering on the homepage and updates active button states
function filterDiscipline(category, element) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// Multi-step form management variables for the creator application
let step = 1;
const steps = ['JOIN', 'PROFILE', 'WORK', 'VISION', 'CAPABILITY', 'REVIEW', 'APPROVED'];

// Handles the logic for moving to the next step in the application form
function nextStep() {
    if (step < 7) {
        step++;
        document.getElementById('currentStep').innerText = step;
        document.getElementById('stepTitle').innerText = steps[step - 1];
        
        // When reaching the final step (7th step), submit the application
        if (step === 7) {
            alert('Application submitted! Status: PENDING ADMIN REVIEW.');
            toggleDrawer();
            step = 1;
            document.getElementById('currentStep').innerText = 1;
            document.getElementById('stepTitle').innerText = steps[0];
        }
    }
}