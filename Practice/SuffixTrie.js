class SuffixTrie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  //O(n^2) time | O(n^2) space
  insert(string) {
    // you need to insert every element in the string, and also all its substrings
    for (let i = 0; i < string.length; i++) {
      this._insertSubstringStartingAt(i, string);
    }
  }

  _insertSubstringStartingAt(i, string) {
    let node = this.root;
    //we need to start at the current i as it is suffix
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        //if it's not, you need to add it to the current node we are seeing
        node[letter] = {};
      }
      //then we move the next node-> node[letter] can be the existing value or the new {} empty HT
      node = node[letter];
    }
    //whatever the end node is, we add an endSymbol, this indicates this is a word
    node[this.endSymbol] = true;
  }

  //O(m) time | O(1) space
  contains(string) {
    let node = this.root;
    for (let j = 0; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        return false; //it's not here
      }
      //then we move the next node
      node = node[letter];
    }
    //if the string we are looking for ends in endSymbol(IS A WORD), then return as true, else false
    return this.endSymbol in node;
  }
}

const suffixTrie = new SuffixTrie();
suffixTrie.insert("babc");
suffixTrie.insert("abd");
console.log(suffixTrie.contains("babc"));
console.log(suffixTrie.contains("abc"));
console.log(suffixTrie.contains("bab"));