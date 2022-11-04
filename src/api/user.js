export const onGetUsers = async (page = 1) => {
  const fetchUsers = async (page) => {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );

    if (!response.ok) {
      throw new Error("Could not fetch users data");
    }

    const data = await response.json();

    return data;
  };

  try {
    const usersData = await fetchUsers(page);

    return usersData;
  } catch (error) {
    return {};
  }
};

export const onPositionsGet = async () => {
  const fetchPositions = async (page) => {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );

    if (!response.ok) {
      throw new Error("Could not fetch users data");
    }

    const data = await response.json();

    return data;
  };

  try {
    const positionsData = await fetchPositions();

    return positionsData;
  } catch (error) {
    return {};
  }
};
