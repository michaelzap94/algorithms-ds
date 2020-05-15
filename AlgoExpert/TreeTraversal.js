class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breathFirstSearch(array) {
      const root = this;
      const queue = [];//this should be a LinkedList
      queue.push(root);//init queue, start at root
      while(queue.length != 0){
        const current = queue.shift();
        array.push(current.name);
        queue = queue.concat(current.children);
      }
      return array;
  }

  depthFirstSearch(array) {
      const root = this;
      function helper(node){
        let current = node;
        array.push(current.name);//pre_order - root first
        for(let child of current.children){
            helper(child);
        }
        //array.push(current.name);//post_order - root last
      }
      helper(root);
      return array;
  }
}
