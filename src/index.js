import React, { Component } from "react";
import PropTypes from "prop-types";

class Observer extends Component {
  componentDidMount() {
    this.interSectionObersever();
  }

  interSectionObersever = () => {
    const { onChange, elementId, threshold } = this.props;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold || 0
    };

    let observer = new IntersectionObserver(onChange, options);
    let target = document.querySelector(`#${elementId}`);
    observer.observe(target);
  };

  render() {
    const { children, elementId } = this.props;
    return <div id={elementId}>{children}</div>;
  }
}

Observer.propTypes = {
  onChange: PropTypes.func.isRequired,
  elementId: PropTypes.string.isRequired,
  threshold: PropTypes.number
};

export default Observer;
