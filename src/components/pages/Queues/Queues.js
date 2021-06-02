import React from "react"

import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/queues/queue.webp"
import second from "../../../assets/img/queues/Big-queue.webp"
import CodePreview from "../../layer/CodePreview"

const Queues = () => {
  return (
    <div className='container'>
      <h3 className='title'>Queue Data Structure</h3>
      <p>
        A queue is a useful data structure in programming. It is similar to the
        ticket queue outside a cinema hall, where the first person entering the
        queue is the first person who gets the ticket.
      </p>
      <p>
        Queue follows the <strong>First In First Out (FIFO)</strong> rule - the
        item that goes in first is the item that comes out first. Representation
        of Queue in first in first out principle
      </p>
      <ImageWrapper
        size='big'
        url={first}
        text='FIFO Representation of Queue'
      />
      <p>
        In the above image, since 1 was kept in the queue before 2, it is the
        first to be removed from the queue as well. It follows the{" "}
        <strong>FIFO</strong>rule.
      </p>
      <p>
        In programming terms, putting items in the queue is called{" "}
        <strong>enqueue</strong>, and removing items from the queue is called{" "}
        <strong>dequeue</strong>.
      </p>
      <p>
        We can implement the queue in any programming language like C, C++,
        Java, Python or C#, but the specification is pretty much the same.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Basic Operations of Queue</h3>
      <p>
        A queue is an object (an abstract data structure - ADT) that allows the
        following operations:
      </p>
      <ul>
        <li>
          <strong>Enqueue:</strong> Add an element to the end of the queue
        </li>
        <li>
          <strong>Dequeue:</strong> Remove an element from the front of the
          queue
        </li>
        <li>
          <strong>IsEmpty:</strong> Check if the queue is empty
        </li>
        <li>
          <strong>IsFull:</strong> Check if the queue is full
        </li>
        <li>
          <strong>Peek:</strong> Get the value of the front of the queue without
          removing it
        </li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>Working of Queue</h3>
      <p>Queue operations work as follows:</p>
      <ul>
        <li>two pointers FRONT and REAR</li>
        <li>FRONT track the first element of the queue</li>
        <li>REAR track the last element of the queue</li>
        <li>initially, set value of FRONT and REAR to -1</li>
      </ul>
      <h3 className='sub-title'>Enqueue Operation</h3>
      <ul>
        <li>check if the queue is full</li>
        <li>for the first element, set the value of FRONT to 0</li>
        <li>increase the REAR index by 1</li>
        <li>add the new element in the position pointed to by REAR</li>
      </ul>
      <h3 className='sub-title'>Dequeue Operation</h3>
      <ul>
        <li>check if the queue is empty</li>
        <li>return the value pointed by FRONT</li>
        <li>increase the FRONT index by 1</li>
        <li>for the last element, reset the values of FRONT and REAR to -1</li>
      </ul>
      <ImageWrapper
        size='big'
        url={second}
        text='Enqueue and Dequeue Operations'
      />
      <div className='divider'></div>
      <h3 className='sub-title'>Queue Implementation in Java</h3>
      <CodePreview
        code={`
        // Queue implementation in Java

        public class Queue {
          int SIZE = 5;
          int items[] = new int[SIZE];
          int front, rear;
        
          Queue() {
            front = -1;
            rear = -1;
          }
        
          boolean isFull() {
            if (front == 0 && rear == SIZE - 1) {
              return true;
            }
            return false;
          }
        
          boolean isEmpty() {
            if (front == -1)
              return true;
            else
              return false;
          }
        
          void enQueue(int element) {
            if (isFull()) {
              System.out.println("Queue is full");
            } else {
              if (front == -1)
                front = 0;
              rear++;
              items[rear] = element;
              System.out.println("Inserted " + element);
            }
          }
        
          int deQueue() {
            int element;
            if (isEmpty()) {
              System.out.println("Queue is empty");
              return (-1);
            } else {
              element = items[front];
              if (front >= rear) {
                front = -1;
                rear = -1;
              } /* Q has only one element, so we reset the queue after deleting it. */
              else {
                front++;
              }
              System.out.println("Deleted -> " + element);
              return (element);
            }
          }
        
          void display() {
            /* Function to display elements of Queue */
            int i;
            if (isEmpty()) {
              System.out.println("Empty Queue");
            } else {
              System.out.println("Front index-> " + front);
              System.out.println("Items -> ");
              for (i = front; i <= rear; i++)
                System.out.print(items[i] + "  ");
        
              System.out.println("Rear index-> " + rear);
            }
          }
        
          public static void main(String[] args) {
            Queue q = new Queue();
        
            // deQueue is not possible on empty queue
            q.deQueue();
        
            // enQueue 5 elements
            q.enQueue(1);
            q.enQueue(2);
            q.enQueue(3);
            q.enQueue(4);
            q.enQueue(5);
        
            // 6th element can't be added to because the queue is full
            q.enQueue(6);
        
            q.display();
        
            // deQueue removes element entered first i.e. 1
            q.deQueue();
        
            // Now we have just 4 elements
            q.display();
        
          }
        }
      `}
      />
    </div>
  )
}

export default Queues
