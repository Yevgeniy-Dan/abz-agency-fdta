import api from "../http";

export default class UserService {
  static async getUsers(page) {
    const fetchUsers = async (page) => {
      return await api.get("/users", {
        params: {
          page: page,
          count: 6,
        },
      });
    };

    try {
      const response = await fetchUsers(page);

      return {
        success: true,
        message: "Success",
        usersData: response.data,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "A server error has occurred",
      };
    }
  }
}
