import axios from 'axios';

const REGISTRATION_API = `${process.env.NEXT_PUBLIC_SERVER_URL}/registration/create `;

export const handleRegistrationPDF = async (data) => {
  try {
    const rs = await axios.post(REGISTRATION_API, data);
    return rs.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const handleGetRegistrationDetail = async (id) => {
  try {
    const rs = await axios.get(`${REGISTRATION_API}/registration-detail/${id}`);
    return rs.data;
  } catch (error) {
    return error;
  }
};
