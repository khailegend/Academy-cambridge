import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const handleGetRegistrationDetails = async (program_id) => {
  try {
    const rs = await axios.get(`${SERVER_URL}/registration-detail/${program_id}`);
    return rs.data;
  } catch (error) {
    return error
  }
};
