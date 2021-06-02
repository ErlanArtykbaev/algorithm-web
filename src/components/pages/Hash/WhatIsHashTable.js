import React from "react"
import ImageWrapper from "../../layer/ImageWrapper"

import first from "../../../assets/img/hash/Hash-0.webp"
import second from "../../../assets/img/hash/Hash-2_0.webp"
import third from "../../../assets/img/hash/Hash-3_1.webp"
import CodePreview from "../../layer/CodePreview"

const WhatisHashTable = () => {
  return (
    <div className='container'>
      <h3 className='title'>Hash Table</h3>
      <p>
        The Hash table data structure stores elements in key-value pairs where
      </p>
      <ul>
        <li>
          <strong>Key - </strong> unique integer that is used for indexing the
          values
        </li>
        <li>
          <strong>Value - </strong> data that are associated with keys.
        </li>
      </ul>
      <ImageWrapper url={first} text='Key and Value in Hash table' />
      <div className='divider'></div>
      <h3 className='sub-title'>Hashing (Hash Function)</h3>
      <p>
        In a hash table, a new index is processed using the keys. And, the
        element corresponding to that key is stored in the index. This process
        is called hashing.
      </p>
      <p>
        Let <span className='var'>k</span> be a key and{" "}
        <span className='var'>h(x)</span>be a hash function.
      </p>
      <p>
        Here, <span className='var'>h(k)</span> will give us a new index to
        store the element linked with <span className='var'>k</span>.
      </p>
      <ImageWrapper url={second} text='Hash table Representation' />
      <div className='divider'></div>
      <h3 className='sub-title'>Hash Collision</h3>
      <p>
        When the hash function generates the same index for multiple keys, there
        will be a conflict (what value to be stored in that index). This is
        called a hash collision.
      </p>
      <p>
        We can resolve the hash collision using one of the following techniques.
      </p>
      <ul>
        <li>Collision resolution by chaining</li>
        <li>Open Addressing: Linear/Quadratic Probing and Double Hashing</li>
      </ul>
      <div className='divider'></div>
      <h3 className='sub-title'>1. Collision resolution by chaining</h3>
      <p>
        In chaining, if a hash function produces the same index for multiple
        elements, these elements are stored in the same index by using a
        doubly-linked list.
      </p>
      <p>
        If <span className='var'>j</span> is the slot for multiple elements, it
        contains a pointer to the head of the list of elements. If no element is
        present, <span className='var'>j</span> contains{" "}
        <span className='var'>NIL</span>.
      </p>
      <ImageWrapper url={third} text='Collision Resolution using chaining' />
      <div className='divider'></div>
      <h3 className='sub-title'>2. Open Addressing</h3>
      <p>
        Unlike chaining, open addressing doesn't store multiple elements into
        the same slot. Here, each slot is either filled with a single key or
        left <span className='var'>NIL</span>.
      </p>
      <p>Different techniques used in open addressing are:</p>
      <h3 className='sub-sub-title'>i. Linear Probing</h3>
      <p>In linear probing, collision is resolved by checking the next slot.</p>
      <p>
        <span className='var'>h(k, i) = (h′(k) + i) mod m</span>
      </p>
      <p>where</p>
      <ul>
        <li>
          <span className='var'>{`i = {0, 1, ….}`}</span>
        </li>
        <li>
          <span className='var'>h'(k)</span> is a new hash function
        </li>
      </ul>
      <p>
        If a collision occurs at <span className='var'>h(k, 0)</span>, then{" "}
        <span className='var'>h(k, 1)</span> is checked. In this way, the value
        of i is incremented linearly.
      </p>
      <p>
        The problem with linear probing is that a cluster of adjacent slots is
        filled. When inserting a new element, the entire cluster must be
        traversed. This adds to the time required to perform operations on the
        hash table.
      </p>
      <h3 className='sub-sub-title'>ii. Quadratic Probing</h3>
      <p>
        It works similar to linear probing but the spacing between the slots is
        increased (greater than one) by using the following relation.
      </p>
      <p>
        <span className='var'>{`h(k, i) = (h′(k) + c1i + c2i2) mod m`}</span>
      </p>
      <p>where,</p>
      <ul>
        <li>c1 and c2 are positive auxiliary constants,</li>
        <li>
          <span className='var'>{`i = {0, 1, ….}`}</span>
        </li>
      </ul>
      <h3 className='sub-sub-title'>iii. Double hashing</h3>
      <p>
        If a collision occurs after applying a hash function h(k), then another
        hash function is calculated for finding the next slot.
      </p>
      <p>
        <span className='var'>h(k, i) = (h1(k) + ih2(k)) mod m</span>
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Good Hash Functions</h3>
      <p>
        A good hash function may not prevent the collisions completely however
        it can reduce the number of collisions.
      </p>
      <p>
        Here, we will look into different methods to find a good hash function
      </p>
      <h3 className='sub-sub-title'>1. Division Method</h3>
      <p>
        If k is a key and m is the size of the hash table, the hash function h()
        is calculated as:
      </p>
      <p>
        <span>h(k) = k mod m</span>
      </p>
      <p>
        For example, If the size of a hash table is{" "}
        <span className='var'>10</span> and <span className='var'>k = 12</span>{" "}
        then <span className='var'>h(k) = 112</span> mod{" "}
        <span className='var'>10 = 2</span>. The value of{" "}
        <span className='var'>m</span> must not be the powers of{" "}
        <span className='var'>2</span>. This because the powers of{" "}
        <span className='bar'>2</span> in binary format are{" "}
        <span className='var'>10, 100, 1000, ...</span>. When we find k mod m,
        we will always get the lower order p-bits.
      </p>
      <CodePreview
        code={`
        if m = 22, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 01
        if m = 23, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 001
        if m = 24, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 0001
        if m = 2p, then h(k) = p lower bits of m
        `}
        language='c'
      />
      <h3 className='sub-sub-title'>2. Multiplication Method</h3>
      <p>
        <span className='var'>h(k) = ⌊m(kA mod 1)⌋</span>
      </p>
      <p>where, </p>
      <ul>
        <li>
          <span className='var'>kA mod 1</span> gives the fractional part{" "}
          <span className='var'>kA</span>,
        </li>
        <li>
          <span className='var'>⌊ ⌋</span> gives the floor value
        </li>
        <li>
          <span className='var'>A</span> is any constant. The value of A lies
          between 0 and 1. But, an optimal choice will be{" "}
          <span className='var'>≈ (√5-1)/2</span> suggested by Knuth.
        </li>
      </ul>
      <h3 className='sub-sub-title'>3. Universal Hashing</h3>
      <p>
        In Universal hashing, the hash function is chosen at random independent
        of keys.
      </p>
      <div className='divider'></div>
      <h3 className='sub-title'>Java Example</h3>
      <CodePreview
        code={`
        // Java program to demonstrate working of HashTable 

        import java.util.*; 
        
        class HashTable { 
          public static void main(String args[]) 
          {
          Hashtable<Integer, Integer> 
            ht = new Hashtable<Integer, Integer>(); 
          
          ht.put(123, 432); 
          ht.put(12, 2345);
          ht.put(15, 5643); 
          ht.put(3, 321);
        
          ht.remove(12);
        
          System.out.println(ht); 
          } 
        } 
        `}
        language='java'
      />
    </div>
  )
}

export default WhatisHashTable
