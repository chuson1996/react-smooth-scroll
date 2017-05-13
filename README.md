# react-smooth-scroll

This library only manipulates browser's `window` object. It doesn't apply to any other scrollable component, ... yet. And btw, it's under development, use it at your own risk. Also I would also appreciate if you report issues when you find some errors. :D

This library hacks smooth scrolling using react-motion.

Install:

```bash
npm install --save react-motion react-smooth-scroll
# or if you're using yarn
yarn add react-motion react-smooth-scroll
```

### Props:
*scrollTopWhenRouteChange*: boolean (Default: false). Change this to true if you want to scroll to the top of the window when route changes. Remember you would have to pass history to the component as well.

*history*: Object. Pass the history object of react-router here if scrollTopWhenRouteChange is true

## Usage:

```jsx
<ReactSmoothScroll>
  <YourApp/>
</ReactSmoothScroll>
```

