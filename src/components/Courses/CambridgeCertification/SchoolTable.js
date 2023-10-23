import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(internalSchool, foreignSchool) {
  return { internalSchool, foreignSchool };
}

const rows = [
  createData('Trường Đại học Ngoại Thương', 'Đại học New York '),
  createData('Trường Đại học Bách Khoa ', 'Đại học Stanford'),
  createData(
    'Trường Đại học Kinh tế Thành phố Hồ Chí Minh ',
    'Đại học Cambridge '
  ),
  createData('Trường Đại học RMIT', 'Đại học Đại học Sydney'),
  createData('Trường Đại học FullBright ', 'Đại học Melbourne'),
  createData(
    'Trường Đại học Anh Quốc (BUV) ',
    'Đại học California, Los Angeles'
  ),
  createData(
    'Trường Đại học Y Dược Thành phố Hồ Chí Minh ',
    'Đại học Manchester'
  ),
  createData('Trường Đại học Kinh Tế Quốc Dân ', 'Đại học New York '),
  createData(
    'Trường Đại học Luật Thành phố Hồ Chí Minh  ',
    'Trường Đại học British Columbia'
  ),
  createData('Trường Đại học Khoa học Xã hội và Nhân văn  ', 'Đại học Munich'),
  createData(
    '.....................................................',
    '.....................................................'
  ),
];
export default function SchoolTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        sx={{ minWidth: 650, border: '1px solid black' }}
      >
        <TableHead sx={{ border: 1, borderRadius: 0 }}>
          <TableRow>
            <TableCell sx={{border: 1}}>TRƯỜNG ĐẠI HỌC TẠI VIỆT NAM</TableCell>
            <TableCell sx={{border: 1}}>TRƯỜNG ĐẠI HỌC NƯỚC NGOÀI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ height: 20 }}>
              <TableCell
                sx={{
                  width: '50%',
                  padding: 0,
                  paddingLeft: 2,
                  border: 'none',
                  borderRight: '1px solid black',
                }}
                align="left"
              >
                <span style={{ marginRight: '8px' }}>&#8226;</span>
                {row.internalSchool}
              </TableCell>
              <TableCell
                sx={{
                  width: '50%',
                  padding: 0,
                  paddingLeft: 2,
                  border: 'none',
                  borderLeft: '1px solid black',
                }}
                align="left"
              >
                <span style={{ marginRight: '8px' }}>&#8226;</span>
                {row.foreignSchool}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
