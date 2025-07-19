export const config = {
  matcher: '/:path*',
};

export default async function middleware(request) {
  const url = new URL(request.url);
 const destination = 'https://51.178.149.237';

  return fetch(destination + url.pathname + url.search, {
    headers: request.headers,
    method: request.method,
    body: request.body,
  });
}
