import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Student } from 'models';

export interface RankingListProps {
    studentList: Student[];
}

export default function RankingList({ studentList }: RankingListProps) {
    return (
        <TableContainer>
            <Table size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: '12px' }} align="center">
                            #
                        </TableCell>
                        <TableCell sx={{ fontSize: '12px' }} align="left">
                            Name
                        </TableCell>
                        <TableCell sx={{ fontSize: '12px' }} align="right">
                            Mark
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentList.map((student, index) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ fontSize: '12px' }} align="center">
                                {index + 1}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} align="left">
                                {student.name}
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px' }} align="right">
                                {student.mark}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
