export const onRequestGet = () => {
  return new Response(
    JSON.stringify({ ok: true, timestamp: new Date().toISOString() }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    },
  );
};