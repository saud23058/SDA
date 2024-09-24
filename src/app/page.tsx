
import Counter from '@/components/counter';
import SimpleCounter from '@/components/simpleCounter';

import React from 'react';


const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    
   <Counter/>
    </div>
  );
};

export default HomePage;
