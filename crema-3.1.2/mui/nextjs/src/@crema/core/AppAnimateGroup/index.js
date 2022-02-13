import React from 'react';
import {Box} from '@mui/material';
import PropsTypes from 'prop-types';

const AppAnimateGroup = ({loading, children, ...props}) => {
  return <Box {...props}>{children}</Box>;
};

export default AppAnimateGroup;
AppAnimateGroup.propTypes = {
  children: PropsTypes.node,
  loading: PropsTypes.node,
};

// import PropTypes from 'prop-types';
// import React, {memo} from 'react';
// import {VelocityTransitionGroup} from 'velocity-react';
// import 'velocity-animate/velocity.ui';
//
// const enterAnimationDefaults = {
//   animation: 'transition.fadeIn',
//   stagger: 50,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };
//
// const leaveAnimationDefaults = {
//   animation: 'transition.slideUpOut',
//   backwards: 150,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };
//
// function AppAnimateGroup({...props}) {
//   return (
//     <VelocityTransitionGroup
//       {...props}
//       enter={{...enterAnimationDefaults, ...props.enter}}
//       leave={{...leaveAnimationDefaults, ...props.leave}}
//     />
//   );
// }
//
// AppAnimateGroup.propTypes = {
//   children: PropTypes.any,
//   enter: PropTypes.any,
//   leave: PropTypes.any,
// };
//
// AppAnimateGroup.defaultProps = {
//   enter: enterAnimationDefaults,
//   leave: leaveAnimationDefaults,
//   easing: [0.4, 0.0, 0.2, 1],
//   runOnMount: true,
//   enterHideStyle: {
//     visibility: 'visible',
//   },
//   enterShowStyle: {
//     visibility: 'hidden',
//   },
// };
//
// export default memo(AppAnimateGroup);
