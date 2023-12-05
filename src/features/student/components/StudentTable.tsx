import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Student } from 'models';
import { Button, Paper } from '@mui/material';
import { capitalizeString, getMarkColor } from 'utils/common';

export interface StudentTableProps {
    studentList: Student[];
}

export default function StudentTable({ studentList }: StudentTableProps) {
    const handleEditStudent = (student: Student) => {
        alert(student.id);
    };
    const handleRemoveStudent = (student: Student) => {
        alert(student.id);
    };

    return (
        <TableContainer component={Paper} sx={{ border: '1px solid #ccc' }}>
            <Table size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Mark</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentList?.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ fontSize: '12px' }} align="center">
                                {student.id}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }}>{student.name}</TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '12px',
                                    color: getMarkColor(student.mark),
                                    fontWeight: 'bold',
                                }}
                            >
                                {student.mark}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }}>
                                {capitalizeString(student.gender)}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }}>{student.city}</TableCell>

                            <TableCell sx={{ fontSize: '12px' }} align="right">
                                <Button
                                    onClick={() => handleEditStudent(student)}
                                    color="primary"
                                    size="small"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => handleRemoveStudent(student)}
                                    color="warning"
                                    size="small"
                                >
                                    Remove
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
