# Fluit — Automazioni semplici, pronte all’uso

**Fluit** è un hub di micro-tool e automazioni, pensato per collegarsi a workflow **n8n** tramite **Webhook**.  
Questo repository contiene una landing page e tre tool di esempio:

- 🧾 Riassunto di testo — `/tools/text-summarizer.html`
- 📧 Email Extractor — `/tools/email-extractor.html`
- 📊 CSV Cleaner — `/tools/csv-cleaner.html`

## 🚀 Deploy rapido (Vercel)

1. Crea un fork o clona il repo.
2. Vai su [https://vercel.com](https://vercel.com) e collega il tuo account GitHub.
3. **New Project** → seleziona `fluit` → Deploy.
4. Il sito sarà disponibile su `https://fluit.vercel.app` (o simile).

## 🔗 Collegare n8n

Ogni tool invia i dati a un Webhook n8n (method: `POST`, body: JSON).

1. In n8n crea un **Workflow** con **Trigger: Webhook** (Production URL).
2. Copia l’URL Production.
3. Apri il file del tool e sostituisci `WEBHOOK_URL` con il tuo URL.

**Formati attesi (esempio):**

- `text-summarizer.html` → `{ text: string, length: "breve"|"media"|"dettagliata", lang: "it"|"en" }`  
  **Risposta attesa:** `{ summary: string }` o `text/plain`.

- `email-extractor.html` → `{ text: string }`  
  **Risposta attesa:** `{ emails: string[] }`.

- `csv-cleaner.html` → `{ fileName: string, csvBase64: string, options: { dropEmpty: boolean, dropDuplicates: boolean } }`  
  **Risposta attesa:** `{ csvBase64: string }`.

> Suggerimento: in n8n puoi usare nodi **Function**, **Code**, **AI** per implementare la logica.

## 🧩 Aggiungere un nuovo tool

1. Duplica un file in `/tools/` (es. `mio-tool.html`).
2. Crea il form e invia i dati al tuo Webhook con `fetch()`.
3. Aggiungi la nuova scheda anche nella sezione “Tool disponibili” in `index.html`.

## 🛠️ Stack

- UI: **Tailwind CSS (CDN)**
- Statico: HTML + JS vanilla
- Automazioni: **n8n** (via **Webhook**)

## 📜 Licenza

Questo progetto è rilasciato sotto licenza **MIT**. Vedi [LICENSE](./LICENSE).
