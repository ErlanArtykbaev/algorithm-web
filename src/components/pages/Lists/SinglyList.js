import React from "react"

import first from "../../../assets/img/linked-list/linked-list-concept.webp"
import ImageWrapper from "../../layer/ImageWrapper"

const SinglyList = () => {
  return (
    <div className='container'>
      <h3 className='title'>Types of Linked List - Singly linked</h3>
      <p>
        In this tutorial, you will learn different types of linked list. Also,
        you will find implementation of linked list in C.
      </p>

      <p>
        Before you learn about the type of the linked list, make sure you know
        about the LinkedList Data Structure.
      </p>
      <p>There are three common types of Linked List.</p>
      <ul>
        <li>Singly Linked List</li>
        <li>Doubly Linked List</li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>Singly Linked List</h3>
      <p>
        It is the most common. Each node has data and a pointer to the next
        node.
      </p>
      <ImageWrapper url={first} text='Singly linked list' />
      <p>Node is represented as:</p>
      <pre>
        <code className='language-java'>{`
          struct node {
            int data;
            struct node *next;
          }
        `}</code>
      </pre>
      <p>A three-member singly linked list can be created as:</p>

      <pre>
        <code className='language-java'>{`
        /* Initialize nodes */
        struct node *head;
        struct node *one = NULL;
        struct node *two = NULL;
        struct node *three = NULL;
        
        /* Allocate memory */
        one = malloc(sizeof(struct node));
        two = malloc(sizeof(struct node));
        three = malloc(sizeof(struct node));
        
        /* Assign data values */
        one->data = 1;
        two->data = 2;
        three->data = 3;
        
        /* Connect nodes */
        one->next = two;
        two->next = three;
        three->next = NULL;
        
        /* Save address of first node in head */
        head = one;
        `}</code>
      </pre>
    </div>
  )
}

export default SinglyList
