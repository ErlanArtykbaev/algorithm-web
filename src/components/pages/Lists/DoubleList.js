import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/linked-list/doubly-linked-list-concept.webp"

const DoublyList = () => {
  return (
    <div className='container'>
      <h3 className='title'>Types of Linked List - Doubly linked</h3>
      <p>
        We add a pointer to the previous node in a doubly-linked list. Thus, we
        can go in either direction: forward or backward.
      </p>
      <ImageWrapper url={first} text='Doubly linked list' />
      <p>A node is represented as</p>
      <pre>
        <code className='language-java'>
          {`
            struct node {
              int data;
              struct node *next;
              struct node *prev;
            }
          `}
        </code>
      </pre>
      <p>A three-member doubly linked list can be created as</p>

      <pre>
        <code className='language-java'>
          {`
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
          one->prev = NULL;
          
          two->next = three;
          two->prev = one;
          
          three->next = NULL;
          three->prev = two;
          
          /* Save address of first node in head */
          head = one;
          `}
        </code>
      </pre>
      <div className='divider'></div>
    </div>
  )
}

export default DoublyList
