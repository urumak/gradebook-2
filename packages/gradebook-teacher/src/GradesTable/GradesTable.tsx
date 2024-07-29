import styles from "./GradesTable.module.scss";

export interface Grade {
    subject: string;
    grade: string;
}

export interface Student {
    surname: string;
    forename: string;
    grades: Grade[];
}

export interface TableRow {
    header: string;
    grades: Grade[];
}
export interface GradesTableProps {
    rows: TableRow[];
}
export const GradesTable = ({ rows }: GradesTableProps) => {

    return (
        <div className={styles.container}>
            <h2>Grades</h2>
            <div className={styles.tableContainer}>
                <table className={styles.gradesTable}>
                    <thead>
                        <tr>
                            <th className={styles.studentHeader}></th>
                            {rows.length > 0 &&
                                rows[0]?.grades.map((grade, index) => (
                                    <th key={index}>{grade.subject}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows?.map((row, index) => (
                            <tr key={index}>
                                <td className={styles.studentName}>
                                    {row.header}
                                </td>
                                {row.grades.map((grade, idx) => (
                                    <td key={idx} className={styles.gradeCell}>
                                        {grade.grade}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};