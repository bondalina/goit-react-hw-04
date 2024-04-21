import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
export const FetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos/", {
    params: {
      client_id: "NyorYZRAs_bZ8BmLzN7MNNdTDaGVfFrj5iE8aL2kSMg",
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });

  return response.data.results;
};
