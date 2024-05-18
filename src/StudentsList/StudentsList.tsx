import { GradesTable, Student, TableRow } from "../GradesTable/GradesTable";

export const StudentsList = () => {
    const students: Student[] = [
        {
            surname: "Anderson",
            forename: "Todd",
            grades: [
                { subject: "Modern poetry", grade: "A" },
                { subject: "Postmodern fiction", grade: "B" },
                { subject: "Grammar", grade: "B" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "A" },
                { subject: "Creative writing", grade: "B" },
                { subject: "Literature review", grade: "C" },
                { subject: "Vocabulary", grade: "B" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Cameron",
            forename: "Richard",
            grades: [
                { subject: "Modern poetry", grade: "B" },
                { subject: "Postmodern fiction", grade: "C" },
                { subject: "Grammar", grade: "A" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "C" },
                { subject: "Creative writing", grade: "A" },
                { subject: "Literature review", grade: "B" },
                { subject: "Vocabulary", grade: "C" },
                { subject: "Semester grade", grade: "C" },
            ],
        },
        {
            surname: "Dalton",
            forename: "Charlie",
            grades: [
                { subject: "Modern poetry", grade: "C" },
                { subject: "Postmodern fiction", grade: "A" },
                { subject: "Grammar", grade: "B" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "B" },
                { subject: "Creative writing", grade: "A" },
                { subject: "Literature review", grade: "A" },
                { subject: "Vocabulary", grade: "B" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Meeks",
            forename: "Steven",
            grades: [
                { subject: "Modern poetry", grade: "A" },
                { subject: "Postmodern fiction", grade: "B" },
                { subject: "Grammar", grade: "C" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "C" },
                { subject: "Creative writing", grade: "A" },
                { subject: "Literature review", grade: "B" },
                { subject: "Vocabulary", grade: "A" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Overstreet",
            forename: "Knox",
            grades: [
                { subject: "Modern poetry", grade: "B" },
                { subject: "Postmodern fiction", grade: "A" },
                { subject: "Grammar", grade: "A" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "B" },
                { subject: "Creative writing", grade: "C" },
                { subject: "Literature review", grade: "C" },
                { subject: "Vocabulary", grade: "B" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Perry",
            forename: "Neil",
            grades: [
                { subject: "Modern poetry", grade: "A" },
                { subject: "Postmodern fiction", grade: "B" },
                { subject: "Grammar", grade: "A" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "C" },
                { subject: "Creative writing", grade: "B" },
                { subject: "Literature review", grade: "B" },
                { subject: "Vocabulary", grade: "A" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Pitts",
            forename: "Gerard",
            grades: [
                { subject: "Modern poetry", grade: "B" },
                { subject: "Postmodern fiction", grade: "C" },
                { subject: "Grammar", grade: "A" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "B" },
                { subject: "Creative writing", grade: "B" },
                { subject: "Literature review", grade: "A" },
                { subject: "Vocabulary", grade: "C" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
        {
            surname: "Welch",
            forename: "Frederick",
            grades: [
                { subject: "Modern poetry", grade: "C" },
                { subject: "Postmodern fiction", grade: "A" },
                { subject: "Grammar", grade: "B" },
                { subject: "Literary analysis", grade: "N/A" },
                { subject: "Essay writing", grade: "B" },
                { subject: "Creative writing", grade: "C" },
                { subject: "Literature review", grade: "B" },
                { subject: "Vocabulary", grade: "B" },
                { subject: "Semester grade", grade: "B" },
            ],
        },
    ];

    const tableRows: TableRow[] = students.map((student) => ({
        header: `${student.surname}, ${student.forename}`,
        grades: student.grades,
    }));

    return (
        <GradesTable rows={tableRows} />
    );
};