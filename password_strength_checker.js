function passwordStrengthChecker(password) {
    let score = 0;
  
    // Length check
    if (password.length >= 12) {
      score += 10;
    }
    if (password.length >= 16) {
      score += 10;
    }
    if (password.length >= 21) {
      score += 10;
    }
  
    // Complexity check
    if (/[A-Z]/.test(password)) {
      score += 5;
    }
    if (/[a-z]/.test(password)) {
      score += 5;
    }
    if (/\d/.test(password)) {
      score += 5;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 10;
    }
  
    // Uniqueness check
    const commonPasswords = ["qwerty", "password123"];
    if (!commonPasswords.includes(password.toLowerCase())) {
      score += 10;
    }
  
    // Calculate total score
    if (score < 30) {
      return "Weak";
    } else if (score < 50) {
        return "Fair";
      } else if (score < 70) {
        return "Good";
      } else {
        return "Excellent";
      }
    }
    
    function checkPasswordStrength() {
      const password = document.getElementById("password").value;
      const strength = passwordStrengthChecker(password);
      document.getElementById("result").innerHTML = `Password strength: ${strength}`;
    }
    