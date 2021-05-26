import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/tree/insertion.webp"

const InsertTree = () => {
  return (
    <div className='container'>
      <h3 className='title'>Insertion into a B-tree</h3>
      <p>
        Inserting an element on a B-tree consists of two events: searching the
        appropriate node to insert the element and splitting the node if
        required.Insertion operation always takes place in the bottom-up
        approach.
      </p>
      <p>Let us understand these events below.</p>
      <div className='divider'></div>
      <div className='sub-title'>Insertion Operation</div>
      <p>1. If the tree is empty, allocate a root node and insert the key.</p>
      <p>2. Update the allowed number of keys in the node.</p>
      <p>3. Search the appropriate node for insertion.</p>
      <p>4. If the node is full, follow the steps below.</p>
      <p>5. Insert the elements in increasing order.</p>
      <p>
        6. Now, there are elements greater than its limit. So, split at the
        median.
      </p>
      <p>
        7. Push the median key upwards and make the left keys as a left child
        and the right keys as a right child.
      </p>
      <p>8. If the node is not full, follow the steps below.</p>
      <p>9. Insert the node in increasing order.</p>
      <div className='divider'></div>
      <h3 className='sub-title'>Insertion Example</h3>
      <p>
        Let us understand the insertion operation with the illustrations below.
      </p>
      <p>
        The elements to be inserted are 8, 9, 10, 11, 15, 16, 17, 18, 20, 23.
      </p>
      <ImageWrapper url={first} text='Inserting elements into a B-tree' />
      <div className='divider'></div>
      <h3 className='sub-title'>Algorithm for Inserting an Element</h3>
      <pre>
        <code className='language-java'>{`
        BreeInsertion(T, k)
        r  root[T]
        if n[r] = 2t - 1
            s = AllocateNode()
            root[T] = s
            leaf[s] = FALSE
            n[s] <- 0
            c1[s] <- r
            BtreeSplitChild(s, 1, r)
            BtreeInsertNonFull(s, k)
        else BtreeInsertNonFull(r, k)
        BtreeInsertNonFull(x, k)
        i = n[x]
        if leaf[x]
            while i ≥ 1 and k < keyi[x]
                keyi+1 [x] = keyi[x]
                i = i - 1
            keyi+1[x] = k
            n[x] = n[x] + 1
        else while i ≥ 1 and k < keyi[x]
                i = i - 1
            i = i + 1
            if n[ci[x]] == 2t - 1
                BtreeSplitChild(x, i, ci[x])
                if k &rt; keyi[x]
                    i = i + 1
            BtreeInsertNonFull(ci[x], k)
        BtreeSplitChild(x, i)
        BtreeSplitChild(x, i, y)
        z = AllocateNode()
        leaf[z] = leaf[y]
        n[z] = t - 1
        for j = 1 to t - 1
            keyj[z] = keyj+t[y]
        if not leaf [y]
            for j = 1 to t
                cj[z] = cj + t[y]
        n[y] = t - 1
        for j = n[x] + 1 to i + 1
            cj+1[x] = cj[x]
        ci+1[x] = z
        for j = n[x] to i
            keyj+1[x] = keyj[x]
        keyi[x] = keyt[y]
        n[x] = n[x] + 1
        `}</code>
      </pre>
      <div className='divider'></div>
      <h3 className='sub-title'>Java Example</h3>
      <pre>
        <code className='language-java'>{`
        // Inserting a key on a B-tree in Java 

        public class BTree {
        
          private int T;
        
          // Node Creation
          public class Node {
            int n;
            int key[] = new int[2 * T - 1];
            Node child[] = new Node[2 * T];
            boolean leaf = true;
        
            public int Find(int k) {
              for (int i = 0; i < this.n; i++) {
                if (this.key[i] == k) {
                  return i;
                }
              }
              return -1;
            };
          }
        
          public BTree(int t) {
            T = t;
            root = new Node();
            root.n = 0;
            root.leaf = true;
          }
        
          private Node root;
        
          // split
          private void split(Node x, int pos, Node y) {
            Node z = new Node();
            z.leaf = y.leaf;
            z.n = T - 1;
            for (int j = 0; j < T - 1; j++) {
              z.key[j] = y.key[j + T];
            }
            if (!y.leaf) {
              for (int j = 0; j < T; j++) {
                z.child[j] = y.child[j + T];
              }
            }
            y.n = T - 1;
            for (int j = x.n; j >= pos + 1; j--) {
              x.child[j + 1] = x.child[j];
            }
            x.child[pos + 1] = z;
        
            for (int j = x.n - 1; j >= pos; j--) {
              x.key[j + 1] = x.key[j];
            }
            x.key[pos] = y.key[T - 1];
            x.n = x.n + 1;
          }
        
          // insert key
          public void insert(final int key) {
            Node r = root;
            if (r.n == 2 * T - 1) {
              Node s = new Node();
              root = s;
              s.leaf = false;
              s.n = 0;
              s.child[0] = r;
              split(s, 0, r);
              _insert(s, key);
            } else {
              _insert(r, key);
            }
          }
        
          // insert node
          final private void _insert(Node x, int k) {
        
            if (x.leaf) {
              int i = 0;
              for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {
                x.key[i + 1] = x.key[i];
              }
              x.key[i + 1] = k;
              x.n = x.n + 1;
            } else {
              int i = 0;
              for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {
              }
              ;
              i++;
              Node tmp = x.child[i];
              if (tmp.n == 2 * T - 1) {
                split(x, i, tmp);
                if (k > x.key[i]) {
                  i++;
                }
              }
              _insert(x.child[i], k);
            }
        
          }
        
          public void display() {
            display(root);
          }
        
          // Display the tree
          private void display(Node x) {
            assert (x == null);
            for (int i = 0; i < x.n; i++) {
              System.out.print(x.key[i] + " ");
            }
            if (!x.leaf) {
              for (int i = 0; i < x.n + 1; i++) {
                display(x.child[i]);
              }
            }
          }
        
          public static void main(String[] args) {
            BTree b = new BTree(3);
            b.insert(8);
            b.insert(9);
            b.insert(10);
            b.insert(11);
            b.insert(15);
            b.insert(20);
            b.insert(17);
        
            b.display();
          }
        }
        `}</code>
      </pre>
    </div>
  )
}

export default InsertTree
