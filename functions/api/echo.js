export const onRequestPost = async ({ request }) => {
  const contentType = request.headers.get('Content-Type') || '';
  let data;

  if (contentType.includes('application/json')) {
    data = await request.json();
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const form = await request.formData();
    data = Object.fromEntries(form.entries());
  } else if (contentType.includes('text/plain')) {
    data = await request.text();
  } else {
    // 其它类型按文本处理，或自行扩展 multipart/form-data
    data = await request.text();
  }

  return new Response(JSON.stringify({ received: data }), {
    headers: { 'Content-Type': 'application/json' },
  });
};