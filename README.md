# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jasforshort/lotide`

**Require it:**

`const _ = require('@jasforshort/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: Function that asserts two arrays and returns if equal or not
* assertEqual: Function that asserts two values and returns if equal or not
* assertObjectsEqual: Function that asserts two objects and returns if equal or not
* countLetters: Function that returns counts of each letter in a string
* countOnly: Function that takes an item and returns counts for a specific subset of those items
* eqArrays: Function that compares two arrays
* eqObjects: Function that compares two objects
* findKey: Function that scans an object and returns the first key through a callback that is a truthy value
* findKeyByValue: Function that scans an object and returns the first key with the value, otherwise returns undefined
* flatten: Function that takes in an array, including nested arrays, and returns a flattened array
* head: Function that returns the first element from the array
* index: Lists all the available functions in an object
* letterPositions: Function that returns all the indices in the string for each specific character
* map: Function that returns a new array based on an function passed as a parameter
* middle: Function that returns the middle element(s) of an array
* tail: Function that returns every value of an array but the head
* takeUntil: Function that returns a slice of the array with the starting elements
* without: Function that returns an array, having removed unwanted elements