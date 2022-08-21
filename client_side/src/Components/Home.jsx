import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Home = () => {
  const [data, setData] = useState([]);
  const [page , setPage] = useState(1);

  const fetchData = () => {
    axios
      .get(`http://localhost:3004/get?page=${page}`)
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const deleteData = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:3004/delete/${id}`)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        // console.log("err");
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);




  const handlepage = (e) => { 
    console.log(e)
    if(page ===1 && e === -1){
      setPage(page)
    }else{
      setPage(page + e)
    }
  }



  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/Signup"}>
        <Button sx={{ margin: "40px" }} variant="contained">
          {" "}
          Make Co-Admin
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contect</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="center">{row.Name}</TableCell>
                <TableCell align="center">{row.Email}</TableCell>
                <TableCell align="center">{row.Contact}</TableCell>
                <TableCell sx={{ width: "300px" }} align="center">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/view/${row.ID}`}
                  >
                    {" "}
                    <Button>view</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      deleteData(row.ID);
                    }}
                  >
                    Delate
                  </Button>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/update/${row.ID}`}
                  >
                    <Button>update</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
      <Button sx={{ margin: "40px" }} onClick={()=>handlepage(-1)} variant="contained">
           Previous
        </Button>
        <Button  sx={{ margin: "40px" }}  onClick= {()=>handlepage(1)} variant="contained">Next</Button>

      </Box>
    </div>
  );
};

export default Home;
