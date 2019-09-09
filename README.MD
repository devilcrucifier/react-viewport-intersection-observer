# react-viewport-intersection-observer

A React npm package for Intersection Observer API.
URL: https://www.npmjs.com/package/react-viewport-intersection-observer

## Installing

```
npm i --save react-viewport-intersection-observer

```

## Usage

```
import Observer from "react-viewport-intersection-observer";

const ObserverExample = () =>
  <Observer
    onChange={callbackExample}
    elementId="exampleId"
    threshold={0} /* Optional */
  >
    {children}
  </Observer> ;

```

## Props

**onChange** - Callback function to be invoked whenever the target meets a threshold specified for the IntersectionObserver.

The callback receives a list of IntersectionObserverEntry objects and the observer:

Callback example : 

```
let callback = (entries, observer) => { 
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

```
**elementId** - String value for the id attribute specific to a unique id for an HTML element.

**threshold** - It could be a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Default value is 0. 

For example, if you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

## Authors

- **Amit Kushwaha** (https://github.com/devilcrucifier)

## Licence

- MIT
