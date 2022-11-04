import api from "../http/index";

export default class AuthService {
  static async register(data) {
    const { name, email, phone, position, photo } = data;
    const token = await this.#getToken();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position);
    formData.append("photo", photo);

    return api.post("/users", formData, {
      headers: {
        Token: token,
      },
    });
  }

  static async #getToken() {
    try {
      const tokenData = await api.get("token");

      return tokenData.data.token;
    } catch (error) {
      return null;
    }
  }
}
