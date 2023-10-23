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
  createData('Trường Đại học Bách Khoa', 'Học viện Cảnh sát'),
  createData(
    'Khoa Y - Đại học Quốc gia TP Hồ Chí Minh ',
    'Trường Đại học Kinh tế TP Hồ Chí Minh'
  ),
  createData('Trường Đại học Khoa Học Tự Nhiên', 'Trường Đại học Ngân Hàng'),
  createData(
    'Trường Đại học Ngoại Thương',
    'Các trường Đại học nằm trong khối'
  ),
  createData(
    'Trường Đại học Khoa học Xã hội và Nhân văn ',
    'Đại học Quốc gia TP Hồ Chí Minh'
  ),
];
export default function SchoolTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: 'auto' }}>
      <Table
        aria-label="simple table"
        sx={{ minWidth: 650, border: '1px solid black' }}
      >
        <TableHead sx={{ textAlign: 'center' }}>
          <TableRow sx={{ padding: 0 }}>
            <TableCell
              colSpan={2}
              sx={{ border: 1, padding: 0 }}
              align="center"
            >
              <strong>Một số trường Đại học tiêu biểu</strong>
            </TableCell>
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
