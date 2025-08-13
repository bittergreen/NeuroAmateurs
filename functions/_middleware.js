// 仅对 /api/* 路径加 CORS，其他静态资源/页面不改头
export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/')) {
    return next();
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // 如需限制可换成具体域名
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const response = await next();
  const headers = new Headers(response.headers);
  Object.entries(corsHeaders).forEach(([k, v]) => headers.set(k, v));

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};