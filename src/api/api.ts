const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function postAdmission(formData) {
  const res = await fetch(`${VITE_API_BASE_URL}/v1/admission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Submission failed");

  return res.json();
}

export async function postContact(formData) {
  const res = await fetch(`${VITE_API_BASE_URL}/v1/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Submission failed");

  return res.json();
}
