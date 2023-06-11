const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "35625970-89038dd523b582e6c8e1b8881";

export const getImagesGalery = async ({searchQuery, currentPage, limit }) => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${currentPage}`);
  // console.log(response);
  
  if (!response.ok) {
    throw new Error("Smth went wrong");
  }
    
  return response.json();
}