import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/graph/facebook-graph.webp"
import second from "../../../assets/img/graph/graph-vertices-edges_0.webp"
import third from "../../../assets/img/graph/adjacency-matrix_1.webp"
import fourth from "../../../assets/img/graph/adjacency-list.webp"

const WhatIsGraph = () => {
  return (
    <div className='container'>
      <h3 className='title'>Graph Data Stucture</h3>
      <p>
        A graph data structure is a collection of nodes that have data and are
        connected to other nodes.
      </p>
      <p>
        Let's try to understand this through an example. On facebook, everything
        is a node. That includes User, Photo, Album, Event, Group, Page,
        Comment, Story, Video, Link, Note...anything that has data is a node.
      </p>
      <p>
        Every relationship is an edge from one node to another. Whether you post
        a photo, join a group, like a page, etc., a new edge is created for that
        relationship.
      </p>
      <ImageWrapper url={first} text='Example of graph data structure' />
      <p>
        All of facebook is then a collection of these nodes and edges. This is
        because facebook uses a graph data structure to store its data.
      </p>
      <p>More precisely, a graph is a data structure (V, E) that consists of</p>
      <ul>
        <li>A collection of vertices V</li>
        <li>
          A collection of edges E, represented as ordered pairs of vertices
          (u,v)
        </li>
      </ul>
      <ImageWrapper url={second} text='Vertices and edges' />
      <p>In the graph,</p>
      <pre>
        <code className='language-java'>{`
        V = {0, 1, 2, 3}
        E = {(0,1), (0,2), (0,3), (1,2)}
        G = {V, E}
        `}</code>
      </pre>
      <div className='divider'></div>
      <h3 className='sub-title'>Graph Terminology</h3>
      <ul>
        <li>
          <strong>Adjacency</strong>: A vertex is said to be adjacent to another
          vertex if there is an edge connecting them. Vertices 2 and 3 are not
          adjacent because there is no edge between them.
        </li>
        <li>
          <strong>Path</strong>: A sequence of edges that allows you to go from
          vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from
          vertex 0 to vertex 2.
        </li>
        <li>
          <string>Directed Graph</string>: A graph in which an edge (u,v)
          doesn't necessarily mean that there is an edge (v, u) as well. The
          edges in such a graph are represented by arrows to show the direction
          of the edge.
        </li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>Graph Representation</h3>
      <p>Graphs are commonly represented in two ways:</p>
      <h3 className='sub-sub-title'>1. Adjacency Matrix</h3>
      <p>
        An adjacency matrix is a 2D array of V x V vertices. Each row and column
        represent a vertex.
      </p>
      <p>
        If the value of any element <span className='var'>a[i][j]</span> is 1,
        it represents that there is an edge connecting vertex i and vertex j.
      </p>
      <p>The adjacency matrix for the graph we created above is</p>
      <ImageWrapper url={third} text='Graph adjacency matrix' />
      <p>
        Since it is an undirected graph, for edge (0,2), we also need to mark
        edge (2,0); making the adjacency matrix symmetric about the diagonal.
      </p>
      <p>
        Edge lookup(checking if an edge exists between vertex A and vertex B) is
        extremely fast in adjacency matrix representation but we have to reserve
        space for every possible link between all vertices(V x V), so it
        requires more space.
      </p>
      <h3 className='sub-sub-title'>2. Adjacency List</h3>
      <p>An adjacency list represents a graph as an array of linked lists.</p>
      <p>
        The index of the array represents a vertex and each element in its
        linked list represents the other vertices that form an edge with the
        vertex.
      </p>
      <p>
        The adjacency list for the graph we made in the first example is as
        follows:
      </p>
      <ImageWrapper url={fourth} text='Adjacency list representation' />
      <p>
        An adjacency list is efficient in terms of storage because we only need
        to store the values for the edges. For a graph with millions of
        vertices, this can mean a lot of saved space.
      </p>
    </div>
  )
}

export default WhatIsGraph
