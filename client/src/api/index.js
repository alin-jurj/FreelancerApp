import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const addProject = (newProject) => API.post('/portofolio', newProject);
export const fetchUserProjects = () => API.get('/portofolio/getUserProjects');
export const deleteProject = (id) => API.delete(`/portofolio/${id}`);

export const addCreditCard = (newCreditCard) => API.post('/CreditCard', newCreditCard);
export const fetchUserCreditCards = () => API.get('/CreditCard');
export const deleteCreditCard = (id) => API.delete(`/CreditCard/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsers = () => API.get('/user/users');
export const getCompanies = () => API.get('/user/companies');
export const getFreelancers = () => API.get('/user/freelancers');
export const getUser = (id) => API.get(`/user/${id}`);
export const deleteUser = (id) => API.delete(`/user/${id}`);


export const getJoboffers = () => API.get('/joboffer/');
export const addJoboffer = (offer) => API.post('/joboffer/add', offer);
export const updateJobOffer=(id, updatedJobOffer) => API.patch(`/joboffer/${id}`, updatedJobOffer);
export const deleteJobOffer = (id) => API.delete(`/joboffer/${id}`);

export const addComplaint = (complaint) => API.post('/complaint/add', complaint);
export const getComplaints = () => API.get('/complaint/');

export const addReview = (review) => API.post('/review/add', review);
export const getReviews = () => API.get('/review/');
export const updateReview = (id, updatedReview) => API.patch(`/review/${id}`, updatedReview);
export const deleteReview = (id) => API.delete(`/review/${id}`);