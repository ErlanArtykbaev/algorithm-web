import React, { useEffect } from "react"
import ImageWrapper from "../../layer/ImageWrapper"
import { Table } from "antd"
import Prism from "prismjs"

import first from "../../../assets/img/linked-list/linked-list-concept.webp"
import second from "../../../assets/img/linked-list/linked-list-with-data.webp"
import CodePreview from "../../layer/CodePreview"

const { Column } = Table

const WhatIsList = () => {
  const data = [
    {
      key: "1",
      method: "Search",
      worst: "O(n)",
      best: "O(n)",
    },
    {
      key: "2",
      method: "Insert",
      worst: "O(1)",
      best: "O(1)",
    },
    {
      key: "3",
      method: "Deletion",
      worst: "O(1)",
      best: "O(1)",
    },
  ]
  const javaCode = `
          // Linked list implementation in Java

          class LinkedList {
            // Creating a node
            Node head;

            static class Node {
              int value;
              Node next;

              Node(int d) {
                value = d;
                next = null;
              }
            }

            public static void main(String[] args) {
              LinkedList linkedList = new LinkedList();

              // Assign value values
              linkedList.head = new Node(1);
              Node second = new Node(2);
              Node third = new Node(3);

              // Connect nodess
              linkedList.head.next = second;
              second.next = third;

              // printing node-value
              while (linkedList.head != null) {
                System.out.print(linkedList.head.value + " ");
                linkedList.head = linkedList.head.next;
              }
            }
          }
  `.trim()

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

  return (
    <div className='container'>
      <h3 className='title'>Linked list Data Structure</h3>
      <p>
        A linked list data structure includes a series of connected nodes. Here,
        each node store the data and the address of the next node. For example,
      </p>
      <ImageWrapper url={first} text={"Linked list Data Structure"} />
      <p>
        You have to start somewhere, so we give the address of the first node a
        special name called <span className='var'>HEAD</span>
      </p>
      <p>
        Also, the last node in the linked list can be identified because its
        next portion points to
        <span className='var'>NULL</span>
      </p>
      <p>
        You might have played the game Treasure Hunt, where each clue includes
        the information about the next clue. That is how the linked list
        operates.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Representation of Linked List</h3>
      <p>
        Let's see how each node of the linked list is represented. Each node
        consists:
      </p>
      <ul>
        <li>A data item</li>
        <li>An address of another node</li>
      </ul>
      <p>
        We wrap both the data item and the next node reference in a struct as:
      </p>
      <CodePreview
        code={`
        struct node
        {
          int data;
          struct node *next;
        }
      `}
        language='c'
      />
      <p>
        Understanding the structure of a linked list node is the key to having a
        grasp on it.
      </p>
      <p>
        Each struct node has a data item and a pointer to another struct node.
        Let us create a simple Linked List with three items to understand how
        this works.
      </p>
      <CodePreview
        code={`
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
        three->data=3;
        
        /* Connect nodes */
        one->next = two;
        two->next = three;
        three->next = NULL;
        
        /* Save address of first node in head */
        head = one;
      `}
        language='c'
      />
      <p>
        In just a few steps, we have created a simple linked list with three
        nodes.
      </p>
      <ImageWrapper url={second} text='Связанный список. Представление.' />
      <p>
        The power of a linked list comes from the ability to break the chain and
        rejoin it. E.g. if you wanted to put an element 4 between 1 and 2, the
        steps would be:
      </p>
      <ul>
        <li>Create a new struct node and allocate memory to it.</li>
        <li>Add its data value as 4</li>
        <li>
          Point its next pointer to the struct node containing 2 as the data
          value
        </li>
        <li>Change the next pointer of "1" to the node we just created.</li>
      </ul>
      <p>
        Doing something similar in an array would have required shifting the
        positions of all the subsequent elements.
      </p>
      <p>
        In python and Java, the linked list can be implemented using classes as
        shown in the codes below.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Linked List Utility</h3>
      <p>
        Lists are one of the most popular and efficient data structures, with
        implementation in every programming language like C, C++, Python, Java,
        and C#.
      </p>
      <p>
        Apart from that, linked lists are a great way to learn how pointers
        work. By practicing how to manipulate linked lists, you can prepare
        yourself to learn more advanced data structures like graphs and trees.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Linked List Implementation in Java Example</h3>

      <CodePreview code={javaCode} language='java' />
      <div className='divider'></div>
      <h3 className='sub-title'>Linked List Complexity</h3>
      <p>Time Complexity</p>
      <Table dataSource={data}>
        <Column title='Method' dataIndex='method' key='method' />
        <Column title='Worst case' dataIndex='worst' key='wors' />
        <Column title='Average case' dataIndex='best' key='best' />
      </Table>
    </div>
  )
}

export default WhatIsList
