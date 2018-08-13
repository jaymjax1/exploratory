// Justin's Typescript implementation of BST 
// Methods: Creating, Adding, Searching, Traversing
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(value) {
        var _this = this;
        this.insertNode = function (currentNode, newNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                }
                else {
                    _this.insertNode(currentNode.left, newNode);
                }
            }
            if (newNode.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                }
                else {
                    _this.insertNode(currentNode.right, newNode);
                }
            }
        };
        this.root = this.createNode(value);
    }
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = this.createNode(value);
        this.insertNode(this.root, newNode);
    };
    BinarySearchTree.prototype.createNode = function (value) {
        return {
            value: value,
            right: null,
            left: null
        };
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree(5);
var values = [1, 7, 2, 5, 9, 4, 6, 28, 32, 64, 63, 99, 0];
values.map(function (n) { return tree.insert(n); });
console.dir(tree, { depth: null });
