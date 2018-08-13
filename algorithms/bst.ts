// Justin's Typescript implementation of BST 
// Methods: Creating, Adding, Searching, Traversing

class BinarySearchTree {
    private root;
    constructor(value) {
        this.root = this.createNode(value)
    }

    public getRoot() {
        return this.root;
    }

    public insert(value) {
        const newNode = this.createNode(value);
        this.insertNode(this.root, newNode);
    }

    private createNode(value) {
        return {
            value,
            right: null,
            left: null
        }
    }

    private insertNode = (currentNode, newNode) => {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        }
        if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

}

const tree = new BinarySearchTree(5);
const values = [1,7,2,5,9,4,6,28,32,64,63,99,0];
values.map(n => tree.insert(n));
console.dir(tree,{ depth: null });

