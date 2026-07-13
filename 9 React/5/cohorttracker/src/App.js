import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohorts = [
    {
      code: "INTADMDF10 - .NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Ashima",
      trainer: "Jojo Jove"
    },
    {
      code: "ADM21JF014 - Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      code: "CDBJF21025 - Java FSD",
      startDate: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aashima",
      trainer: "John Doe"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          code={cohort.code}
          startDate={cohort.startDate}
          status={cohort.status}
          coach={cohort.coach}
          trainer={cohort.trainer}
        />
      ))}

    </div>
  );
}

export default App;