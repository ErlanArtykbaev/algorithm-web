import React from "react";

import { Table } from "antd";

import ImageWrapper from "../../layer/ImageWrapper";

import first from "../../../assets/img/sort/sorting.webp";
import second from "../../../assets/img/sort/unstable-sorting.webp";
import third from "../../../assets/img/sort/stable-sorting.webp";

const WhatIsSort = () => {
  const dataSource = [
    {
      key: "1",
      name: "Bubble Sort",
      "time-best": "n",
      "time-worst": "n2",
      "time-average": "n2",
      space: "1",
    },
    {
      key: "2",
      name: "Selection Sort",
      "time-best": "n2",
      "time-worst": "n2",
      "time-average": "n2",
      space: "1",
    },
    {
      key: "3",
      name: "Insertion Sort",
      "time-best": "n",
      "time-worst": "n2",
      "time-average": "n2",
      space: "1",
    },
    {
      key: "4",
      name: "Merge Sort",
      "time-best": "n log n",
      "time-worst": "n log n",
      "time-average": "n log n",
      space: "n",
    },
    {
      key: "5",
      name: "Quick Sort",
      "time-best": "n log n",
      "time-worst": "n2",
      "time-average": "n log n",
      space: "log n",
    },
  ];
  const columns = [
    {
      title: "Sorting Algorithm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Time Complexity - Best",
      dataIndex: "time-best",
      key: "time-best",
    },
    {
      title: "Time Complexity - Worst",
      dataIndex: "time-worst",
      key: "time-worst",
    },
    {
      title: "Time Complexity - Average",
      dataIndex: "time-average",
      key: "time-average",
    },
    {
      title: "Space Complexity",
      dataIndex: "space",
      key: "space",
    },
  ];
  return (
    <div className="container">
      <h3 className="title">Sorting</h3>
      <p>
        A sorting algorithm is used to arrange elements of an array/list in a
        specific order. For example,
      </p>
      <ImageWrapper url={first} text="Sorting an array" size="md" />
      <p>Here, we are sorting the array in ascending order.</p>
      <p>
        There are various sorting algorithms that can be used to complete this
        operation. And, we can use any algorithm based on the requirement.
      </p>
      <div className="divider"></div>
      <h3 className="sub-title">Different Sorting Algorithms</h3>
      <ul>
        <li>Bubble Sort</li>
        <li>Selection Sort</li>
        <li>Quicksort</li>
        <li>Merge Sort</li>
        <li>Insertion Sort</li>
      </ul>
      <div className="divider"></div>
      <h3 className="sub-title">Complexity of Sorting Algorithms</h3>
      <p>
        The efficiency of any sorting algorithm is determined by the time
        complexity and space complexity of the algorithm.
      </p>
      <p>
        <strong>1. Time Complexity:</strong> Time complexity refers to the time
        taken by an algorithm to complete its execution with respect to the size
        of the input. It can be represented in different forms:
      </p>
      <p>Big-O notation (O)</p>
      <p>
        <strong>2. Space Complexity:</strong> Space complexity refers to the
        total amount of memory used by the algorithm for a complete execution.
        It includes both the auxiliary memory and the input.
      </p>
      <p>
        The auxiliary memory is the additional space occupied by the algorithm
        apart from the input data. Usually, auxiliary memory is considered for
        calculating the space complexity of an algorithm.
      </p>
      <p>Let's see a complexity analysis of different sorting algorithms.</p>
      <Table dataSource={dataSource} columns={columns} />
      <div className="divider"></div>
      <h3 className="sub-title">Stability of Sorting Algorithm</h3>
      <p>
        A sorting algorithm is considered stable if the two or more items with
        the same value maintain the same relative positions even after sorting.
      </p>
      <p>
        For example, in the image below, there are two items with the same value
        3. An unstable sorting algorithm allows two possibilities where the two
        positions of 3 may or may not be maintained.
      </p>
      <ImageWrapper
        url={second}
        text="Unstable sorting with two possible outcomes"
        size="md"
      />
      <p>
        However, after a stable sorting algorithm, there is always one
        possibility where the positions are maintained as in the original array.
      </p>
      <ImageWrapper
        url={third}
        text="Stable sorting with the positions preserved"
        size="md"
      />
    </div>
  );
};

export default WhatIsSort;
