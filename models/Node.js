const Node = (value) => {
    const node = Object.create(Node.prototype)

    node.value = value
    node.right = null
    node.left = null

    return node
}

export default Node
