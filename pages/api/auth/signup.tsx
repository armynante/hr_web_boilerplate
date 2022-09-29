import { NextApiRequest, NextApiResponse } from 'next';
import AuthController from '../../../lib/conrollers/auth.controller';

const Auth = AuthController();

const loginRoute =  async function( req :NextApiRequest, res:NextApiResponse ) {
  switch ( req.method ) {
  case 'POST':
    return Auth.register( req, res );
  }
};

export default loginRoute;