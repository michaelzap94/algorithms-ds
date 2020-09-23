// class Node {
//   constructor(value) {
//     this.value = value;
//     this.children = {}; //up to 26
//     this.endSymbol = "*"; //null
//     // this.isValue = false;
//   }

//   setChild(index, node) {
//     //insert a child in a node
//     this.children[index] = node;
//   }
// }

class PrefixTrie {
  constructor() {
    this.root = {}; //it will always be empty -> new Node("");
    this.endSymbol = "*";
  }

  //O(m) TS
  insert(string) {
    let node = this.root;
    //loop through the string, if a letter is in the Trie, move to next node and next letter
    for (let j = 0; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        //if it's not, you need to add it to the current node we are seeing
        node[letter] = {};
      }
      //then we move inside this letter's node, and new letter value i
      node = node[letter];
    }
    //whatever the end node is, we add an endSymbol, this indicates this is a word
    node[this.endSymbol] = true;
  }

  //O(m) time | O(1) space
  hasWord(string) {
    let node = this.root;
    //loop through the string, if a letter is in the Trie, move to next node and next letter
    for (let j = 0; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        return false; //it's not here
      }
      //if we did not return false before, it is here so:
      //then we move inside this letter's node, and new letter value i
      node = node[letter];
    }
    //if the string we are looking for ends in endSymbol(IS A WORD), then return as true, else false
    return this.endSymbol in node;
  }

  //O(m) time | O(1) space
  hasPrefix(string) {
    let node = this.root;
    for (let j = 0; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) {
        return false; //it's not here
      }
      //then we move the next node
      node = node[letter];
    }
    //if all characters in string are in Trie, it is there
    return true;
  }

  autoComplete(string) {
    let node = this.root;
    let letter;
    for (let j = 0; j < string.length; j++) {
      letter = string[j];
      if (!(letter in node)) {
        return []; //it's not here
      }
      //then we move the next node
      node = node[letter];
    }
    //at the end of the loop, we will have the node containing all possible suggestions
    let suggestions = this.depthFirstSearch(node, string);
    //if all characters are in Trie, it is there
    return suggestions;
  }

  depthFirstSearch(root, string) {
    let array = [];
    const helper = (currentNode, word = "") => {
      //if we see the endSymbol, this is a word, so push it
      //however, this node may contain other alternatives: eg: app, approval, so loop through app... children
      if (this.endSymbol in currentNode) {
          array.push(word);
       }
       //loop thourhg the currentNode's keys, which will give you the letter value
      for (let keyLetter in currentNode) {
        //if we see a * skip it
        if(keyLetter === this.endSymbol) continue;
        //keep looping for all subtries 1) moving into this new node 2) appending the current word + newLetter(keyLetter)
        helper(currentNode[keyLetter], word + keyLetter);
      }
    }
    helper(root, string);//auto suggestions -> including string
    //helper(root);//auto complete -> not including string
    return array;
  }
}

// const preffixTrie = new preffixTrie();
// preffixTrie.insert("apple");
// preffixTrie.insert("app");
// preffixTrie.insert("air");
// preffixTrie.insert("bbc");
// preffixTrie.insert("appron");
// console.log(JSON.stringify(preffixTrie.root));

const preffixTrie = new PrefixTrie();
preffixTrie.insert("babc");
preffixTrie.insert("bab");
preffixTrie.insert("bcf");
preffixTrie.insert("abd");
// console.log(preffixTrie.hasWord("babc"));
// console.log(preffixTrie.hasWord("abc"));
// console.log(preffixTrie.hasWord("bab"));
console.log(preffixTrie.hasPrefix("bab")); //true
console.log(preffixTrie.hasPrefix("babc")); //true
console.log(preffixTrie.hasPrefix("babcd")); //false
console.log(preffixTrie.hasPrefix("abc")); //false

console.log(preffixTrie.autoComplete("ba"));
