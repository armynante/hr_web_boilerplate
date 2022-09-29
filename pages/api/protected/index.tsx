import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  content?: string
  error?: string
}

const isProtected = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  res.send( {
    content:
        'ACCESS GRANTED: This is protected content. You can access this content because you are signed in.',
  } );
};

export default isProtected;