import { refs } from '../main';

export function getPictures() {
  const query = refs.form.elements.searchQuery.value.trim();
  const API_KEY = '42027897-ca60981f5971518ff8fefcb8b';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearcg: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
