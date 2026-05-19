/* ================= EMAIL VALIDATION ================= */

export const isValidEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

/* ================= PHONE VALIDATION ================= */

export const isValidPhone = (phone) => {
  const regex = /^[6-9]\d{9}$/;

  return regex.test(phone);
};

/* ================= CONTACT FORM VALIDATION ================= */

export const validateContactForm = (formData) => {
  const errors = {};

  /* NAME */
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  /* EMAIL */
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email address";
  }

  /* PHONE */
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = "Invalid phone number";
  }

  /* MESSAGE */
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};