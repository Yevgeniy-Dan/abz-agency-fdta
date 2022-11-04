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
