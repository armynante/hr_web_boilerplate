import AuthService from '../services/auth.service';
import { NextApiRequest, NextApiResponse } from 'next';

const Auth = AuthService();

export const AuthController = () => {

  const register = async ( req:NextApiRequest, res:NextApiResponse ) => {
    try {
      const user = await Auth.register( req.body );
      res.status( 200 ).json( {
        status: true,
        message: 'User created successfully',
        data: user
      } );
    }
    catch ( e ) {
      res.status( 200 ).json( {
        status: true,
        message: 'User created successfully',
        error: e
      } );
    }
  };

  const login = async ( req:NextApiRequest, res:NextApiResponse ) => {
    try {
      const data = await Auth.login( req.body );
      res.status( 200 ).json( {
        status: true,
        message: 'Account login successful',
        data
      } );
    } catch ( e ) {
      res.status( 500 ).json( {
        status: true,
        message: 'Account login failed',
        error: e
      } );
    }
  };

  return {
    register,
    login
  };
}; 

export default AuthController;