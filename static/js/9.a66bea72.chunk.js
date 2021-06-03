(this["webpackJsonpalgorithm-web"]=this["webpackJsonpalgorithm-web"]||[]).push([[9],{36:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:e.size,src:e.url,alt:e.url}),r.a.createElement("div",{className:"image-bottom"},e.text))}},37:function(e,n,t){"use strict";var i=t(0),r=t.n(i),l=t(711),o=t(684);n.a=function(e){var n=e.code,t=e.language;return r.a.createElement("div",{className:"Code"},r.a.createElement(l.a,{language:t,style:o.a},n))}},616:function(e,n,t){e.exports=t.p+"static/media/delete-leaf-1.d8058d65.webp"},617:function(e,n,t){e.exports=t.p+"static/media/delete-leaf-2.de109216.webp"},618:function(e,n,t){e.exports=t.p+"static/media/delete-leaf-3.8b5581e3.webp"},619:function(e,n,t){e.exports=t.p+"static/media/delete-internal-1.ef7eb413.webp"},620:function(e,n,t){e.exports=t.p+"static/media/delete-internal-2.76874c7b.webp"},621:function(e,n,t){e.exports=t.p+"static/media/delete-internal_3.94d286ac.webp"},703:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),l=t(36),o=t(616),a=t.n(o),s=t(617),d=t.n(s),c=t(618),h=t.n(c),m=t(619),p=t.n(m),f=t(620),u=t.n(f),x=t(621),y=t.n(x),k=t(37);n.default=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title"},"Deletion from a B-tree"),r.a.createElement("p",null,"Deleting an element on a B-tree consists of three main events: searching the node where the key to be deleted exists, deleting the key and balancing the tree if required."),r.a.createElement("p",null,"While deleting a tree, a condition called underflow may occur. Underflow occurs when a node contains less than the minimum number of keys it should hold."),r.a.createElement("p",null,"The terms to be understood before studying deletion operation are:"),r.a.createElement("p",null,r.a.createElement("strong",null,"1. Inorder Predecessor")),r.a.createElement("p",null,"The largest key on the left child of a node is called its inorder predecessor."),r.a.createElement("p",null,r.a.createElement("strong",null,"2. Inorder Successor")),r.a.createElement("p",null,"The smallest key on the right child of a node is called its inorder successor."),r.a.createElement("div",{className:"divider"}),r.a.createElement("h3",{className:"sub-title"},"Deletion Operation"),r.a.createElement("p",null,"Before going through the steps below, one must know these facts about a B tree of degree m."),r.a.createElement("p",null,"1. A node can have a maximum of m children. (i.e. 3)"),r.a.createElement("p",null,"2. A node can contain a maximum of m - 1 keys. (i.e. 2)"),r.a.createElement("p",null,"3. A node should have a minimum of \u2308m/2\u2309 children. (i.e. 2)"),r.a.createElement("p",null,"4. A node (except root node) should contain a minimum of \u2308m/2\u2309 - 1 keys. (i.e. 1)"),r.a.createElement("p",null,"There are three main cases for deletion operation in a B tree."),r.a.createElement("h3",{className:"sub-sub-title"},"Case I"),r.a.createElement("p",null,"The key to be deleted lies in the leaf. There are two cases for it."),r.a.createElement("p",null,"1. The deletion of the key does not violate the property of the minimum number of keys a node should hold."),r.a.createElement("p",null,"In the tree below, deleting 32 does not violate the above properties."," "),r.a.createElement(l.a,{size:"big",url:a.a,text:"Deleting a leaf key (32) from B-tree"}),r.a.createElement("p",null,"2. The deletion of the key violates the property of the minimum number of keys a node should hold. In this case, we borrow a key from its immediate neighboring sibling node in the order of left to right."),r.a.createElement("p",null,"First, visit the immediate left sibling. If the left sibling node has more than a minimum number of keys, then borrow a key from this node."),r.a.createElement("p",null,"Else, check to borrow from the immediate right sibling node."),r.a.createElement("p",null,"In the tree below, deleting 31 results in the above condition. Let us borrow a key from the left sibling node."," "),r.a.createElement(l.a,{size:"big",url:d.a,text:"Deleting a leaf key (31)"}),r.a.createElement("p",null,"If both the immediate sibling nodes already have a minimum number of keys, then merge the node with either the left sibling node or the right sibling node. This merging is done through the parent node."),r.a.createElement("p",null,"Deleting 30 results in the above case."),r.a.createElement(l.a,{size:"big",url:h.a,text:"Deleting a leaf key (30)"}),r.a.createElement("h3",{className:"sub-sub-title"},"Case II"),r.a.createElement("p",null,"If the key to be deleted lies in the internal node, the following cases occur."),r.a.createElement("p",null,"1. The internal node, which is deleted, is replaced by an inorder predecessor if the left child has more than the minimum number of keys."," "),r.a.createElement(l.a,{size:"big",url:p.a,text:"Deleting an internal node (33)"}),r.a.createElement("p",null,"2. The internal node, which is deleted, is replaced by an inorder successor if the right child has more than the minimum number of keys."),r.a.createElement("p",null,"3. If either child has exactly a minimum number of keys then, merge the left and the right children."),r.a.createElement(l.a,{size:"big",url:u.a,text:"Deleting an internal node (30)"}),r.a.createElement("p",null,"After merging if the parent node has less than the minimum number of keys then, look for the siblings as in Case I."),r.a.createElement("h3",{className:"sub-sub-title"},"Case III"),r.a.createElement("p",null,"In this case, the height of the tree shrinks. If the target key lies in an internal node, and the deletion of the key leads to a fewer number of keys in the node (i.e. less than the minimum required), then look for the inorder predecessor and the inorder successor. If both the children contain a minimum number of keys then, borrowing cannot take place. This leads to Case II(3) i.e. merging the children."),r.a.createElement("p",null,"Again, look for the sibling to borrow a key. But, if the sibling also has only a minimum number of keys then, merge the node with the sibling along with the parent. Arrange the children accordingly (increasing order)."),r.a.createElement(l.a,{size:"big",url:y.a,text:"Deleting an internal node (10)"}),r.a.createElement("div",{className:"divider"}),r.a.createElement("h3",{className:"sub-title"},"Java Example"),r.a.createElement(k.a,{language:"java",code:'\n        // Inserting a key on a B-tree in Java\n\n        import java.util.Stack;\n        \n        public class BTree {\n        \n          private int T;\n        \n          public class Node {\n            int n;\n            int key[] = new int[2 * T - 1];\n            Node child[] = new Node[2 * T];\n            boolean leaf = true;\n        \n            public int Find(int k) {\n              for (int i = 0; i < this.n; i++) {\n                if (this.key[i] == k) {\n                  return i;\n                }\n              }\n              return -1;\n            };\n          }\n        \n          public BTree(int t) {\n            T = t;\n            root = new Node();\n            root.n = 0;\n            root.leaf = true;\n          }\n        \n          private Node root;\n        \n          // Search the key\n          private Node Search(Node x, int key) {\n            int i = 0;\n            if (x == null)\n              return x;\n            for (i = 0; i < x.n; i++) {\n              if (key < x.key[i]) {\n                break;\n              }\n              if (key == x.key[i]) {\n                return x;\n              }\n            }\n            if (x.leaf) {\n              return null;\n            } else {\n              return Search(x.child[i], key);\n            }\n          }\n        \n          // Split function\n          private void Split(Node x, int pos, Node y) {\n            Node z = new Node();\n            z.leaf = y.leaf;\n            z.n = T - 1;\n            for (int j = 0; j < T - 1; j++) {\n              z.key[j] = y.key[j + T];\n            }\n            if (!y.leaf) {\n              for (int j = 0; j < T; j++) {\n                z.child[j] = y.child[j + T];\n              }\n            }\n            y.n = T - 1;\n            for (int j = x.n; j >= pos + 1; j--) {\n              x.child[j + 1] = x.child[j];\n            }\n            x.child[pos + 1] = z;\n        \n            for (int j = x.n - 1; j >= pos; j--) {\n              x.key[j + 1] = x.key[j];\n            }\n            x.key[pos] = y.key[T - 1];\n            x.n = x.n + 1;\n          }\n        \n          // Insert the key\n          public void Insert(final int key) {\n            Node r = root;\n            if (r.n == 2 * T - 1) {\n              Node s = new Node();\n              root = s;\n              s.leaf = false;\n              s.n = 0;\n              s.child[0] = r;\n              Split(s, 0, r);\n              _Insert(s, key);\n            } else {\n              _Insert(r, key);\n            }\n          }\n        \n          // Insert the node\n          final private void _Insert(Node x, int k) {\n        \n            if (x.leaf) {\n              int i = 0;\n              for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {\n                x.key[i + 1] = x.key[i];\n              }\n              x.key[i + 1] = k;\n              x.n = x.n + 1;\n            } else {\n              int i = 0;\n              for (i = x.n - 1; i >= 0 && k < x.key[i]; i--) {\n              }\n              ;\n              i++;\n              Node tmp = x.child[i];\n              if (tmp.n == 2 * T - 1) {\n                Split(x, i, tmp);\n                if (k > x.key[i]) {\n                  i++;\n                }\n              }\n              _Insert(x.child[i], k);\n            }\n        \n          }\n        \n          public void Show() {\n            Show(root);\n          }\n        \n          private void Remove(Node x, int key) {\n            int pos = x.Find(key);\n            if (pos != -1) {\n              if (x.leaf) {\n                int i = 0;\n                for (i = 0; i < x.n && x.key[i] != key; i++) {\n                }\n                ;\n                for (; i < x.n; i++) {\n                  if (i != 2 * T - 2) {\n                    x.key[i] = x.key[i + 1];\n                  }\n                }\n                x.n--;\n                return;\n              }\n              if (!x.leaf) {\n        \n                Node pred = x.child[pos];\n                int predKey = 0;\n                if (pred.n >= T) {\n                  for (;;) {\n                    if (pred.leaf) {\n                      System.out.println(pred.n);\n                      predKey = pred.key[pred.n - 1];\n                      break;\n                    } else {\n                      pred = pred.child[pred.n];\n                    }\n                  }\n                  Remove(pred, predKey);\n                  x.key[pos] = predKey;\n                  return;\n                }\n        \n                Node nextNode = x.child[pos + 1];\n                if (nextNode.n >= T) {\n                  int nextKey = nextNode.key[0];\n                  if (!nextNode.leaf) {\n                    nextNode = nextNode.child[0];\n                    for (;;) {\n                      if (nextNode.leaf) {\n                        nextKey = nextNode.key[nextNode.n - 1];\n                        break;\n                      } else {\n                        nextNode = nextNode.child[nextNode.n];\n                      }\n                    }\n                  }\n                  Remove(nextNode, nextKey);\n                  x.key[pos] = nextKey;\n                  return;\n                }\n        \n                int temp = pred.n + 1;\n                pred.key[pred.n++] = x.key[pos];\n                for (int i = 0, j = pred.n; i < nextNode.n; i++) {\n                  pred.key[j++] = nextNode.key[i];\n                  pred.n++;\n                }\n                for (int i = 0; i < nextNode.n + 1; i++) {\n                  pred.child[temp++] = nextNode.child[i];\n                }\n        \n                x.child[pos] = pred;\n                for (int i = pos; i < x.n; i++) {\n                  if (i != 2 * T - 2) {\n                    x.key[i] = x.key[i + 1];\n                  }\n                }\n                for (int i = pos + 1; i < x.n + 1; i++) {\n                  if (i != 2 * T - 1) {\n                    x.child[i] = x.child[i + 1];\n                  }\n                }\n                x.n--;\n                if (x.n == 0) {\n                  if (x == root) {\n                    root = x.child[0];\n                  }\n                  x = x.child[0];\n                }\n                Remove(pred, key);\n                return;\n              }\n            } else {\n              for (pos = 0; pos < x.n; pos++) {\n                if (x.key[pos] > key) {\n                  break;\n                }\n              }\n              Node tmp = x.child[pos];\n              if (tmp.n >= T) {\n                Remove(tmp, key);\n                return;\n              }\n              if (true) {\n                Node nb = null;\n                int devider = -1;\n        \n                if (pos != x.n && x.child[pos + 1].n >= T) {\n                  devider = x.key[pos];\n                  nb = x.child[pos + 1];\n                  x.key[pos] = nb.key[0];\n                  tmp.key[tmp.n++] = devider;\n                  tmp.child[tmp.n] = nb.child[0];\n                  for (int i = 1; i < nb.n; i++) {\n                    nb.key[i - 1] = nb.key[i];\n                  }\n                  for (int i = 1; i <= nb.n; i++) {\n                    nb.child[i - 1] = nb.child[i];\n                  }\n                  nb.n--;\n                  Remove(tmp, key);\n                  return;\n                } else if (pos != 0 && x.child[pos - 1].n >= T) {\n        \n                  devider = x.key[pos - 1];\n                  nb = x.child[pos - 1];\n                  x.key[pos - 1] = nb.key[nb.n - 1];\n                  Node child = nb.child[nb.n];\n                  nb.n--;\n        \n                  for (int i = tmp.n; i > 0; i--) {\n                    tmp.key[i] = tmp.key[i - 1];\n                  }\n                  tmp.key[0] = devider;\n                  for (int i = tmp.n + 1; i > 0; i--) {\n                    tmp.child[i] = tmp.child[i - 1];\n                  }\n                  tmp.child[0] = child;\n                  tmp.n++;\n                  Remove(tmp, key);\n                  return;\n                } else {\n                  Node lt = null;\n                  Node rt = null;\n                  boolean last = false;\n                  if (pos != x.n) {\n                    devider = x.key[pos];\n                    lt = x.child[pos];\n                    rt = x.child[pos + 1];\n                  } else {\n                    devider = x.key[pos - 1];\n                    rt = x.child[pos];\n                    lt = x.child[pos - 1];\n                    last = true;\n                    pos--;\n                  }\n                  for (int i = pos; i < x.n - 1; i++) {\n                    x.key[i] = x.key[i + 1];\n                  }\n                  for (int i = pos + 1; i < x.n; i++) {\n                    x.child[i] = x.child[i + 1];\n                  }\n                  x.n--;\n                  lt.key[lt.n++] = devider;\n        \n                  for (int i = 0, j = lt.n; i < rt.n + 1; i++, j++) {\n                    if (i < rt.n) {\n                      lt.key[j] = rt.key[i];\n                    }\n                    lt.child[j] = rt.child[i];\n                  }\n                  lt.n += rt.n;\n                  if (x.n == 0) {\n                    if (x == root) {\n                      root = x.child[0];\n                    }\n                    x = x.child[0];\n                  }\n                  Remove(lt, key);\n                  return;\n                }\n              }\n            }\n          }\n        \n          public void Remove(int key) {\n            Node x = Search(root, key);\n            if (x == null) {\n              return;\n            }\n            Remove(root, key);\n          }\n        \n          public void Task(int a, int b) {\n            Stack<Integer> st = new Stack<>();\n            FindKeys(a, b, root, st);\n            while (st.isEmpty() == false) {\n              this.Remove(root, st.pop());\n            }\n          }\n        \n          private void FindKeys(int a, int b, Node x, Stack<Integer> st) {\n            int i = 0;\n            for (i = 0; i < x.n && x.key[i] < b; i++) {\n              if (x.key[i] > a) {\n                st.push(x.key[i]);\n              }\n            }\n            if (!x.leaf) {\n              for (int j = 0; j < i + 1; j++) {\n                FindKeys(a, b, x.child[j], st);\n              }\n            }\n          }\n        \n          public boolean Contain(int k) {\n            if (this.Search(root, k) != null) {\n              return true;\n            } else {\n              return false;\n            }\n          }\n        \n          // Show the node\n          private void Show(Node x) {\n            assert (x == null);\n            for (int i = 0; i < x.n; i++) {\n              System.out.print(x.key[i] + " ");\n            }\n            if (!x.leaf) {\n              for (int i = 0; i < x.n + 1; i++) {\n                Show(x.child[i]);\n              }\n            }\n          }\n        \n          public static void main(String[] args) {\n            BTree b = new BTree(3);\n            b.Insert(8);\n            b.Insert(9);\n            b.Insert(10);\n            b.Insert(11);\n            b.Insert(15);\n            b.Insert(20);\n            b.Insert(17);\n        \n            b.Show();\n        \n            b.Remove(10);\n            System.out.println();\n            b.Show();\n          }\n        }\n      '}),r.a.createElement("div",{className:"divider"}),r.a.createElement("h3",{className:"sub-title"},"Deletion Complexity"),r.a.createElement("p",null,"Best case Time complexity: \u0398(log n)"),r.a.createElement("p",null,"Average case Space complexity: \u0398(n)"),r.a.createElement("p",null,"Worst case Space complexity: \u0398(n)"))}}}]);
//# sourceMappingURL=9.a66bea72.chunk.js.map