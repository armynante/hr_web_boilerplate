import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  content?: string
  error?: string
}

const notProtected = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  res.send( {
    content:
        'ACCESS GRANTED: This is ***not*** protected content.',
  } );
};

export default notProtected;