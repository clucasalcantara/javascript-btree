const Tree = () => {
    Tree.prototype.root = null;

    return Tree;
}
const insertNode = require('./insertNode')
const createTree = () => Tree()

export default {
    initialize: () => createTree(),
    insertNode,
}