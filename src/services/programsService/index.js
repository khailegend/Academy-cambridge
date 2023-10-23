import axios from 'axios';

const PROGRAMS_API = `${process.env.NEXT_PUBLIC_SERVER_URL}/program/list `;
export const handleGetPrograms = async () => {
  try {
    const rs = await axios.get(PROGRAMS_API);
    return rs.data;
  } catch (error) {
    return error;
  }
};
