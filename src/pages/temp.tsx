import { useEffect } from 'react';
import Cookies from 'js-cookie';

const TempPAge = () => {
  useEffect(() => {
    Cookies.set('LYL_TOKEN', 'TEST');
  }, []);
  return <div>Enter</div>;
};

export default TempPAge;
