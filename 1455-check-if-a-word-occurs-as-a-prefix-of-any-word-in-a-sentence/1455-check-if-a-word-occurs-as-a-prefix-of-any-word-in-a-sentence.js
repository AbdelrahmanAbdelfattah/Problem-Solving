function isPrefixOfWord(sentence, searchWord) {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        // Check if the current word starts with the searchWord
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    // If no word matches, return -1
    return -1;
}