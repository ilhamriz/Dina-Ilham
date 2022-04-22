import css from "./Konfirmasi.module.scss";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import { Element } from "react-scroll/modules";
import LazyLoad from "react-lazyload";
import { flower_1, flower_1_webp } from "../../../assets";
import {
  ButtonMain,
  FieldCustomInput,
  FieldCustomSelectDark,
} from "../../Form";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { LoadingSkeleton } from "../../Layout";

function Component({ isTablet }) {
  const URL_WHATSAPP = process.env.REACT_APP_URL_WHATSAPP;
  const listKehadiran = [
    { name: "Ya, saya akan datang", value: "YA" },
    { name: "Saya masih ragu", value: "RAGU" },
    { name: "Maaf, saya tidak bisa datang", value: "TIDAK" },
  ];

  const validationSchema = Yup.object().shape({
    nama: Yup.string()
      .min(2, "Terlalu pendek!")
      .max(20, "Terlalu panjang!")
      .required("Nama wajib diisi"),
    jumlah_hadir: Yup.string().required("Jumlah hadir wajib diisi"),
    kehadiran: Yup.string().required("Kehadiran wajib dipilih"),
  });

  const submit = (value) => {
    let text = `&text=Halo, saya ${value.nama}. `;
    if (value.kehadiran === "YA") {
      text += `Saya akan datang ke acara pernikahanmu`;
    } else if (value.kehadiran === "RAGU") {
      text += `Saya masih ragu datang ke acara pernikahanmu`;
    } else {
      text += `Maaf, saya tidak bisa datang ke acara pernikahanmu`;
    }
    
    let anchor = document.createElement("a");
    anchor.href = `${URL_WHATSAPP}${text}`;
    anchor.click();
  };

  const formik = useFormik({
    initialValues: {
      nama: "",
      jumlah_hadir: "",
      kehadiran: "YA",
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  const { handleSubmit, values } = formik;

  return (
    <section>
      <h2 className="hidden">Konfirmasi Kehadiran</h2>
      <Element name="Konfirmasi" className={css.konfirmasi__wrapper}>
        <Container fixed style={{ width: "100%", maxWidth: "1076px" }}>
          <Box className={css.konfirmasi__container}>
            <Box
              className={`text-body section__title`}
              sx={{ color: "#FFFFFF" }}
              data-aos="fade-right"
            >
              <span>Konfirmasi </span>
              <span>Kehadiran</span>
            </Box>
            <FormikProvider value={formik}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                className={css.konfirmasi__content}
                autoComplete="off"
                data-aos={"fade-up"}
                data-aos-delay={0}
              >
                <Box className={css.konfirmasi__form}>
                  <Box mb={1}>Nama</Box>
                  <FieldCustomInput
                    name="nama"
                    placeholder="Robert Fox"
                    darkmode="true"
                  />
                </Box>
                <Box className={css.konfirmasi__form}>
                  <Box mb={1}>Kehadiran</Box>
                  <FieldCustomSelectDark
                    name="kehadiran"
                    listOption={listKehadiran}
                  />
                </Box>
                {values.kehadiran !== "TIDAK" ? (
                  <Box className={css.konfirmasi__form}>
                    <Box mb={1}>Jumlah yang hadir</Box>
                    <FieldCustomInput
                      name="jumlah_hadir"
                      placeholder="10 Orang"
                      type="number"
                      darkmode="true"
                    />
                  </Box>
                ) : null}
                <Box
                  data-aos={"fade-up"}
                  data-aos-delay={200}
                >
                  <ButtonMain type="submit">Konfirmasi via Whatsapp</ButtonMain>
                </Box>
              </Box>
            </FormikProvider>
          </Box>
        </Container>

        <LazyLoad
          height={200}
          offset={0}
          placeholder={<LoadingSkeleton width={100} height={200} />}
          className={css.konfirmasi__bunga}
        >
          <picture>
            <source srcSet={flower_1_webp} type="image/webp" />
            <img
              src={flower_1}
              alt="Bunga"
              data-aos={"zoom-in"}
              data-aos-delay={isTablet ? 400 : 0}
            />
          </picture>
        </LazyLoad>
      </Element>
    </section>
  );
}

Component.propTypes = {
  isTablet: PropTypes.bool,
};

export default Component;
