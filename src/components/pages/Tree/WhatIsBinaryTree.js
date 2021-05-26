import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/tree/binary-tree_0.webp"
import second from "../../../assets/img/tree/full-binary-tree_0.webp"
import third from "../../../assets/img/tree/perfect-binary-tree_0.webp"
import fourth from "../../../assets/img/tree/complete-binary-tree_0.webp"
import fifth from "../../../assets/img/tree/binary-tree-representation_0.webp"

const WhatIsBinaryTree = () => {
  return (
    <div className='container'>
      <h3 className='title'>Binary Tree</h3>
      <p>
        A binary tree is a tree data structure in which each parent node can
        have at most two children. For example,
      </p>
      <ImageWrapper url={first} text='Binary Tree' />
      <div className='divider'></div>
      <h3 className='sub-title'>Types of Binary Tree</h3>
      <h3 className='sub-sub-title'>Full Binary Tree</h3>
      <p>
        A full Binary tree is a special type of binary tree in which every
        parent node/internal node has either two or no children.
      </p>
      <ImageWrapper url={second} text='Full Binary Tree' />
      <h3 className='sub-sub-title'>Perfect Binary Tree</h3>
      <p>
        A perfect binary tree is a type of binary tree in which every internal
        node has exactly two child nodes and all the leaf nodes are at the same
        level.
      </p>
      <ImageWrapper url={third} text='Perfect Binary Tree' />
      <h3 className='sub-sub-title'>Complete Binary Tree</h3>
      <p>
        A complete binary tree is just like a full binary tree, but with two
        major differences
      </p>
      <p>1. Every level must be completely filled</p>
      <p>2. All the leaf elements must lean towards the left.</p>
      <p>
        3. The last leaf element might not have a right sibling i.e. a complete
        binary tree doesn't have to be a full binary tree.
      </p>
      <ImageWrapper url={fourth} text='Complete Binary Tree' />
      <div className='divider'></div>
      <h3 className='sub-title'>Binary Tree Representation</h3>
      <p>
        A node of a binary tree is represented by a structure containing a data
        part and two pointers to other structures of the same type.
      </p>
      <pre>
        <code className='language-c'>{`
        struct node
        {
         int data;
         struct node *left;
         struct node *right;
        };
        `}</code>
      </pre>
      <ImageWrapper url={fifth} text='Binary Tree Representation' />
      <div className='divider'></div>
      <h3 className='sub-title'>Java Example</h3>
      <pre>
        <code className='language-java'>{`
        // Binary Tree in Java

        // Node creation
        class Node {
          int key;
          Node left, right;
        
          public Node(int item) {
          key = item;
          left = right = null;
          }
        }
        
        class BinaryTree {
          Node root;
        
          BinaryTree(int key) {
          root = new Node(key);
          }
        
          BinaryTree() {
          root = null;
          }
        
          // Traverse Inorder
          public void traverseInOrder(Node node) {
          if (node != null) {
            traverseInOrder(node.left);
            System.out.print(" " + node.key);
            traverseInOrder(node.right);
          }
          }
        
          // Traverse Postorder
          public void traversePostOrder(Node node) {
          if (node != null) {
            traversePostOrder(node.left);
            traversePostOrder(node.right);
            System.out.print(" " + node.key);
          }
          }
        
          // Traverse Preorder
          public void traversePreOrder(Node node) {
          if (node != null) {
            System.out.print(" " + node.key);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
          }
          }
        
          public static void main(String[] args) {
          BinaryTree tree = new BinaryTree();
        
          tree.root = new Node(1);
          tree.root.left = new Node(2);
          tree.root.right = new Node(3);
          tree.root.left.left = new Node(4);
        
          System.out.print("Pre order Traversal: ");
          tree.traversePreOrder(tree.root);
          System.out.print("In order Traversal: ");
          tree.traverseInOrder(tree.root);
          System.out.print("Post order Traversal: ");
          tree.traversePostOrder(tree.root);
          }
        }
        `}</code>
      </pre>
    </div>
  )
}

export default WhatIsBinaryTree
