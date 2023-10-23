import axios from 'axios';
const SUBJECT_API = `http://localhost:8888/api/v1/subject`;

export const handleGetSubject = async () => {
  try {
    const rs = await axios.get(`${SUBJECT_API}/list`);
    return rs.data;
  } catch (error) {
    return error;
  }
};
