export { default } from 'next-auth/middleware';


// All pages under protected route need authentication
export const config = { 
  matcher: [ 
    '/protected/:path*',
    '/api/protected/:path*'
  ] 
};

