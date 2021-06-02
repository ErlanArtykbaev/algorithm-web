import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/queues/stack-of-plates_0.webp"
import second from "../../../assets/img/queues/stack.webp"
import third from "../../../assets/img/queues/stack-operations.webp"
import CodePreview from "../../layer/CodePreview"

const WhatIsStack = () => {
  return (
    <div className='container'>
      <h3 className='title'>Stack Data Structure</h3>
      <p>
        A stack is a useful data structure in programming. It is just like a
        pile of plates kept on top of each other.
      </p>
      <ImageWrapper
        size='sm'
        url={first}
        text='Stack representation similar to a pile of plate'
      />
      <p>Think about the things you can do with such a pile of plates</p>
      <ul>
        <li>Put a new plate on top</li>
        <li>Remove the top plate</li>
      </ul>
      <p>
        If you want the plate at the bottom, you must first remove all the
        plates on top. Such an arrangement is called{" "}
        <strong> Last In First Out </strong> - the last item that is the first
        item to go out.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>LIFO Principle of Stack</h3>
      <p>
        In programming terms, putting an item on top of the stack is called{" "}
        <strong> push </strong> and removing an item is called{" "}
        <strong>pop</strong>.
      </p>
      <ImageWrapper
        size='sm'
        url={second}
        text='Stack Push and Pop Operations'
      />
      <p>
        In the above image, although item 2 was kept last, it was removed first
        - so it follows the <strong> Last In First Out(LIFO)</strong> principle.
      </p>
      <p>
        We can implement a stack in any programming language like C, C++, Java,
        Python or C#, but the specification is pretty much the same.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Basic Operations of Stack</h3>
      <p>
        A stack is an object (an abstract data type - ADT) that allows the
        following operations:
      </p>
      <ul>
        <li>
          <strong>Push: </strong> Add an element to the top of a stack
        </li>
        <li>
          <strong>Pop: </strong> Remove an element from the top of a stack
        </li>
        <li>
          <strong>IsEmpty: </strong> Check if the stack is empty
        </li>
        <li>
          <strong>IsFull: </strong> Check if the stack is full
        </li>
        <li>
          <strong>Peek: </strong> Get the value of the top element without
          removing it
        </li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>Working of Stack Data Structure</h3>
      <p>The operations work as follows:</p>
      <p>
        1. A pointer called <span className='var'>TOP</span> is used to keep
        track of the top element in the stack.
      </p>
      <p>
        2. When initializing the stack, we set its value to -1 so that we can
        check if the stack is empty by comparing{" "}
        <span className='var'>TOP == -1</span>.
      </p>
      <p>
        3. On pushing an element, we increase the value of TOP and place the new
        element in the position pointed to by <span className='var'>TOP</span>
      </p>
      <p>
        4. On popping an element, we return the element pointed to by{" "}
        <span className='var'>TOP</span> and reduce its value.
      </p>
      <p>5. Before pushing, we check if the stack is already full</p>
      <p>6. Before popping, we check if the stack is already empty</p>
      <ImageWrapper
        size='md'
        url={third}
        text='Working of Stack Data Structure'
      />
      <div className='divider'></div>
      <h3 className='sub-title'>Stack Implementation in Java</h3>
      <CodePreview
        language='java'
        code={`
        // Stack implementation in Java

        class Stack {
          private int arr[];
          private int top;
          private int capacity;
        
          // Creating a stack
          Stack(int size) {
            arr = new int[size];
            capacity = size;
            top = -1;
          }
        
          // Add elements into stack
          public void push(int x) {
            if (isFull()) {
              System.out.println("OverFlow Program Terminated ");
              System.exit(1);
            }
        
            System.out.println("Inserting " + x);
            arr[++top] = x;
          }
        
          // Remove element from stack
          public int pop() {
            if (isEmpty()) {
              System.out.println("STACK EMPTY");
              System.exit(1);
            }
            return arr[top--];
          }
        
          // Utility function to return the size of the stack
          public int size() {
            return top + 1;
          }
        
          // Check if the stack is empty
          public Boolean isEmpty() {
            return top == -1;
          }
        
          // Check if the stack is full
          public Boolean isFull() {
            return top == capacity - 1;
          }
        
          public void printStack() {
            for (int i = 0; i <= top; i++) {
              System.out.println(arr[i]);
            }
          }
        
          public static void main(String[] args) {
            Stack stack = new Stack(5);
        
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);
        
            stack.pop();
            System.out.println("After popping out");
        
            stack.printStack();
        
          }
        }
      `}
      />
      <div className='divider'></div>
      <h3 className='sub-title'>Stack Time Complexity</h3>
      <p>
        For the array-based implementation of a stack, the push and pop
        operations take constant time, i.e. <span className='var'>O(1)</span>.
      </p>
    </div>
  )
}

export default WhatIsStack
