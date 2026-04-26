class MyHashMap {
  constructor() {
    this.size = 10000;
    this.map = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.map[i] = new Array();
    }
  }

  put(key, value) {
    let hash_key = key % this.size;
    let bucket = this.map[hash_key];

    for (let pair of bucket) { 
      let first = pair[0];
      if (first === key) {
        pair[1] = value;
        return;
      }
    }
    
    bucket.push([key, value]);
  }

  get(key) {
    let hash_key = key % this.size;
    let bucket = this.map[hash_key];

    for (let pair of bucket) {
      let first = pair[0];
      let second = pair[1];
      if (first === key) {
        return second;
      }
    }
    
    return -1;
  }

  remove(key) {
    let hash_key = key % this.size;
    this.map[hash_key] = this.map[hash_key].filter((pair) => pair[0] !== key);
  }
}