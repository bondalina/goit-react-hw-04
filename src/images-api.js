import axios from "axios";
axios.default.baseURL = "https://api.unsplash.com";
export const FetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      client_id: "NyorYZRAs_bZ8BmLzN7MNNdTDaGVfFrj5iE8aL2kSMg",
      query: searchQuery,
      page: currentPage,
      per_page: 12,
    },
  });
  return response.data;
};
