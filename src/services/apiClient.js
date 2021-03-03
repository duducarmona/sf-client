import axios from 'axios';

class ApiClient {
  constructor() {
		this.apiClient = axios.create({
			baseURL: 'http://localhost:5000',
			withCredentials: true,
		});
	}

  getAllPrograms() {
    return this.apiClient.get('/');
  }

	getProgramWithDev(id) {
		return this.apiClient.get(`/programs/${id}`);
	}
}

const apiClient = new ApiClient();
export default apiClient;
