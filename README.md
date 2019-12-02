# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @juliebede/lotide`

**Require it:**

`const _ = require('@juliebede/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the array
* `tail(array)`: returns the tail end of an array
* `middle(array)`: returns the middle element(s) of an array
* `countLetters(aString)`: returns the number of times each letter is mentioned in the string
* `countOnly(arrayOfItems, itemsToCount)`: returns amount of times each item in itemsToCount occurs in arrayOfItems
* `findKeyByValue(anObject, value)`: returns the key with the value passed int he object anObject
* `findKey(object, callback)`: returns the key given the condition of callback (a function)
* `flatten(array)`: returns the 'flattened' version of a nested array
* `letterPositions(sentence)`: returns the index position(s) of each letter that occurs in the sentence (not including space)
* `map(array, callback)`: returns the array where each item in array has been manipulated based on the conditions of callback (a function)
* `takeUntil(array, callback)`: returns the array up to the condition of callback has been met
* `without(array, itemsToRemove)`: returns the array, but removed the items that occurs in itemsToRemove
