import * as React from 'react';
import { render } from '@testing-library/react';

render () {
  return  
    <span className="rightSidebar">Right Sidebar</span>
}

render() {
  let className = 'rightSidebar';
  if (this.props.isActive) {
    className += 'rightSidebar-active'
  }
}

export default "rightsidebar";