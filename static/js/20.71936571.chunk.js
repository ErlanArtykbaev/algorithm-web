(this["webpackJsonpalgorithm-web"]=this["webpackJsonpalgorithm-web"]||[]).push([[20],{36:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:e.size,src:e.url,alt:e.url}),r.a.createElement("div",{className:"image-bottom"},e.text))}},37:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(711),l=t(684);n.a=function(e){var n=e.code,t=e.language;return r.a.createElement("div",{className:"Code"},r.a.createElement(o.a,{language:t,style:l.a},n))}},531:function(e,n,t){e.exports=t.p+"static/media/doubly-linked-list-concept.700756a7.webp"},697:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(36),l=t(531),s=t.n(l),c=t(37);n.default=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title"},"Types of Linked List - Doubly linked"),r.a.createElement("p",null,"We add a pointer to the previous node in a doubly-linked list. Thus, we can go in either direction: forward or backward."),r.a.createElement(o.a,{size:"big",url:s.a,text:"Doubly linked list"}),r.a.createElement("p",null,"A node is represented as"),r.a.createElement(c.a,{code:"\n            struct node {\n              int data;\n              struct node *next;\n              struct node *prev;\n            }\n        ",language:"c"}),r.a.createElement("p",null,"A three-member doubly linked list can be created as"),r.a.createElement(c.a,{code:"\n          /* Initialize nodes */\n          struct node *head;\n          struct node *one = NULL;\n          struct node *two = NULL;\n          struct node *three = NULL;\n          \n          /* Allocate memory */\n          one = malloc(sizeof(struct node));\n          two = malloc(sizeof(struct node));\n          three = malloc(sizeof(struct node));\n          \n          /* Assign data values */\n          one->data = 1;\n          two->data = 2;\n          three->data = 3;\n          \n          /* Connect nodes */\n          one->next = two;\n          one->prev = NULL;\n          \n          two->next = three;\n          two->prev = one;\n          \n          three->next = NULL;\n          three->prev = two;\n          \n          /* Save address of first node in head */\n          head = one;\n        ",language:"c"}),r.a.createElement("div",{className:"divider"}))}}}]);
//# sourceMappingURL=20.71936571.chunk.js.map