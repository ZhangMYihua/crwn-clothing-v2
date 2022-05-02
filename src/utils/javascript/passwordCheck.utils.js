import { passwordStrength } from 'check-password-strength'

const strengthValue = 2;

export const checkPassword = passwordInput => 
    passwordStrength(passwordInput).id >= strengthValue;