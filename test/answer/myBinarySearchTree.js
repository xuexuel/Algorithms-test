class TreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root === null) {
      this.root = new TreeNode(data);
      return true;
    } else {
      return insert_data.call(this, this.root, data);
    }
  }
  search(data) {
    return search_data.call(this, this.root, data);
  }
  remove(data) {
    return remove_data.call(this, this.root, data);
  }
  get_root() {
    return this.root;
  }
  in_order(node) {
    if (node === null) {
      return false;
    }
    this.in_order(node.leftChild);
    console.log(node.data);
    this.in_order(node.rightChild);
  }
}
function insert_data(node, data) {
  if (data === node.data) return false;
  let child = data < node.data ? node.leftChild : node.rightChild;
  if (child) {
    return insert_data(child, data);
  } else {
    let new_node = new TreeNode(data);
    if (data < node.data) {
      node.leftChild = new_node;
    } else {
      node.rightChild = new_node;
    }
    new_node.parent = node;
    return true;
  }
}

function search_data(node, data) {
  if (node === null) return false;
  if (data === node.data) return node;
  if (data < node.data) {
    search_data(node.leftChild, data);
  } else {
    search_data(node.rightChild, data);
  }
}

function remove_data(node, data) {
  if (node === null) {
    return false;
  }
  if (data < node.data) {
    return remove_data(node.leftChild, data);
  } else if (data > node.data) {
    return remove_data(node.rightChild, data);
  } else {
    if (node.leftChild && node.rightChild) {
      let temp = node.rightChild;
      while (temp.leftChild) {
        temp = temp.leftChild;
      }
      node.data = temp.data;
      return remove_data(node.rightChild, temp.data)
    } else {
      if (node.leftChild) {
        link_parent(node, node.leftChild);
      } else {
        link_parent(node, node.rightChild);
      }
      return true;
    }
  }
}
function link_parent(node, next_node) {
  let parent = node.parent;
  if (parent === null) {
    this.root = next_node;
    this.root.parent = null;
  } else if (parent.leftChild && parent.leftChild.data === node.data) {
    parent.leftChild = next_node;
    next_node.parent = parent;
  } else {
    parent.rightChild = next_node;
    next_node.parent = parent;
  }
}


let bSTree = new BinarySearchTree();
bSTree.insert(23);
bSTree.insert(34);
bSTree.insert(76);
bSTree.insert(3);
bSTree.insert(7);
bSTree.insert(51);
let root = bSTree.get_root();
bSTree.in_order(root);
// console.log(bSTree.search(23));
// console.log(bSTree.remove(23));




