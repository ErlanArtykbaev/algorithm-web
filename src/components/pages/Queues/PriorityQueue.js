import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"
import { Table } from "antd"

import first from "../../../assets/img/queues/Introduction.webp"
import second from "../../../assets/img/queues/insert-1_0.webp"
import third from "../../../assets/img/queues/insert-2_0.webp"
import fourth from "../../../assets/img/queues/delete-1_0.webp"
import fifth from "../../../assets/img/queues/delete-2_0.webp"
import six from "../../../assets/img/queues/delete-3.webp"
import seven from "../../../assets/img/queues/delete-4.webp"

const { Column } = Table
const PriorityQueue = () => {
  const data = [
    {
      key: "1",
      method: "Linked List",
      peek: "O(1)",
      insert: "O(n)",
      delete: "O(1)",
    },
    {
      key: "2",
      method: "Binary Heap",
      peek: "O(1)",
      insert: "O(log n)",
      delete: "O(log n)",
    },
    {
      key: "3",
      method: "Binary Search Tree",
      peek: "O(1)",
      insert: "O(log n)",
      delete: "O(log n)",
    },
  ]
  return (
    <div className='container'>
      <h3 className='title'>Priority Queue</h3>
      <p>
        A priority queue is a special type of queue in which each element is
        associated with a priority and is served according to its priority. If
        elements with the same priority occur, they are served according to
        their order in the queue.
      </p>
      <p>
        Generally, the value of the element itself is considered for assigning
        the priority.
      </p>
      <p>
        For example, The element with the highest value is considered as the
        highest priority element. However, in other cases, we can assume the
        element with the lowest value as the highest priority element. In other
        cases, we can set priorities according to our needs.
      </p>
      <ImageWrapper url={first} text='Removing Highest Priority Element' />
      <div className='divider'></div>
      <h3 className='sub-title'>
        Difference between Priority Queue and Normal Queue
      </h3>
      <p>
        In a queue, the first-in-first-out rule is implemented whereas, in a
        priority queue, the values are removed on the basis of priority. The
        element with the highest priority is removed first.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Implementation of Priority Queue</h3>
      <p>
        Priority queue can be implemented using an array, a linked list, a heap
        data structure, or a binary search tree. Among these data structures,
        heap data structure provides an efficient implementation of priority
        queues.
      </p>
      <p>
        Hence, we will be using the heap data structure to implement the
        priority queue in this tutorial. A max-heap is implement is in the
        following operations. If you want to learn more about it, please visit
        max-heap and mean-heap.
      </p>
      <p>
        A comparative analysis of different implementations of priority queue is
        given below.
      </p>
      <Table dataSource={data}>
        <Column title='Operations' dataIndex='method' key='method' />
        <Column title='peek' dataIndex='peek' key='peek' />
        <Column title='insert' dataIndex='insert' key='insert' />
        <Column title='delete' dataIndex='delete' key='delete' />
      </Table>
      <div className='divider'></div>
      <h3 className='sub-title'>Priority Queue Operations</h3>
      <p>
        Basic operations of a priority queue are inserting, removing, and
        peeking elements.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>
        1. Inserting an Element into the Priority Queue
      </h3>
      <p>
        Inserting an element into a priority queue (max-heap) is done by the
        following steps.
      </p>
      <ul>
        <li>Insert the new element at the end of the tree.</li>
        <ImageWrapper
          url={second}
          text='Insert an element at the end of the queue'
        />
        <li>Heapify the tree. </li>
        <ImageWrapper
          url={third}
          text='Insert an element at the end of the queue'
        />
      </ul>
      <p>
        Algorithm for insertion of an element into priority queue (max-heap)
      </p>
      <pre>
        <code>
          {`
          If there is no node, 
            create a newNode.
          else (a node is already present)
            insert the newNode at the end (last node from left to right.)
          
          heapify the array
          `}
        </code>
      </pre>
      <p>
        For Min Heap, the above algorithm is modified so that parentNode is
        always smaller than newNode.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>
        2. Deleting an Element from the Priority Queue
      </h3>
      <p>
        Deleting an element from a priority queue (max-heap) is done as follows:
      </p>

      <ul>
        <li>Select the element to be deleted. </li>
        <ImageWrapper url={fourth} text='Select the element to be deleted' />
        <li>Swap it with the last element.</li>
        <ImageWrapper url={fifth} text='Swap with the last leaf node element' />
        <li>Remove the last element. </li>
        <ImageWrapper url={six} text='Remove the last element leaf' />
        <li>Heapify the tree.</li>
        <ImageWrapper url={seven} text='Heapify the priority queue' />
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>
        3. Peeking from the Priority Queue (Find max/min)
      </h3>
      <p>
        Peek operation returns the maximum element from Max Heap or minimum
        element from Min Heap without deleting the node.
      </p>
      <p>For both Max heap and Min Heap</p>
      <pre>
        <code>{`
        return rootNode
        `}</code>
      </pre>
      <div className='divider'></div>
      <h3 className='sub-title'>4. Extract-Max/Min from the Priority Queue</h3>
      <p>
        Extract-Max returns the node with maximum value after removing it from a
        Max Heap whereas Extract-Min returns the node with minimum value after
        removing it from Min Heap.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Priority Queue Implementation in Java</h3>
      <pre>
        <code className='language-java'>{`
        // Priority Queue implementation in Java

        import java.util.ArrayList;
        
        class Heap {
          // Function to heapify the tree
          void heapify(ArrayList<Integer> hT, int i) {
            int size = hT.size();
            // Find the largest among root, left child and right child
            int largest = i;
            int l = 2 * i + 1;
            int r = 2 * i + 2;
            if (l < size && hT.get(l) > hT.get(largest))
              largest = l;
            if (r < size && hT.get(r) > hT.get(largest))
              largest = r;
        
            // Swap and continue heapifying if root is not largest
            if (largest != i) {
              int temp = hT.get(largest);
              hT.set(largest, hT.get(i));
              hT.set(i, temp);
        
              heapify(hT, largest);
            }
          }
        
          // Function to insert an element into the tree
          void insert(ArrayList<Integer> hT, int newNum) {
            int size = hT.size();
            if (size == 0) {
              hT.add(newNum);
            } else {
              hT.add(newNum);
              for (int i = size / 2 - 1; i >= 0; i--) {
                heapify(hT, i);
              }
            }
          }
        
          // Function to delete an element from the tree
          void deleteNode(ArrayList<Integer> hT, int num) {
            int size = hT.size();
            int i;
            for (i = 0; i < size; i++) {
              if (num == hT.get(i))
                break;
            }
        
            int temp = hT.get(i);
            hT.set(i, hT.get(size - 1));
            hT.set(size - 1, temp);
        
            hT.remove(size - 1);
            for (int j = size / 2 - 1; j >= 0; j--) {
              heapify(hT, j);
            }
          }
        
          // Print the tree
          void printArray(ArrayList<Integer> array, int size) {
            for (Integer i : array) {
              System.out.print(i + " ");
            }
            System.out.println();
          }
        
          // Driver code
          public static void main(String args[]) {
        
            ArrayList<Integer> array = new ArrayList<Integer>();
            int size = array.size();
        
            Heap h = new Heap();
            h.insert(array, 3);
            h.insert(array, 4);
            h.insert(array, 9);
            h.insert(array, 5);
            h.insert(array, 2);
        
            System.out.println("Max-Heap array: ");
            h.printArray(array, size);
        
            h.deleteNode(array, 4);
            System.out.println("After deleting an element: ");
            h.printArray(array, size);
          }
        }
        `}</code>
      </pre>
    </div>
  )
}

export default PriorityQueue
