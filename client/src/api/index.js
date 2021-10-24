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

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsers = () => API.get('/user/users');
export const getCompanies = () => API.get('/user/companies');
export const getUser = (id) => API.get(`/user/${id}`);

export const getJoboffers = () => API.get('/joboffer/');
export const addJoboffer = (offer) => API.post('/joboffer/add', offer);

export const addComplaint = (complaint) => API.post('/complaint/add', complaint);
export const getComplaints = () => API.get('/complaint/');