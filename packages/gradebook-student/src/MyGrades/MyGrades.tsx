import { GradesTable } from "../GradesTable/GradesTable";

export const MyGrades = () => {
    const studentGrades = [
        {
          courseName: "English",
          grades: [
            { subject: "1st semester", grade: "A" },
            { subject: "2nd semester", grade: "C" },
            { subject: "Annual grade", grade: "B" }
          ]
        },
        {
          courseName: "Mathematics",
          grades: [
            { subject: "1st semester", grade: "B" },
            { subject: "2nd semester", grade: "A" },
            { subject: "Annual grade", grade: "A" }
          ]
        },
        {
          courseName: "Science",
          grades: [
            { subject: "1st semester", grade: "A" },
            { subject: "2nd semester", grade: "B" },
            { subject: "Annual grade", grade: "B" }
          ]
        },
        {
          courseName: "History",
          grades: [
            { subject: "1st semester", grade: "B" },
            { subject: "2nd semester", grade: "A" },
            { subject: "Annual grade", grade: "A" }
          ]
        },
        {
          courseName: "Art",
          grades: [
            { subject: "1st semester", grade: "A" },
            { subject: "2nd semester", grade: "A" },
            { subject: "Annual grade", grade: "A" }
          ]
        },
        {
          courseName: "Physical Education",
          grades: [
            { subject: "1st semester", grade: "B" },
            { subject: "2nd semester", grade: "B" },
            { subject: "Annual grade", grade: "B" }
          ]
        }
      ]

      const rows = studentGrades.map((student) => ({header: student.courseName, grades: student.grades}));
    return (
        <GradesTable rows={rows} />
    );
};