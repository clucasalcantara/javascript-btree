const Node = require('./models')
/**
 * Binary Tree Insert
 * Accepts a value and places into a right position
 * inside the tree
 * @param {String} value
 * @return {Function}
 */
const insertNode = (value, tree) => {
    let newNode = Node(value)
    
    if (!tree.root) {
        tree.root = value
    } else {
        insertRecursive(value, tree)
    }
}

/**
 * Insert a value into the tree in the right position
 * @param {Object} tree 
 */
const insertRecursive = (value, tree) => {
    if (tree.value > value && tree.left === undefined) {
      tree.left = newNode
    } else if (tree.value > value) {
      insertRecursive(tree.left)
    } else if (tree.value < value && tree.right === undefined) {
      tree.right = newNode
    } else if (tree.value < value) {
      insertRecursive(tree.right)
    }
}

export default insertNode