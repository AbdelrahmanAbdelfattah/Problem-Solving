class RandomizedSet {
    constructor() {
        this.values = [];          // Array to store the values
        this.indexMap = new Map();  // Map to store value and its index in the array
    }

    insert(val) {
        if (this.indexMap.has(val)) {
            return false; // Value already exists
        }
        // Add the value to the array and store its index in the map
        this.indexMap.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    remove(val) {
        if (!this.indexMap.has(val)) {
            return false; // Value does not exist
        }
        // Get the index of the value to be removed
        const index = this.indexMap.get(val);
        const lastValue = this.values[this.values.length - 1];
        
        // Move the last element to the 'index' position
        this.values[index] = lastValue;
        this.indexMap.set(lastValue, index);
        
        // Remove the last element from the array
        this.values.pop();
        // Remove the value from the map
        this.indexMap.delete(val);
        return true;
    }

    getRandom() {
        // Generate a random index and return the value at that index
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}
