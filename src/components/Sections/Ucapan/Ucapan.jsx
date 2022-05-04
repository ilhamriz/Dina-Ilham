import css from "./Ucapan.module.scss";
import PropTypes from "prop-types";
import { Element } from "react-scroll/modules";
import { Box, Container, Snackbar } from "@mui/material";
import LazyLoad from "react-lazyload";
import { LoadingSkeleton } from "../../Layout";
import { flower_7, flower_7_webp } from "../../../assets";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { ButtonMain, FieldCustomInput } from "../../Form";
import { Footer, HasilUcapan } from "../";
import axios from "axios";
import { useState } from "react";
import { PulseLoader } from "react-spinners";

const initialValues = {
  nama: "",
  ucapan: "",
};

const validationSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, "Terlalu pendek!")
    .max(20, "Terlalu panjang!")
    .required("Nama wajib diisi"),
  ucapan: Yup.string()
    .min(2, "Terlalu pendek!")
    .max(200, "Terlalu panjang!")
    .required("Ucapan wajib diisi"),
});

function Component({ isTablet }) {
  const URL_API = "https://untuk-ilham.herokuapp.com/api/terms";
  const [refresh, setRefresh] = useState(0);
  const [openNotif, setOpenNotif] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (payload) => {
    setLoading(true);
    const axiosInstance = axios.create({});
    const data = {
      name: payload.nama,
      description: payload.ucapan
    };

    const options = {
      url: URL_API,
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "Content-Type",
      }
    }

    axiosInstance(options)
    .then(response => {
      console.log(response);
      setLoading(false);
      setOpenNotif(true);
      setRefresh((state) => (state += 1));
      resetForm()
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    })
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  const { handleSubmit, values, resetForm } = formik;

  return (
    <Element name="Ucapan" className={css.ucapan_hasil_footer}>
      <section>
        <h2 className="hidden">Ucapan</h2>
        <Box className={css.ucapan__wrapper}>
          <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
            <Box className={css.ucapan__inner}>
              <Box
                className={`text-body section__title`}
                data-aos="fade-right"
                sx={{ color: "#FFFFFF" }}
              >
                <span>Berikan </span>
                <span>Kami </span>
                <span>Ucapan</span>
              </Box>
              <FormikProvider value={formik}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  className={css.ucapan__container}
                  autoComplete="off"
                  data-aos={"fade-up"}
                  data-aos-delay={0}
                >
                  <Box className={css.ucapan__form}>
                    <Box mb={1}>Nama</Box>
                    <FieldCustomInput
                      name="nama"
                      placeholder="Kemal Zulkarnain"
                      darkmode="true"
                      value={values.nama || ""}
                      defaultFormik
                    />
                  </Box>
                  <Box className={css.ucapan__form}>
                    <Box mb={1}>Berikan ucapan/doa restu</Box>
                    <FieldCustomInput
                      name="ucapan"
                      placeholder="Selamat ya Dina & Ilham"
                      darkmode="true"
                      multiline={true}
                      minRows={3}
                      value={values.ucapan || ""}
                      defaultFormik
                    />
                  </Box>
                  <Box data-aos={"fade-up"} data-aos-delay={200} maxWidth={180}>
                    <ButtonMain type="submit" style={{ width: "100%" }}>
                      {loading ? (
                        <PulseLoader color={"#FFFFFF"} loading={loading} size={10} />
                      ) : "Kirim"}
                    </ButtonMain>
                  </Box>
                </Box>
              </FormikProvider>
            </Box>
          </Container>

          <LazyLoad
            height={200}
            offset={0}
            placeholder={<LoadingSkeleton width={100} height={200} />}
            className={css.ucapan__bunga}
          >
            <picture>
              <source srcSet={flower_7_webp} type="image/webp" />
              <img
                src={flower_7}
                alt="Bunga"
                data-aos={"zoom-in"}
                data-aos-delay={isTablet ? 400 : 0}
              />
            </picture>
          </LazyLoad>
        </Box>
      </section>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openNotif}
        autoHideDuration={2000}
        message={"Berhasil memberikan ucapan"}
        onClose={() => setOpenNotif(false)}
      />

      <HasilUcapan refresh={refresh} />
      <Footer />
    </Element>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
};

export default Component;
