import React from "react";
import CustomTable from "./CustomTable";
import "./App.css";
import { Column } from "react-table";
import { Box, Container } from "@material-ui/core";

const data = [
  {
    age: 1,
    visits: 1,
    status: "Good",
    progress: 100,
  },
  {
    age: 1,
    visits: 1,
    status: "Good",
    progress: 100,
  },
  {
    age: 1,
    visits: 1,
    status: "Good",
    progress: 100,
  },
  {
    age: 1,
    visits: 1,
    status: "Good",
    progress: 100,
  },
];

function App() {
  const columns: Array<
    Column<{ age: number; visits: number; status: string; progress: number }>
  > = React.useMemo(
    () => [
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Box py={5}>
          <CustomTable columns={columns} data={data} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
