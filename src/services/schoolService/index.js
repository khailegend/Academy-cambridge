import axios from 'axios';

const SCHOOL_API = `${process.env.NEXT_PUBLIC_SERVER_URL}/school/list `;

export const handleGetSchools = async () => {
  try {
    const rs = await axios.get(SCHOOL_API);
    return rs.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};