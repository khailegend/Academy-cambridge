import axios from 'axios';
const SUBJECT_API = process.env.NEXT_PUBLIC_SERVER_URL;

export const handleGetAllSubject = async () => {
  try {
    const rs = await axios.get(`${SUBJECT_API}/subject/list`);
    return rs.data;
  } catch (error) {
    return error;
  }
};

export const handleGetSubjectByProgram = async (id) => {
  try {
    const rs = await axios.get(`${SUBJECT_API}/subject/list?program_id=${id}`);
    return rs.data;
  } catch (error) {
    return error;
  }
};
