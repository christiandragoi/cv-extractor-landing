// lib/api.ts
const envApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const API_BASE = envApiUrl.endsWith("/api") ? envApiUrl : `${envApiUrl}/api`;

export async function uploadCV(file: File) {
  const formData = new FormData();
  formData.append("file", file); // FastAPI expects 'file'
  
  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function extractCV(fileId: string) {
  const res = await fetch(`${API_BASE}/extract/${fileId}`, {
    method: "POST",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json(); // Returns { job_id: string }
}

export async function checkStatus(jobId: string) {
  const res = await fetch(`${API_BASE}/status/${jobId}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// WebSocket for real-time updates
export function createBatchSocket(batchId: string) {
  const wsUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace("http", "ws");
  return new WebSocket(`${wsUrl}/api/ws/batch/${batchId}`);
}

// Candidates
export async function fetchCandidates() {
  const res = await fetch(`${API_BASE}/candidates`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function fetchCandidateById(id: string) {
  const res = await fetch(`${API_BASE}/candidates/${id}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
