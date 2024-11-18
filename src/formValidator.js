function passwordValidator(password) {
    const checks = {
        hasUppercase: /[A-Z]/.test(password);
        hasLowercase: /[a-z]/.test(password);
        hasDigit: /\d/.test(password);
        hasSpecialChar: /[@$!%&?*€()='^£]/.test(password);
        isLongEnough: password.length >= 8;
    };
    return checks;
};