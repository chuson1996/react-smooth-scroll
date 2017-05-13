import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class ManualScroll extends Component{
  componentWillReceiveProps(nextProps) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, Math.round(nextProps.scrollY));
    });
  }

  render() {
    return <span></span>
  }
}

export default class SmoothScroll2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };


    this.onmousewheel = this.onmousewheel.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.ontouchstart = this.ontouchstart.bind(this);
    this.ontouchmove = this.ontouchmove.bind(this);
  }

  componentDidMount() {
    this.pinY = window.scrollY;

    window.addEventListener('wheel', this.onmousewheel);
    window.addEventListener('keydown', this.onkeydown);
    // window.addEventListener('touchmove', this.ontouchmove);
    // window.addEventListener('touchstart', this.ontouchstart);

    if (this.props.scrollTopWhenRouteChange) {
      this.props.history.listen(() => {
        window.scrollTo(0, 0);
        this.setState({
          scrollY: 0
        });
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onmousewheel);
    window.removeEventListener('keydown', this.onkeydown);
    // window.removeEventListener('touchmove', this.ontouchmove);
    // window.removeEventListener('touchstart', this.ontouchstart);
  }

  stayInRange(min, max, value) {
    return Math.min(max, Math.max(min, value));
  }

  move(deltaY) {
    if (document.querySelector('html').style.overflowY === 'hidden') {
      return ;
    }
    this.setState(({ scrollY }) => ({
      scrollY: this.stayInRange(
        0,
        document.querySelector('html').offsetHeight - window.innerHeight,
        scrollY + deltaY
      )
    }));
  }

  onkeydown(e) {
    if (e.target === document.body && e.key === 'ArrowDown') {
      e.preventDefault();
      this.move(20);
    } else if (e.target === document.body && e.key === 'ArrowUp') {
      e.preventDefault();
      this.move(-20);
    }
  }

  onmousewheel(e) {
    if (document.body.contains(e.target) || e.target === document.body) {
      e.preventDefault();
      this.move(e.deltaY);
    }
  }

  ontouchstart(e) {
    this.pinY = e.layerY;
  }

  ontouchmove(e) {
    // Not working right now
    if (this.container.contains(e.target) || e.target === this.container) {
      console.log(e);
      e.preventDefault();
      const deltaY = this.pinY - e.layerY;
      // this.move(deltaY * 2);
      console.log(deltaY);
    }
    this.pinY = e.layerY;
  }

  render() {
    const { scrollY } = this.state;
    return (
      <div ref={(elem) => this.container = elem}>
        <Motion style={{ scrollY: spring(scrollY)}}>
          {({ scrollY }) =>
            <ManualScroll scrollY={scrollY}></ManualScroll>}
        </Motion>
        {this.props.children}
      </div>
    );
  }
}
