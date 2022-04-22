import css from "./HasilUcapan.module.scss";
import { Box, Container, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { CardUcapan } from "../../Layout";
import axios from "axios";
import { SquareLoader } from "react-spinners";

function Component({ refresh }) {
  const URL_API = "https://untuk-ilham.herokuapp.com/api/terms";
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios.get(`${URL_API}?page=${page}&per_page=6`)
        .then((response) => {
          const { data, ...pagination } = response.data;
          setDatas(data);
          setPagination(pagination);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    fetchData();
  }, [page, refresh]);

  return (
    <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
      <Box className={css._wrapper}>
        <Box className={css._container}>
          {!loading ? (
            datas?.map((data) => (
              <CardUcapan name={data.name} key={data.id}>
                {data.description}
              </CardUcapan>
            ))
          ) : (
            [1, 2, 3, 4, 5, 6].map((item) => (
              <Box className={css._loading} key={item}>
                <SquareLoader color={'#14142b'} loading={loading} size={50} />
              </Box>
            ))
          )}
        </Box>
        {datas.length ? (
          <Box className={css._page}>
            <Pagination
              count={pagination.last_page}
              page={page}
              onChange={handleChange}
              classes={{ text: css._number }}
              color="primary"
            />
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}

export default Component;
