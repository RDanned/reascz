import axios from '@/api/axios';

export type LeadData = {
  estateType: string;
  region: string;
  district: string;
  fullname: string;
  phone: string;
  email: string;
};

export const createLead = (data: LeadData) => axios.post('/lead', data);

const leadAPI = {
  createLead,
}

export default leadAPI;