class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    //Not the best, but will work for strings less than 100 chars long
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    
    // Accepts a key and a value and Hashes the key
    // Stores the key-value pair in the hash table array via separate chaining
    set(key, value) {//------THIS VERSION ALLOWS DUPLICATE KEYS;-----
        const hashIndex = this._hash(key);
        if(!this.keyMap[hashIndex]){//if there's nothing at the index.
            this.keyMap[hashIndex] = [];//create empty array
        }
        this.keyMap[hashIndex].push([key, value]);//push into inner array
    }

    // Accepts a key and hashes it
    // Retrieves the key-value pair in the hash table
    // If the key isn't found, returns undefined
    get(key){
        const hashIndex = this._hash(key);
        const hashIndexContent = this.keyMap[hashIndex] || [];
        for (const iterator of hashIndexContent) {
            if(iterator[0] === key) return iterator[1];
        }
        return undefined;
    }

    //Loops through the hash table array and returns an array of keys in the table
    keys() {
        let keysArray = [];
        for (const outter of this.keyMap) {
            if(outter){
                for (const inner of outter) {
                    keysArray.push(inner[0]);
                }
            }
        }
        return keysArray;
    }
    //Loops through the hash table array and returns an array of values in the table
    values() {
        let valuesArray = [];
        for (const outter of this.keyMap) {
            if(outter){
                for (const inner of outter) {
                    valuesArray.push(inner[1]);
                }
            }
        }
        return valuesArray;
    }
    //If duplicates in values, return only unique values
    values_unique() {
        let valuesArray = [];
        for (const outter of this.keyMap) {
            if(outter){
                for (const inner of outter) {
                    if(!valuesArray.includes(inner[1])){
                        valuesArray.push(inner[1]);
                    }
                }
            }
        }
        return valuesArray;
    }
}

const hashTable = new HashTable(10);
hashTable.set('hi', 'any3');
hashTable.set('hi', 'any3');
hashTable.set('his', 'any2');
hashTable.set('hiss', 'any3');
hashTable.set('hissfd', 'any4');
console.log(hashTable.keyMap);
//[ <5 empty items>, [['hiss', 'any3'], ['hissfd', 'any4']], 
//  [['his', 'any2']], [['hi', 'any1']], <2 empty items> ]
console.log(hashTable.get('hiss'));//'any3'
console.log(hashTable.keys());//[ 'hiss', 'hissfd', 'his', 'hi', 'hi' ]
console.log(hashTable.values());//[ 'any3', 'any4', 'any2', 'any3', 'any3' ]
console.log(hashTable.values_unique());//[ 'any3', 'any4', 'any2' ]