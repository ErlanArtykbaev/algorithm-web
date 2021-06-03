(this["webpackJsonpalgorithm-web"]=this["webpackJsonpalgorithm-web"]||[]).push([[12],{595:function(e,t,n){},596:function(e,t,n){},597:function(e,t,n){},598:function(e,t,n){},715:function(e,t,n){"use strict";n.r(t);var a,r,i,l=n(0),o=n.n(l),s=n(563),u=n(190),c=n(191),d=(n(11),n(588)),h=n(590),m=n(690),f=n(698),g=n(593),v=n.n(g),p=n(592),E=n.n(p),b=n(564),w=n.n(b),y=n(567),k=n.n(y),j=n(568),S=n.n(j),D=n(584),M=n.n(D),x=n(689),F=n(695),O=n(728),C=n(719),P=n(697),A=n(726),B=n(712),N=n(727),I=n(696),W=function(e){return o.a.createElement(x.a,{style:{backgroundColor:"#1890ff",position:"static"}},o.a.createElement(F.a,null,o.a.createElement(I.a,{container:!0,alignItems:"flex-end",spacing:2,style:{marginTop:8,marginBottom:8}},o.a.createElement(I.a,{item:!0},o.a.createElement(P.a,{style:{minWidth:200}},o.a.createElement(A.a,{htmlFor:"algorithm-select"},"Algorithm"),o.a.createElement(B.a,{value:e.algorithm,onChange:e.handleAlgorithmChange,inputProps:{name:"algorithm-select",id:"algorithm-select"}},e.algorithms.map((function(e){return o.a.createElement(N.a,{value:e,key:e},e)}))))),o.a.createElement(I.a,{item:!0},o.a.createElement(P.a,null,o.a.createElement(O.a,{control:o.a.createElement(C.a,{checked:e.allowDiagonal,onChange:e.handleAllowDiagonalChange}),label:"Allow Diagonal"}))),o.a.createElement(I.a,{item:!0},o.a.createElement(P.a,null,o.a.createElement(O.a,{control:o.a.createElement(C.a,{checked:e.editMode,onChange:e.handleEditModeChange}),label:"Edit Walkable"}))))))},z=["AStarFinder","BestFirstFinder","BreadthFirstFinder","DijkstraFinder","IDAStarFinder","JumpPointFinder","BiAStarFinder","BiBestFirstFinder","BiBreadthFirstFinder","BiDijkstraFinder"];function U(e,t,n){return e*n+t}var T=k()((function(e){var t=e.algorithm,n=e.allowDiagonal;return new S.a[t]({allowDiagonal:n})}),(function(e){return e.algorithm+e.allowDiagonal}));function V(e,t){return e&&t&&e.x===t.x&&e.y===t.y}function J(e){var t=e.start,n=e.end,a=e.algorithm,r=e.allowDiagonal,i=e.matrix,l=function(e){var t=e.matrix;return w()(M()(t).trans().map((function(e,t){return e.map((function(e,n){return{x:t,y:n,walkable:!e,i:U(t,n),inPath:!1,isStart:!1,isEnd:!1}}))})))}({matrix:i});if(t&&(l[U(t.x,t.y,8)].isStart=!0),n&&(l[U(n.x,n.y,8)].isEnd=!0),t&&n){var o=T({algorithm:a,allowDiagonal:r}),s=function(e){var t=e.matrix;return new S.a.Grid(Object(c.a)(t))}({matrix:i});o.findPath(t.x,t.y,n.x,n.y,s).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];l[U(n,a,8)].inPath=!0}))}return l}var q={start:null,end:null,pathSet:!1,algorithm:"AStarFinder",allowDiagonal:!0,matrix:[[1,0,0,0,0,0,0,0],[1,0,0,0,0,1,1,0],[1,1,0,1,0,0,1,0],[0,0,0,1,0,0,0,0],[0,1,0,1,0,0,0,0],[0,1,0,0,1,0,0,0],[0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1]],editMode:!1};function G(e,t){switch(t.type){case"tile clicked":var n=t.tile;if(e.editMode)(e.matrix[n.y][n.x]^=1)&&(V(e.end,n)||V(e.start,n))&&(e.start=null,e.end=null,e.pathSet=!1);else e.pathSet&&n.walkable?(e.pathSet=!1,e.start=n,e.end=null):e.start&&n.walkable?e.pathSet=!0:n.walkable&&(e.start=n);return;case"mouse entered tile":var a=t.tile;return void(e.editMode||e.pathSet||!e.start||!a.walkable||a.isStart||(e.end=a));case"algorithm changed":return void(e.algorithm=t.algorithm);case"allow diagonal toggled":return void(e.allowDiagonal=!e.allowDiagonal);case"edit mode toggled":return void(e.editMode=!e.editMode);default:return e}}var H=h.a.div(a||(a=Object(s.a)(["\n  display: flex;\n  margin: 120px 24px;\n"]))),R=Object(h.a)(m.a)(r||(r=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(8, 64px);\n  grid-auto-flow: column;\n  grid-auto-columns: 64px;\n  grid-auto-rows: 64px;\n"])));var K=h.a.div(i||(i=Object(s.a)(["\n  border-bottom: 1px solid black;\n  border-right: 1px solid black;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  user-select: none;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.tile.walkable?"transparent":"#1890ff"}),(function(e){var t=e.editMode,n=e.tile;return t?n.walkable?"rgba(0,0,0,0.4)":"rgba(0,0,0,0.6)":n.walkable?"rgba(255,255,255,0.2)":"#1890ff"}));function L(e){var t=e.tile,n=e.pathSet;if(t.isStart||t.inPath||t.isEnd){var a=function(e){return e.isStart?"Chartreuse":e.isEnd?"OrangeRed":e.inPath?"CornflowerBlue":"AntiqueWhite"}(t);return t.isEnd&&!n?o.a.createElement(E.a,{fontSize:"large",style:{color:a}}):o.a.createElement(v.a,{fontSize:"large",style:{color:a}})}return null}var Q=function(){var e=Object(d.a)(G,q),t=Object(u.a)(e,2),n=t[0],a=t[1],r=J(n);return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null),o.a.createElement(W,{algorithm:n.algorithm,algorithms:z,handleAlgorithmChange:function(e){return a({type:"algorithm changed",algorithm:e.target.value})},allowDiagonal:n.allowDiagonal,handleAllowDiagonalChange:function(){return a({type:"allow diagonal toggled"})},handleEditModeChange:function(){return a({type:"edit mode toggled"})}}),o.a.createElement(H,null,o.a.createElement(R,null,r.map((function(e,t){return o.a.createElement(K,{key:t,tile:e,onClick:function(){return a({type:"tile clicked",tile:e})},onMouseEnter:function(){return a({type:"mouse entered tile",tile:e})},editMode:n.editMode},o.a.createElement(L,{tile:e,pathSet:n.pathSet}))})))))},X=n(594),Y=n(77),Z=n(78),$=n(82),_=n(81),ee=(n(595),function(e){Object($.a)(n,e);var t=Object(_.a)(n);function n(){return Object(Y.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,r=e.isWall,i=e.onMouseDown,l=e.onMouseEnter,s=e.onMouseUp,u=e.row,c=n?"node-finish":a?"node-start":r?"node-wall":"";return o.a.createElement("div",{id:"node-".concat(u,"-").concat(t),className:"node ".concat(c),onMouseDown:function(){return i(u,t)},onMouseEnter:function(){return l(u,t)},onMouseUp:function(){return s()}})}}]),n}(l.Component)),te=(n(596),n(597),n(114));function ne(e,t,n){var a=[];t.distance=0;for(var r=function(e){var t,n=[],a=Object(te.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,l=Object(te.a)(i);try{for(l.s();!(r=l.n()).done;){var o=r.value;n.push(o)}}catch(s){l.e(s)}finally{l.f()}}}catch(s){a.e(s)}finally{a.f()}return n}(e);r.length;){ae(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return a;if(i.isVisited=!0,a.push(i),i===n)return a;re(i,e)}}}function ae(e){e.sort((function(e,t){return e.distance-t.distance}))}function re(e,t){var n,a=function(e,t){var n=[],a=e.col,r=e.row;r>0&&n.push(t[r-1][a]);r<t.length-1&&n.push(t[r+1][a]);a>0&&n.push(t[r][a-1]);a<t[0].length-1&&n.push(t[r][a+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),r=Object(te.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.distance=e.distance+1,i.previousNode=e}}catch(l){r.e(l)}finally{r.f()}}n(598);var ie=function(e){Object($.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(Y.a)(this,n),(e=t.call(this)).state={grid:[],mouseIsPressed:!1},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=le();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=se(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=se(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){n.animateShortestPath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*a)},r=0;r<=e.length;r++){var i=a(r);if("object"===typeof i)return i.v}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=e[10][15],n=e[10][35],a=ne(e,t,n),r=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(n);this.animateDijkstra(a,r)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"dijkstra-btn",onClick:function(){return e.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),o.a.createElement("div",{className:"grid"},n.map((function(t,n){return o.a.createElement("div",{key:n},t.map((function(t,n){var r=t.row,i=t.col,l=t.isFinish,s=t.isStart,u=t.isWall;return o.a.createElement(ee,{key:n,col:i,isFinish:l,isStart:s,isWall:u,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:r})})))}))))}}]),n}(l.Component),le=function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<50;a++)n.push(oe(a,t));e.push(n)}return e},oe=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},se=function(e,t,n){var a=e.slice(),r=a[t][n],i=Object(X.a)(Object(X.a)({},r),{},{isWall:!r.isWall});return a[t][n]=i,a};t.default=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"title"},"Here examples how graph algorithms work"),o.a.createElement(Q,null),o.a.createElement("div",{className:"divider"}),o.a.createElement("h3",{className:"sub-title"},"Another example"),o.a.createElement(ie,null))}}}]);
//# sourceMappingURL=12.e1f9b51d.chunk.js.map