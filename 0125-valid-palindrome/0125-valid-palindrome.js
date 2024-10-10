
function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is the same forward and backward
    return cleanString === cleanString.split('').reverse().join('');
}

