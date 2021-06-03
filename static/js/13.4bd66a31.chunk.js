(this["webpackJsonpalgorithm-web"]=this["webpackJsonpalgorithm-web"]||[]).push([[13],{36:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",{className:"image-wrapper"},a.a.createElement("img",{className:e.size,src:e.url,alt:e.url}),a.a.createElement("div",{className:"image-bottom"},e.text))}},37:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(716),i=r(688);t.a=function(e){var t=e.code,r=e.language;return a.a.createElement("div",{className:"Code"},a.a.createElement(l.a,{language:r,style:i.a},t))}},627:function(e,t,r){e.exports=r.p+"static/media/binary-tree_0.9117eec4.webp"},628:function(e,t,r){e.exports=r.p+"static/media/full-binary-tree_0.0cd7b705.webp"},629:function(e,t,r){e.exports=r.p+"static/media/perfect-binary-tree_0.7890e776.webp"},630:function(e,t,r){e.exports=r.p+"static/media/complete-binary-tree_0.02b0ea3c.webp"},631:function(e,t,r){e.exports=r.p+"static/media/binary-tree-representation_0.64c5f037.webp"},709:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(36),i=r(627),s=r.n(i),o=r(628),c=r.n(o),d=r(629),m=r.n(d),u=r(630),p=r.n(u),y=r(631),v=r.n(y),b=r(37);t.default=function(){return a.a.createElement("div",{className:"container"},a.a.createElement("h3",{className:"title"},"Binary Tree"),a.a.createElement("p",null,"A binary tree is a tree data structure in which each parent node can have at most two children. For example,"),a.a.createElement(l.a,{size:"sm",url:s.a,text:"Binary Tree"}),a.a.createElement("div",{className:"divider"}),a.a.createElement("h3",{className:"sub-title"},"Types of Binary Tree"),a.a.createElement("h3",{className:"sub-sub-title"},"Full Binary Tree"),a.a.createElement("p",null,"A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children."),a.a.createElement(l.a,{size:"sm",url:c.a,text:"Full Binary Tree"}),a.a.createElement("h3",{className:"sub-sub-title"},"Perfect Binary Tree"),a.a.createElement("p",null,"A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level."),a.a.createElement(l.a,{size:"sm",url:m.a,text:"Perfect Binary Tree"}),a.a.createElement("h3",{className:"sub-sub-title"},"Complete Binary Tree"),a.a.createElement("p",null,"A complete binary tree is just like a full binary tree, but with two major differences"),a.a.createElement("p",null,"1. Every level must be completely filled"),a.a.createElement("p",null,"2. All the leaf elements must lean towards the left."),a.a.createElement("p",null,"3. The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree."),a.a.createElement(l.a,{size:"sm",url:p.a,text:"Complete Binary Tree"}),a.a.createElement("div",{className:"divider"}),a.a.createElement("h3",{className:"sub-title"},"Binary Tree Representation"),a.a.createElement("p",null,"A node of a binary tree is represented by a structure containing a data part and two pointers to other structures of the same type."),a.a.createElement(b.a,{code:"\n        struct node\n        {\n         int data;\n         struct node *left;\n         struct node *right;\n        };\n        ",language:"c"}),a.a.createElement(l.a,{size:"md",url:v.a,text:"Binary Tree Representation"}),a.a.createElement("div",{className:"divider"}),a.a.createElement("h3",{className:"sub-title"},"Java Example"),a.a.createElement(b.a,{code:'\n        // Binary Tree in Java\n\n        // Node creation\n        class Node {\n          int key;\n          Node left, right;\n        \n          public Node(int item) {\n          key = item;\n          left = right = null;\n          }\n        }\n        \n        class BinaryTree {\n          Node root;\n        \n          BinaryTree(int key) {\n          root = new Node(key);\n          }\n        \n          BinaryTree() {\n          root = null;\n          }\n        \n          // Traverse Inorder\n          public void traverseInOrder(Node node) {\n          if (node != null) {\n            traverseInOrder(node.left);\n            System.out.print(" " + node.key);\n            traverseInOrder(node.right);\n          }\n          }\n        \n          // Traverse Postorder\n          public void traversePostOrder(Node node) {\n          if (node != null) {\n            traversePostOrder(node.left);\n            traversePostOrder(node.right);\n            System.out.print(" " + node.key);\n          }\n          }\n        \n          // Traverse Preorder\n          public void traversePreOrder(Node node) {\n          if (node != null) {\n            System.out.print(" " + node.key);\n            traversePreOrder(node.left);\n            traversePreOrder(node.right);\n          }\n          }\n        \n          public static void main(String[] args) {\n          BinaryTree tree = new BinaryTree();\n        \n          tree.root = new Node(1);\n          tree.root.left = new Node(2);\n          tree.root.right = new Node(3);\n          tree.root.left.left = new Node(4);\n        \n          System.out.print("Pre order Traversal: ");\n          tree.traversePreOrder(tree.root);\n          System.out.print("In order Traversal: ");\n          tree.traverseInOrder(tree.root);\n          System.out.print("Post order Traversal: ");\n          tree.traversePostOrder(tree.root);\n          }\n        }\n        ',language:"java"}))}}}]);
//# sourceMappingURL=13.4bd66a31.chunk.js.map