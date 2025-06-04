const passwordInput = document.getElementById("password");
const meterBar = document.getElementById("meter-bar");
const feedbackList = document.getElementById("feedback");
const strengthText = document.getElementById("strength-text"); // Add this element in your HTML

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;
    feedbackList.innerHTML = "";

    // Criteria checks
    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    // Apply checks and provide feedback
    if (!checks.length) feedbackList.innerHTML += "<li>❌ At least 8 characters</li>";
    if (!checks.uppercase) feedbackList.innerHTML += "<li>❌ Add uppercase letter</li>";
    if (!checks.lowercase) feedbackList.innerHTML += "<li>❌ Add lowercase letter</li>";
    if (!checks.number) feedbackList.innerHTML += "<li>❌ Add a number</li>";
    if (!checks.specialChar) feedbackList.innerHTML += "<li>❌ Add special character</li>";

    // Calculate strength (1 point per passed check)
    strength = Object.values(checks).filter(Boolean).length;

    // Update UI
    const strengthPercent = strength * 20;
    meterBar.style.width = `${strengthPercent}%`;
    
    // Set colors and text based on strength
    if (strength <= 2) {
        meterBar.style.background = "#ff4757"; // red
        strengthText.textContent = "Weak";
        strengthText.style.color = "#ff4757";
    } else if (strength <= 4) {
        meterBar.style.background = "#ffa502"; // orange
        strengthText.textContent = "Medium";
        strengthText.style.color = "#ffa502";
    } else {
        meterBar.style.background = "#2ed573"; // green
        strengthText.textContent = "Strong";
        strengthText.style.color = "#2ed573";
    }
});