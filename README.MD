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
    rootId="example-root-id"            /* Optional */
    rootMargin="10px 20px 30px 40px"    /* Optional */
    threshold={0}                       /* Optional */
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

**rootId** - rootId value is a string value which specifies id attribute for the the element which is used as the viewport for checking visiblity of the target. Must be the ancestor of the target. Default value for root will is null is rootId is not specified.

**rootMargin** - Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

**threshold** - It could be a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Default value is 0.

For example, if you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

## Authors

- **Amit Kushwaha** (https://github.com/devilcrucifier)

## Licence

- MIT
