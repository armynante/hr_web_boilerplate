import bcrypt from 'bcryptjs';
import { prisma } from '../../lib/db';

const AuthService = () => {

  interface LoginParams {
    email: string;
    password: string;
  };

  const register = async ( { email, password }:LoginParams ) => {
    password = bcrypt.hashSync( password, 8 );
    
    let user = prisma.user.create( {
      data: {
        email: email.toLowerCase(),
        password,
      },
    } );

    return { user };
  };

  const login = async( { email, password }:LoginParams ) =>  {
    const user = await prisma.user.findUnique( {
      where: {
        email
      }
    } );
    if ( !user ) {
      throw 'User not registered';
    }
    if ( !password ) {
      throw 'No password provided';
    }
    const checkPassword = bcrypt.compareSync( password, user.password as string );
    if ( !checkPassword ) { throw 'Email address or password not valid'; };
  };

  return {
    register,
    login
  };
};

export default AuthService;