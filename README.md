# range
Produces an iterable, array like range of values.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working on other projects. The use for creating this project came up so often that its creation was inevitable. There's nothing like the range operator in JavaScript/ Typescript like there is in Python. So, here's a good option to have that functionality.

## Technologies Used

Originally written as a function in JavaScript, it has since been completely rewritten as a class using Typescript.

## Features

* Create a sequence of numbers.
* Create an array of the sequence using the spread operator.
* Get each value and use separately.

## Setup

Just import the class into your project.

## Usage

Instantiate an instance of the Range class.
```
const range = new Range(rangeSize);
```
Can use the spread operator (...) on the instance created above, or
```
const nums: number[] = [...range];
```
retrieve the next iteration and the value produced.
```
range.next()
range.value
```
## Project Status

At this point, the code is viewed to be completed.
## Room for Improvement
The project works as it should, so the only improvement is if there are changes to Typescript.
## Contact

Feel free to contact me @michaelrjamesjr on twitter.
