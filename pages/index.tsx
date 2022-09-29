import type { NextPage } from 'next';
import Sidebar from '../components/layouts/sidebar/Sidebar';

const Protected: NextPage = () => {
  return (
    <Sidebar>
      <h1>PROTECTED</h1>
    </Sidebar>
  );
};

export default Protected;
