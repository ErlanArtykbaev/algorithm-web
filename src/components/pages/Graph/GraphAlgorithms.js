import React from "react";
import ImageWrapper from "../../layer/ImageWrapper";
import CodePreview from "../../layer/CodePreview";

import first from "../../../assets/img/graph/graph-dfs-step-0.webp";
import second from "../../../assets/img/graph/graph-dfs-step-1.webp";
import third from "../../../assets/img/graph/graph-dfs-step-2.webp";
import fourth from "../../../assets/img/graph/graph-dfs-step-3.webp";
import fifth from "../../../assets/img/graph/graph-dfs-step-4.webp";
import sixth from "../../../assets/img/graph/graph-dfs-step-5.webp";
import seven from "../../../assets/img/graph/shortest-subpath.webp";
import eight from "../../../assets/img/graph/dj-1.webp";
import nine from "../../../assets/img/graph/dj-2.webp";
import ten from "../../../assets/img/graph/dj-3.webp";
import eleven from "../../../assets/img/graph/dj-4.webp";
import twelve from "../../../assets/img/graph/dj-5.webp";
import thirteen from "../../../assets/img/graph/dj-6.webp";
import fourteen from "../../../assets/img/graph/dj-7.webp";
import fifteen from "../../../assets/img/graph/dj-8.webp";

const GraphAlgorithms = () => {
  return (
    <div className="container">
      <h3 className="title">Algorithms on Graphs</h3>
      <h3 className="sub-title">Depth First Search (DFS)</h3>
      <p>
        Depth first Search or Depth first traversal is a recursive algorithm for
        searching all the vertices of a graph or tree data structure. Traversal
        means visiting all the nodes of a graph.
      </p>
      <div className="divider"></div>
      <h3 className="sub-title">Depth First Search Algorithm</h3>
      <p>
        A standard DFS implementation puts each vertex of the graph into one of
        two categories:
      </p>
      <p>1. Visited</p>
      <p>2. Not Visited</p>
      <p>
        The purpose of the algorithm is to mark each vertex as visited while
        avoiding cycles.
      </p>
      <p>The DFS algorithm works as follows:</p>
      <p>
        1. Start by putting any one of the graph's vertices on top of a stack.
      </p>
      <p>2. Take the top item of the stack and add it to the visited list.</p>
      <p>
        3. Create a list of that vertex's adjacent nodes. Add the ones which
        aren't in the visited list to the top of the stack.
      </p>
      <p>4. Keep repeating steps 2 and 3 until the stack is empty.</p>
      <div className="divider"></div>
      <h3 className="sub-title">Depth First Search Example</h3>
      <p>
        Let's see how the Depth First Search algorithm works with an example. We
        use an undirected graph with 5 vertices.
      </p>
      <ImageWrapper
        url={first}
        text="Undirected graph with 5 vertices"
        size="md"
      />
      <p>
        We start from vertex 0, the DFS algorithm starts by putting it in the
        Visited list and putting all its adjacent vertices in the stack.
      </p>
      <ImageWrapper
        url={second}
        text="Visit the element and put it in the visited list"
        size="md"
      />
      <p>
        Next, we visit the element at the top of stack i.e. 1 and go to its
        adjacent nodes. Since 0 has already been visited, we visit 2 instead.
      </p>
      <ImageWrapper
        url={third}
        text="Visit the element at the top of stack"
        size="md"
      />
      <p>
        Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the
        top of the stack and visit it.
      </p>
      <ImageWrapper
        url={fourth}
        text="Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it."
        size="md"
      />
      <ImageWrapper
        url={fifth}
        text="Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it."
        size="md"
      />
      <p>
        After we visit the last element 3, it doesn't have any unvisited
        adjacent nodes, so we have completed the Depth First Traversal of the
        graph.
      </p>
      <ImageWrapper
        url={sixth}
        text="After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph."
        size="md"
      />
      <div class="divider"></div>
      <h3 className="sub-title">DFS Pseudocode (recursive implementation)</h3>
      <p>
        The pseudocode for DFS is shown below. In the init() function, notice
        that we run the DFS function on every node. This is because the graph
        might have two different disconnected parts so to make sure that we
        cover every vertex, we can also run the DFS algorithm on every node.
      </p>
      <CodePreview
        code={`
        DFS(G, u)
        u.visited = true
        for each v ∈ G.Adj[u]
            if v.visited == false
                DFS(G,v)
       
        init() {
            For each u ∈ G
                u.visited = false
            For each u ∈ G
              DFS(G, u)
        }
      `}
        language="java"
      />
      <div className="divider"></div>
      <h3 className="sub-title">DFS Implementation in Java </h3>
      <p>
        The code for the Depth First Search Algorithm with an example is shown
        below. The code has been simplified so that we can focus on the
        algorithm rather than other details.
      </p>
      <CodePreview
        code={`
        // DFS algorithm in Java

        import java.util.*;
        
        class Graph {
          private LinkedList<Integer> adjLists[];
          private boolean visited[];
        
          // Graph creation
          Graph(int vertices) {
            adjLists = new LinkedList[vertices];
            visited = new boolean[vertices];
        
            for (int i = 0; i < vertices; i++)
              adjLists[i] = new LinkedList<Integer>();
          }
        
          // Add edges
          void addEdge(int src, int dest) {
            adjLists[src].add(dest);
          }
        
          // DFS algorithm
          void DFS(int vertex) {
            visited[vertex] = true;
            System.out.print(vertex + " ");
        
            Iterator<Integer> ite = adjLists[vertex].listIterator();
            while (ite.hasNext()) {
              int adj = ite.next();
              if (!visited[adj])
                DFS(adj);
            }
          }
        
          public static void main(String args[]) {
            Graph g = new Graph(4);
        
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(1, 2);
            g.addEdge(2, 3);
        
            System.out.println("Following is Depth First Traversal");
        
            g.DFS(2);
          }
        }
        `}
        language="java"
      />
      <div className="divider"></div>
      <h3 className="title">Dijkstra's Algorithm</h3>
      <p>
        Dijkstra's algorithm allows us to find the shortest path between any two
        vertices of a graph.
      </p>
      <p>
        It differs from the minimum spanning tree because the shortest distance
        between two vertices might not include all the vertices of the graph.
      </p>
      <div className="divider"></div>
      <h3 className="sub-title">How Dijkstra's Algorithm works</h3>
      <p>
        Dijkstra's Algorithm works on the basis that any subpath B {`->`} D of
        the shortest path A {`->`} D between vertices A and D is also the
        shortest path between vertices B and D.
      </p>
      <ImageWrapper
        url={seven}
        text="Each subpath is the shortest path"
        size="md"
      />
      <p>
        Djikstra used this property in the opposite direction i.e we
        overestimate the distance of each vertex from the starting vertex. Then
        we visit each node and its neighbors to find the shortest subpath to
        those neighbors.
      </p>
      <p>
        The algorithm uses a greedy approach in the sense that we find the next
        best solution hoping that the end result is the best solution for the
        whole problem.
      </p>
      <div className="divider"></div>
      <h3 className="sub-title">Example of Dijkstra's algorithm</h3>
      <p>
        It is easier to start with an example and then think about the
        algorithm.
      </p>
      <ImageWrapper url={eight} text="Start with a weighted graph" size="sm" />
      <ImageWrapper
        url={nine}
        text="Choose a starting vertex and assign infinity path values to all other devices"
        size="sm"
      />
      <ImageWrapper
        url={ten}
        text="Go to each vertex and update its path length"
        size="sm"
      />
      <ImageWrapper
        url={eleven}
        text="If the path length of the adjacent vertex is lesser than new path length, don't update it"
        size="sm"
      />
      <ImageWrapper
        url={twelve}
        text="Avoid updating path lengths of already visited vertices"
        size="sm"
      />
      <ImageWrapper
        url={thirteen}
        text="After each iteration, we pick the unvisited vertex with the least path length. So we choose 5 before 7"
        size="sm"
      />
      <ImageWrapper
        url={fourteen}
        text="Notice how the rightmost vertex has its path length updated twice"
        size="sm"
      />
      <ImageWrapper
        url={fifteen}
        text="Repeat until all the vertices have been visited"
        size="sm"
      />
      <div className="divider"></div>
      <h3 className="sub-title">Djikstra's algorithm pseudocode</h3>
      <p>
        We need to maintain the path distance of every vertex. We can store that
        in an array of size v, where v is the number of vertices.
      </p>
      <p>
        We also want to be able to get the shortest path, not only know the
        length of the shortest path. For this, we map each vertex to the vertex
        that last updated its path length.
      </p>
      <p>
        Once the algorithm is over, we can backtrack from the destination vertex
        to the source vertex to find the path.
      </p>
      <p>
        A minimum priority queue can be used to efficiently receive the vertex
        with least path distance.
      </p>
      <CodePreview
        code={`
        function dijkstra(G, S)
          for each vertex V in G
            distance[V] <- infinite
            previous[V] <- NULL
            If V != S, add V to Priority Queue Q
              distance[S] <- 0
	
            while Q IS NOT EMPTY
                U <- Extract MIN from Q
                for each unvisited neighbour V of U
                    tempDistance <- distance[U] + edge_weight(U, V)
                    if tempDistance < distance[V]
                        distance[V] <- tempDistance
                        previous[V] <- U
            return distance[], previous[]
        `}
        language="java"
      />
      <div className="divider"></div>
      <h3 className="sub-title">Code for Dijkstra's Algorithm</h3>
      <p>
        The implementation of Dijkstra's Algorithm in Java is given below. The
        complexity of the code can be improved, but the abstractions are
        convenient to relate the code with the algorithm.
      </p>
      <CodePreview
        code={`
      // Dijkstra's Algorithm in Java

      public class Dijkstra {

        public static void dijkstra(int[][] graph, int source) {
          int count = graph.length;
          boolean[] visitedVertex = new boolean[count];
          int[] distance = new int[count];
          for (int i = 0; i < count; i++) {
            visitedVertex[i] = false;
            distance[i] = Integer.MAX_VALUE;
          }

          // Distance of self loop is zero
          distance[source] = 0;
          for (int i = 0; i < count; i++) {

            // Update the distance between neighbouring vertex and source vertex
            int u = findMinDistance(distance, visitedVertex);
            visitedVertex[u] = true;

            // Update all the neighbouring vertex distances
            for (int v = 0; v < count; v++) {
              if (!visitedVertex[v] && graph[u][v] != 0 && (distance[u] + graph[u][v] < distance[v])) {
                distance[v] = distance[u] + graph[u][v];
              }
            }
          }
          for (int i = 0; i < distance.length; i++) {
            System.out.println(String.format("Distance from %s to %s is %s", source, i, distance[i]));
          }

        }

        // Finding the minimum distance
        private static int findMinDistance(int[] distance, boolean[] visitedVertex) {
          int minDistance = Integer.MAX_VALUE;
          int minDistanceVertex = -1;
          for (int i = 0; i < distance.length; i++) {
            if (!visitedVertex[i] && distance[i] < minDistance) {
              minDistance = distance[i];
              minDistanceVertex = i;
            }
          }
          return minDistanceVertex;
        }

        public static void main(String[] args) {
          int graph[][] = new int[][] { { 0, 0, 1, 2, 0, 0, 0 }, { 0, 0, 2, 0, 0, 3, 0 }, { 1, 2, 0, 1, 3, 0, 0 },
              { 2, 0, 1, 0, 0, 0, 1 }, { 0, 0, 3, 0, 0, 2, 0 }, { 0, 3, 0, 0, 2, 0, 1 }, { 0, 0, 0, 1, 0, 1, 0 } };
          Dijkstra T = new Dijkstra();
          T.dijkstra(graph, 0);
        }
      }
        `}
        language="java"
      />
    </div>
  );
};

export default GraphAlgorithms;
