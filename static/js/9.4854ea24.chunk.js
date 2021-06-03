(this["webpackJsonpalgorithm-web"]=this["webpackJsonpalgorithm-web"]||[]).push([[9],{36:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",{className:"image-wrapper"},i.a.createElement("img",{className:e.size,src:e.url,alt:e.url}),i.a.createElement("div",{className:"image-bottom"},e.text))}},37:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(731),l=n(700);t.a=function(e){var t=e.code,n=e.language;return i.a.createElement("div",{className:"Code"},i.a.createElement(r.a,{language:n,style:l.a},t))}},623:function(e,t,n){e.exports=n.p+"static/media/Introduction.32c568fb.webp"},624:function(e,t,n){e.exports=n.p+"static/media/insert-1_0.63c56663.webp"},625:function(e,t,n){e.exports=n.p+"static/media/insert-2_0.0b06cbda.webp"},626:function(e,t,n){e.exports=n.p+"static/media/delete-1_0.17282697.webp"},627:function(e,t,n){e.exports=n.p+"static/media/delete-2_0.008c33a9.webp"},628:function(e,t,n){e.exports=n.p+"static/media/delete-3.6fa7402d.webp"},629:function(e,t,n){e.exports=n.p+"static/media/delete-4.a0ba6407.webp"},719:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(36),l=n(726),s=n(623),m=n.n(s),o=n(624),u=n.n(o),c=n(625),h=n.n(c),d=n(626),p=n.n(d),y=n(627),f=n.n(y),g=n(628),E=n.n(g),v=n(629),w=n.n(v),b=n(37),x=l.a.Column;t.default=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h3",{className:"title"},"Priority Queue"),i.a.createElement("p",null,"A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue."),i.a.createElement("p",null,"Generally, the value of the element itself is considered for assigning the priority."),i.a.createElement("p",null,"For example, The element with the highest value is considered as the highest priority element. However, in other cases, we can assume the element with the lowest value as the highest priority element. In other cases, we can set priorities according to our needs."),i.a.createElement(r.a,{size:"sm",url:m.a,text:"Removing Highest Priority Element"}),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"Difference between Priority Queue and Normal Queue"),i.a.createElement("p",null,"In a queue, the first-in-first-out rule is implemented whereas, in a priority queue, the values are removed on the basis of priority. The element with the highest priority is removed first."),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"Implementation of Priority Queue"),i.a.createElement("p",null,"Priority queue can be implemented using an array, a linked list, a heap data structure, or a binary search tree. Among these data structures, heap data structure provides an efficient implementation of priority queues."),i.a.createElement("p",null,"Hence, we will be using the heap data structure to implement the priority queue in this tutorial. A max-heap is implement is in the following operations. If you want to learn more about it, please visit max-heap and mean-heap."),i.a.createElement("p",null,"A comparative analysis of different implementations of priority queue is given below."),i.a.createElement(l.a,{dataSource:[{key:"1",method:"Linked List",peek:"O(1)",insert:"O(n)",delete:"O(1)"},{key:"2",method:"Binary Heap",peek:"O(1)",insert:"O(log n)",delete:"O(log n)"},{key:"3",method:"Binary Search Tree",peek:"O(1)",insert:"O(log n)",delete:"O(log n)"}]},i.a.createElement(x,{title:"Operations",dataIndex:"method",key:"method"}),i.a.createElement(x,{title:"peek",dataIndex:"peek",key:"peek"}),i.a.createElement(x,{title:"insert",dataIndex:"insert",key:"insert"}),i.a.createElement(x,{title:"delete",dataIndex:"delete",key:"delete"})),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"Priority Queue Operations"),i.a.createElement("p",null,"Basic operations of a priority queue are inserting, removing, and peeking elements."),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"1. Inserting an Element into the Priority Queue"),i.a.createElement("p",null,"Inserting an element into a priority queue (max-heap) is done by the following steps."),i.a.createElement("ul",null,i.a.createElement("li",null,"Insert the new element at the end of the tree."),i.a.createElement(r.a,{size:"sm",url:u.a,text:"Insert an element at the end of the queue"}),i.a.createElement("li",null,"Heapify the tree. "),i.a.createElement(r.a,{size:"sm",url:h.a,text:"Insert an element at the end of the queue"})),i.a.createElement("p",null,"Algorithm for insertion of an element into priority queue (max-heap)"),i.a.createElement("pre",null,i.a.createElement("code",null,"\n          If there is no node, \n            create a newNode.\n          else (a node is already present)\n            insert the newNode at the end (last node from left to right.)\n          \n          heapify the array\n          ")),i.a.createElement("p",null,"For Min Heap, the above algorithm is modified so that parentNode is always smaller than newNode."),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"2. Deleting an Element from the Priority Queue"),i.a.createElement("p",null,"Deleting an element from a priority queue (max-heap) is done as follows:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Select the element to be deleted. "),i.a.createElement(r.a,{size:"sm",url:p.a,text:"Select the element to be deleted"}),i.a.createElement("li",null,"Swap it with the last element."),i.a.createElement(r.a,{size:"sm",url:f.a,text:"Swap with the last leaf node element"}),i.a.createElement("li",null,"Remove the last element. "),i.a.createElement(r.a,{size:"sm",url:E.a,text:"Remove the last element leaf"}),i.a.createElement("li",null,"Heapify the tree."),i.a.createElement(r.a,{size:"sm",url:w.a,text:"Heapify the priority queue"})),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"3. Peeking from the Priority Queue (Find max/min)"),i.a.createElement("p",null,"Peek operation returns the maximum element from Max Heap or minimum element from Min Heap without deleting the node."),i.a.createElement("p",null,"For both Max heap and Min Heap"),i.a.createElement("pre",null,i.a.createElement("code",null,"\n        return rootNode\n        ")),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"4. Extract-Max/Min from the Priority Queue"),i.a.createElement("p",null,"Extract-Max returns the node with maximum value after removing it from a Max Heap whereas Extract-Min returns the node with minimum value after removing it from Min Heap."),i.a.createElement("div",{className:"divider"}),i.a.createElement("h3",{className:"sub-title"},"Priority Queue Implementation in Java"),i.a.createElement(b.a,{code:'\n        // Priority Queue implementation in Java\n\n        import java.util.ArrayList;\n        \n        class Heap {\n          // Function to heapify the tree\n          void heapify(ArrayList<Integer> hT, int i) {\n            int size = hT.size();\n            // Find the largest among root, left child and right child\n            int largest = i;\n            int l = 2 * i + 1;\n            int r = 2 * i + 2;\n            if (l < size && hT.get(l) > hT.get(largest))\n              largest = l;\n            if (r < size && hT.get(r) > hT.get(largest))\n              largest = r;\n        \n            // Swap and continue heapifying if root is not largest\n            if (largest != i) {\n              int temp = hT.get(largest);\n              hT.set(largest, hT.get(i));\n              hT.set(i, temp);\n        \n              heapify(hT, largest);\n            }\n          }\n        \n          // Function to insert an element into the tree\n          void insert(ArrayList<Integer> hT, int newNum) {\n            int size = hT.size();\n            if (size == 0) {\n              hT.add(newNum);\n            } else {\n              hT.add(newNum);\n              for (int i = size / 2 - 1; i >= 0; i--) {\n                heapify(hT, i);\n              }\n            }\n          }\n        \n          // Function to delete an element from the tree\n          void deleteNode(ArrayList<Integer> hT, int num) {\n            int size = hT.size();\n            int i;\n            for (i = 0; i < size; i++) {\n              if (num == hT.get(i))\n                break;\n            }\n        \n            int temp = hT.get(i);\n            hT.set(i, hT.get(size - 1));\n            hT.set(size - 1, temp);\n        \n            hT.remove(size - 1);\n            for (int j = size / 2 - 1; j >= 0; j--) {\n              heapify(hT, j);\n            }\n          }\n        \n          // Print the tree\n          void printArray(ArrayList<Integer> array, int size) {\n            for (Integer i : array) {\n              System.out.print(i + " ");\n            }\n            System.out.println();\n          }\n        \n          // Driver code\n          public static void main(String args[]) {\n        \n            ArrayList<Integer> array = new ArrayList<Integer>();\n            int size = array.size();\n        \n            Heap h = new Heap();\n            h.insert(array, 3);\n            h.insert(array, 4);\n            h.insert(array, 9);\n            h.insert(array, 5);\n            h.insert(array, 2);\n        \n            System.out.println("Max-Heap array: ");\n            h.printArray(array, size);\n        \n            h.deleteNode(array, 4);\n            System.out.println("After deleting an element: ");\n            h.printArray(array, size);\n          }\n        }\n      ',language:"java"}))}}}]);
//# sourceMappingURL=9.4854ea24.chunk.js.map