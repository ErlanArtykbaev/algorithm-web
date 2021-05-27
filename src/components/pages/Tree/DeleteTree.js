import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/tree/delete-leaf-1.webp"
import second from "../../../assets/img/tree/delete-leaf-2.webp"
import third from "../../../assets/img/tree/delete-leaf-3.webp"
import four from "../../../assets/img/tree/delete-internal-1.webp"
import five from "../../../assets/img/tree/delete-internal-2.webp"
import six from "../../../assets/img/tree/delete-internal_3.webp"

const DeleteTree = () => {
  return (
    <div className='container'>
      <h3 className='title'>Deletion from a B-tree</h3>
      <p>
        Deleting an element on a B-tree consists of three main events: searching
        the node where the key to be deleted exists, deleting the key and
        balancing the tree if required.
      </p>
      <p>
        While deleting a tree, a condition called underflow may occur. Underflow
        occurs when a node contains less than the minimum number of keys it
        should hold.
      </p>
      <p>The terms to be understood before studying deletion operation are:</p>
      <p>
        <strong>1. Inorder Predecessor</strong>
      </p>
      <p>
        The largest key on the left child of a node is called its inorder
        predecessor.
      </p>
      <p>
        <strong>2. Inorder Successor</strong>
      </p>
      <p>
        The smallest key on the right child of a node is called its inorder
        successor.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Deletion Operation</h3>
      <p>
        Before going through the steps below, one must know these facts about a
        B tree of degree m.
      </p>
      <p>1. A node can have a maximum of m children. (i.e. 3)</p>
      <p>2. A node can contain a maximum of m - 1 keys. (i.e. 2)</p>
      <p>3. A node should have a minimum of ⌈m/2⌉ children. (i.e. 2)</p>
      <p>
        4. A node (except root node) should contain a minimum of ⌈m/2⌉ - 1 keys.
        (i.e. 1)
      </p>
      <p>There are three main cases for deletion operation in a B tree.</p>
      <h3 className='sub-sub-title'>Case I</h3>
      <p>The key to be deleted lies in the leaf. There are two cases for it.</p>
      <p>
        1. The deletion of the key does not violate the property of the minimum
        number of keys a node should hold.
      </p>
      <p>
        In the tree below, deleting 32 does not violate the above properties.{" "}
      </p>
      <ImageWrapper url={first} text='Deleting a leaf key (32) from B-tree' />
      <p>
        2. The deletion of the key violates the property of the minimum number
        of keys a node should hold. In this case, we borrow a key from its
        immediate neighboring sibling node in the order of left to right.
      </p>
      <p>
        First, visit the immediate left sibling. If the left sibling node has
        more than a minimum number of keys, then borrow a key from this node.
      </p>
      <p>Else, check to borrow from the immediate right sibling node.</p>
      <p>
        In the tree below, deleting 31 results in the above condition. Let us
        borrow a key from the left sibling node.{" "}
      </p>
      <ImageWrapper url={second} text='Deleting a leaf key (31)' />
      <p>
        If both the immediate sibling nodes already have a minimum number of
        keys, then merge the node with either the left sibling node or the right
        sibling node. This merging is done through the parent node.
      </p>
      <p>Deleting 30 results in the above case.</p>
      <ImageWrapper url={third} text='Deleting a leaf key (30)' />
      <h3 className='sub-sub-title'>Case II</h3>
      <p>
        If the key to be deleted lies in the internal node, the following cases
        occur.
      </p>
      <p>
        1. The internal node, which is deleted, is replaced by an inorder
        predecessor if the left child has more than the minimum number of keys.{" "}
      </p>
      <ImageWrapper url={four} text='Deleting an internal node (33)' />
      <p>
        2. The internal node, which is deleted, is replaced by an inorder
        successor if the right child has more than the minimum number of keys.
      </p>
      <p>
        3. If either child has exactly a minimum number of keys then, merge the
        left and the right children.
      </p>

      <ImageWrapper url={five} text='Deleting an internal node (30)' />
      <p>
        After merging if the parent node has less than the minimum number of
        keys then, look for the siblings as in Case I.
      </p>
      <h3 className='sub-sub-title'>Case III</h3>
      <p>
        In this case, the height of the tree shrinks. If the target key lies in
        an internal node, and the deletion of the key leads to a fewer number of
        keys in the node (i.e. less than the minimum required), then look for
        the inorder predecessor and the inorder successor. If both the children
        contain a minimum number of keys then, borrowing cannot take place. This
        leads to Case II(3) i.e. merging the children.
      </p>
      <p>
        Again, look for the sibling to borrow a key. But, if the sibling also
        has only a minimum number of keys then, merge the node with the sibling
        along with the parent. Arrange the children accordingly (increasing
        order).
      </p>
      <ImageWrapper url={six} text='Deleting an internal node (10)' />
      <div className='divider'></div>
      <h3 className='sub-title'>Java Example</h3>
      <pre>
        <code className='language-java'>{`
        // Inserting a key on a B-tree in Java

        import java.util.Stack;
        
        public class BTree {
        
          private int T;
        
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
        
          // Search the key
          private Node Search(Node x, int key) {
            int i = 0;
            if (x == null)
              return x;
            for (i = 0; i < x.n; i++) {
              if (key < x.key[i]) {
                break;
              }
              if (key == x.key[i]) {
                return x;
              }
            }
            if (x.leaf) {
              return null;
            } else {
              return Search(x.child[i], key);
            }
          }
        
          // Split function
          private void Split(Node x, int pos, Node y) {
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
        
          // Insert the key
          public void Insert(final int key) {
            Node r = root;
            if (r.n == 2 * T - 1) {
              Node s = new Node();
              root = s;
              s.leaf = false;
              s.n = 0;
              s.child[0] = r;
              Split(s, 0, r);
              _Insert(s, key);
            } else {
              _Insert(r, key);
            }
          }
        
          // Insert the node
          final private void _Insert(Node x, int k) {
        
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
                Split(x, i, tmp);
                if (k > x.key[i]) {
                  i++;
                }
              }
              _Insert(x.child[i], k);
            }
        
          }
        
          public void Show() {
            Show(root);
          }
        
          private void Remove(Node x, int key) {
            int pos = x.Find(key);
            if (pos != -1) {
              if (x.leaf) {
                int i = 0;
                for (i = 0; i < x.n && x.key[i] != key; i++) {
                }
                ;
                for (; i < x.n; i++) {
                  if (i != 2 * T - 2) {
                    x.key[i] = x.key[i + 1];
                  }
                }
                x.n--;
                return;
              }
              if (!x.leaf) {
        
                Node pred = x.child[pos];
                int predKey = 0;
                if (pred.n >= T) {
                  for (;;) {
                    if (pred.leaf) {
                      System.out.println(pred.n);
                      predKey = pred.key[pred.n - 1];
                      break;
                    } else {
                      pred = pred.child[pred.n];
                    }
                  }
                  Remove(pred, predKey);
                  x.key[pos] = predKey;
                  return;
                }
        
                Node nextNode = x.child[pos + 1];
                if (nextNode.n >= T) {
                  int nextKey = nextNode.key[0];
                  if (!nextNode.leaf) {
                    nextNode = nextNode.child[0];
                    for (;;) {
                      if (nextNode.leaf) {
                        nextKey = nextNode.key[nextNode.n - 1];
                        break;
                      } else {
                        nextNode = nextNode.child[nextNode.n];
                      }
                    }
                  }
                  Remove(nextNode, nextKey);
                  x.key[pos] = nextKey;
                  return;
                }
        
                int temp = pred.n + 1;
                pred.key[pred.n++] = x.key[pos];
                for (int i = 0, j = pred.n; i < nextNode.n; i++) {
                  pred.key[j++] = nextNode.key[i];
                  pred.n++;
                }
                for (int i = 0; i < nextNode.n + 1; i++) {
                  pred.child[temp++] = nextNode.child[i];
                }
        
                x.child[pos] = pred;
                for (int i = pos; i < x.n; i++) {
                  if (i != 2 * T - 2) {
                    x.key[i] = x.key[i + 1];
                  }
                }
                for (int i = pos + 1; i < x.n + 1; i++) {
                  if (i != 2 * T - 1) {
                    x.child[i] = x.child[i + 1];
                  }
                }
                x.n--;
                if (x.n == 0) {
                  if (x == root) {
                    root = x.child[0];
                  }
                  x = x.child[0];
                }
                Remove(pred, key);
                return;
              }
            } else {
              for (pos = 0; pos < x.n; pos++) {
                if (x.key[pos] > key) {
                  break;
                }
              }
              Node tmp = x.child[pos];
              if (tmp.n >= T) {
                Remove(tmp, key);
                return;
              }
              if (true) {
                Node nb = null;
                int devider = -1;
        
                if (pos != x.n && x.child[pos + 1].n >= T) {
                  devider = x.key[pos];
                  nb = x.child[pos + 1];
                  x.key[pos] = nb.key[0];
                  tmp.key[tmp.n++] = devider;
                  tmp.child[tmp.n] = nb.child[0];
                  for (int i = 1; i < nb.n; i++) {
                    nb.key[i - 1] = nb.key[i];
                  }
                  for (int i = 1; i <= nb.n; i++) {
                    nb.child[i - 1] = nb.child[i];
                  }
                  nb.n--;
                  Remove(tmp, key);
                  return;
                } else if (pos != 0 && x.child[pos - 1].n >= T) {
        
                  devider = x.key[pos - 1];
                  nb = x.child[pos - 1];
                  x.key[pos - 1] = nb.key[nb.n - 1];
                  Node child = nb.child[nb.n];
                  nb.n--;
        
                  for (int i = tmp.n; i > 0; i--) {
                    tmp.key[i] = tmp.key[i - 1];
                  }
                  tmp.key[0] = devider;
                  for (int i = tmp.n + 1; i > 0; i--) {
                    tmp.child[i] = tmp.child[i - 1];
                  }
                  tmp.child[0] = child;
                  tmp.n++;
                  Remove(tmp, key);
                  return;
                } else {
                  Node lt = null;
                  Node rt = null;
                  boolean last = false;
                  if (pos != x.n) {
                    devider = x.key[pos];
                    lt = x.child[pos];
                    rt = x.child[pos + 1];
                  } else {
                    devider = x.key[pos - 1];
                    rt = x.child[pos];
                    lt = x.child[pos - 1];
                    last = true;
                    pos--;
                  }
                  for (int i = pos; i < x.n - 1; i++) {
                    x.key[i] = x.key[i + 1];
                  }
                  for (int i = pos + 1; i < x.n; i++) {
                    x.child[i] = x.child[i + 1];
                  }
                  x.n--;
                  lt.key[lt.n++] = devider;
        
                  for (int i = 0, j = lt.n; i < rt.n + 1; i++, j++) {
                    if (i < rt.n) {
                      lt.key[j] = rt.key[i];
                    }
                    lt.child[j] = rt.child[i];
                  }
                  lt.n += rt.n;
                  if (x.n == 0) {
                    if (x == root) {
                      root = x.child[0];
                    }
                    x = x.child[0];
                  }
                  Remove(lt, key);
                  return;
                }
              }
            }
          }
        
          public void Remove(int key) {
            Node x = Search(root, key);
            if (x == null) {
              return;
            }
            Remove(root, key);
          }
        
          public void Task(int a, int b) {
            Stack<Integer> st = new Stack<>();
            FindKeys(a, b, root, st);
            while (st.isEmpty() == false) {
              this.Remove(root, st.pop());
            }
          }
        
          private void FindKeys(int a, int b, Node x, Stack<Integer> st) {
            int i = 0;
            for (i = 0; i < x.n && x.key[i] < b; i++) {
              if (x.key[i] > a) {
                st.push(x.key[i]);
              }
            }
            if (!x.leaf) {
              for (int j = 0; j < i + 1; j++) {
                FindKeys(a, b, x.child[j], st);
              }
            }
          }
        
          public boolean Contain(int k) {
            if (this.Search(root, k) != null) {
              return true;
            } else {
              return false;
            }
          }
        
          // Show the node
          private void Show(Node x) {
            assert (x == null);
            for (int i = 0; i < x.n; i++) {
              System.out.print(x.key[i] + " ");
            }
            if (!x.leaf) {
              for (int i = 0; i < x.n + 1; i++) {
                Show(x.child[i]);
              }
            }
          }
        
          public static void main(String[] args) {
            BTree b = new BTree(3);
            b.Insert(8);
            b.Insert(9);
            b.Insert(10);
            b.Insert(11);
            b.Insert(15);
            b.Insert(20);
            b.Insert(17);
        
            b.Show();
        
            b.Remove(10);
            System.out.println();
            b.Show();
          }
        }
        `}</code>
      </pre>
      <div className='divider'></div>
      <h3 className='sub-title'>Deletion Complexity</h3>
      <p>Best case Time complexity: Θ(log n)</p>
      <p>Average case Space complexity: Θ(n)</p>
      <p>Worst case Space complexity: Θ(n)</p>
    </div>
  )
}

export default DeleteTree
