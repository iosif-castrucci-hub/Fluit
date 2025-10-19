// Fluit — script base
document.getElementById('year').textContent = new Date().getFullYear();

// Utilità semplice per richieste API
export async function postJSON(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  const ct = res.headers.get('content-type') || '';
  if (!res.ok) {
    const msg = ct.includes('application/json') ? (await res.json()).error || res.statusText : await res.text();
    throw new Error(msg || `Errore ${res.status}`);
  }
  return ct.includes('application/json') ? res.json() : res.text();
}
