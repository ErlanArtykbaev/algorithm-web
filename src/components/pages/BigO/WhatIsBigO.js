import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/bigO/big0.webp"
import second from "../../../assets/img/bigO/omega.webp"
import third from "../../../assets/img/bigO/theta.webp"

import CodePreview from "../../layer/CodePreview"

const WhatIsBigO = () => {
  return (
    <div className='container'>
      <h3 className='title'>What is Big O</h3>
      <p>
        The efficiency of an algorithm depends on the amount of time, storage
        and other resources required to execute the algorithm. The efficiency is
        measured with the help of asymptotic notations.
      </p>
      <p>
        An algorithm may not have the same performance for different types of
        inputs. With the increase in the input size, the performance will
        change.
      </p>
      <p>
        The study of change in performance of the algorithm with the change in
        the order of the input size is defined as asymptotic analysis.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Asymptotic Notations</h3>
      <p>
        Asymptotic notations are the mathematical notations used to describe the
        running time of an algorithm when the input tends towards a particular
        value or a limiting value.
      </p>
      <p>
        For example: In bubble sort, when the input array is already sorted, the
        time taken by the algorithm is linear i.e. the best case.
      </p>
      <p>
        But, when the input array is in reverse condition, the algorithm takes
        the maximum time (quadratic) to sort the elements i.e. the worst case.
      </p>
      <p>
        When the input array is neither sorted nor in reverse order, then it
        takes average time. These durations are denoted using asymptotic
        notations.
      </p>
      <p>There are mainly three asymptotic notations:</p>
      <ul>
        <li>Big-O notation</li>
        <li>Omega notation</li>
        <li>Theta notation</li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>Big-O Notation (O-notation)</h3>
      <p>
        Big-O notation represents the upper bound of the running time of an
        algorithm. Thus, it gives the worst-case complexity of an algorithm.
      </p>
      <ImageWrapper
        url={first}
        text='Big-O gives the upper bound of a function'
        size='big'
      />
      <CodePreview
        code={`
        O(g(n)) = { f(n): there exist positive constants c and n0
          such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n0 }
      `}
        language=''
      />
      <p>
        The above expression can be described as a function{" "}
        <span className='var'>f(n)</span> belongs to the set{" "}
        <span className='var'>O(g(n))</span> if there exists a positive constant
        c such that it lies between <span className='var'>0</span> and{" "}
        <span className='var'>cg(n)</span>, for sufficiently large{" "}
        <span>n</span>.
      </p>
      <p>
        For any value of <span className='var'>n</span>, the running time of an
        algorithm does not cross the time provided by{" "}
        <span className='var'>O(g(n))</span>.
      </p>
      <p>
        Since it gives the worst-case running time of an algorithm, it is widely
        used to analyze an algorithm as we are always interested in the
        worst-case scenario.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Omega Notation (Ω-notation)</h3>
      <p>
        Omega notation represents the lower bound of the running time of an
        algorithm. Thus, it provides the best case complexity of an algorithm.
      </p>
      <ImageWrapper
        url={second}
        size='big'
        text='Omega gives the lower bound of a function'
      />
      <CodePreview
        code={`
      Ω(g(n)) = { f(n): there exist positive constants c and n0 
        such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n0 }
      `}
        language=''
      />
      <p>
        The above expression can be described as a function f(n) belongs to the
        set Ω(g(n)) if there exists a positive constant c such that it lies
        above cg(n), for sufficiently large n.
      </p>
      <p>
        For any value of n, the minimum time required by the algorithm is given
        by Omega Ω(g(n)).
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Theta Notation (Θ-notation)</h3>
      <p>
        Theta notation encloses the function from above and below. Since it
        represents the upper and the lower bound of the running time of an
        algorithm, it is used for analyzing the average-case complexity of an
        algorithm.
      </p>
      <ImageWrapper
        url={third}
        text='Theta bounds the function within constants factors'
        size='big'
      />
      <p>For a function g(n), Θ(g(n)) is given by the relation</p>
      <CodePreview
        code={`
      Θ(g(n)) = { f(n): there exist positive constants c1, c2 and n0
        such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n0 }
      `}
        language=''
      />
      <p>
        The above expression can be described as a function f(n) belongs to the
        set Θ(g(n)) if there exist positive constants c1 and c2 such that it can
        be sandwiched between c1g(n) and c2g(n), for sufficiently large n.
      </p>
      <p>
        If a function f(n) lies anywhere in between c1g(n) and c2g(n) for all n
        ≥ n0, then f(n) is said to be asymptotically tight bound.
      </p>
    </div>
  )
}

export default WhatIsBigO
