import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface AnimatedNumberProps {
  target: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? target : 0 },
    delay: 200,
    config: { duration: 2000 },
  });

  return (
    <div ref={ref}>
      <animated.div className='text-4xl font-semibold'>
        {props.number.to((n) => n.toFixed(0))}
      </animated.div>
    </div>
  );
};

export default AnimatedNumber;
