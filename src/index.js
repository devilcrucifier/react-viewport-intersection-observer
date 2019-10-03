import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Observer extends React.Component {
  componentDidMount() {
    this.interSectionObersever();
  }

  interSectionObersever = () => {
    const { onChange, rootId, rootMargin, threshold } = this.props;
    const target = ReactDOM.findDOMNode(this);

    let options = {
      root: document.querySelector(`#${rootId}`) || null,
      rootMargin: rootMargin || "0px",
      threshold: threshold || 0
    };

    let observer = new IntersectionObserver(onChange, options);
    observer.observe(target);
  };

  render() {
    return this.props.children;
  }
}

Observer.propTypes = {
  onChange: PropTypes.func.isRequired,
  rootId: PropTypes.string,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number
};

export default Observer;
