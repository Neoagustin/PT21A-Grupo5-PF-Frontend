const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLoginGoogleUser = async () => {
  try {
    window.location.href = `${API_URL}/auth/login`;
  } catch (err) {
    console.log(err);
  }
};