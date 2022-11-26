
import useCount from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // useCountのparameterに何も入れなくてもいいのは、use-contextでdefaultとして、forwardが設定されているから
  const counter = useCount();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
