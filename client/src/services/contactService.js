import api from "./api";

/* ================= SEND CONTACT FORM ================= */

export const sendContactForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);

    return response.data;
  } catch (error) {
    console.error("Contact Form Error:", error);

    throw error;
  }
};