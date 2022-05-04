import { Box, FormHelperText, Grid, Snackbar, TextField } from "@mui/material";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import css from "./AmplopDigital.module.scss";
import * as Yup from "yup";
import NumberFormat from "react-number-format";
import { ButtonMain } from "../../Form";
import { bca, bri, QR_BCA } from "../../../assets";
import { FieldCustomSelect, FieldCustomInput } from "../../Form";
import CopyToClipboard from "react-copy-to-clipboard";

function Component() {
  const URL_WHATSAPP = process.env.REACT_APP_URL_WHATSAPP;
  const [openNotif, setOpenNotif] = useState(false);

  const listBank = [
    { name: "BRI", value: "BRI" },
    { name: "BCA", value: "BCA" },
  ];

  const submit = (value) => {
    let text = `&text=Halo, saya ${value.name}. Sudah memberikan Amplop Digital ke Bank ${value.bank}, sebesar Rp. ${value.amount}`;

    let anchor = document.createElement("a");
    anchor.href = `${URL_WHATSAPP}${text}`;
    anchor.click();
  };

  const checkBank = () => {
    switch (values.bank) {
      case "BCA":
        return {
          logo: bca,
          number: "8135428091",
          name: "Muhammad Ilham Rizky",
          color: "#003399",
          qr_code: QR_BCA,
        };
      default:
        return {
          logo: bri,
          number: "161901006454508",
          name: "Dina Mulyana",
          color: "#00529C",
          qr_code: null,
        };
    }
  };

  const handleCopyText = async (result) => {
    if (result) setOpenNotif(true);
  };

  const validationSchema = Yup.object().shape({
    bank: Yup.string().required("Bank/e-money wajib dipilih"),
    name: Yup.string()
      .min(2, "Terlalu pendek!")
      .max(20, "Terlalu panjang!")
      .required("Nama wajib diisi"),
    amount: Yup.number().required("Jumlah wajib diisi"),
  });

  const formik = useFormik({
    initialValues: {
      bank: "BRI",
      name: "",
      amount: "",
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  const { handleSubmit, values } = formik;
  return (
    <FormikProvider value={formik}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={css.amplop}
        autoComplete="off"
        data-aos={"fade-up"}
        data-aos-delay={0}
      >
        <Box className={css.konfirmasi__form}>
          <Box className="text-label">Pilih Bank</Box>
          <FieldCustomSelect name="bank" listOption={listBank} />
        </Box>

        <Box className={css.card__wrapper}>
          {values.bank ? (
            <Grid container direction={"column"}>
              <Grid container item justifyContent={"center"}>
                <Box
                  className={css.card}
                  data-aos={"fade-up"}
                  data-aos-delay={200}
                >
                  <Box className={css.card__content}>
                    <img
                      src={checkBank().logo}
                      alt="Bank"
                      className={css.card__logo}
                    />
                    <Box>
                      <Box className={`${css.card__number__container}`}>
                        <Box className={`${css.card__number} header-4`}>
                          {checkBank().number}
                        </Box>

                        <CopyToClipboard
                          text={checkBank().number}
                          onCopy={(text, result) => handleCopyText(result)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" />
                          </svg>
                        </CopyToClipboard>
                      </Box>
                      <Box className={`${css.card__name} text-body`}>
                        {checkBank().name}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className={css.card__object}
                    sx={{ background: checkBank().color }}
                  />
                </Box>
              </Grid>
              {checkBank().qr_code ? (
                <Grid container item justifyContent={"center"}>
                  <Box
                    className={css.card__qrcode}
                    data-aos={"fade-up"}
                    data-aos-delay={400}
                  >
                    <img src={checkBank().qr_code} alt="QR Code" />
                  </Box>
                </Grid>
              ) : null}
            </Grid>
          ) : null}
        </Box>

        <Box className={css.konfirmasi__form}>
          <Box className="text-label">Nama</Box>
          <FieldCustomInput name="name" placeholder="Kemal Zulkarnain" />
        </Box>

        <Field name="amount">
          {({
            meta,
            field: { onChange, value: fieldValue, ...restField },
            form: { setFieldValue },
          }) => (
            <Box>
              <Box className="text-label">Jumlah</Box>
              <NumberFormat
                {...restField}
                defaultValue={fieldValue}
                style={{ width: "100%" }}
                customInput={TextField}
                thousandSeparator="."
                decimalSeparator=","
                onValueChange={({ value }) => {
                  const rawValue = value ? parseFloat(value) : "";
                  setFieldValue("amount", rawValue);
                }}
                prefix={"Rp. "}
                placeholder="Rp. 100.000"
                InputProps={{
                  className: css.amplop__inputNumber,
                }}
              />
              {meta.touched && meta.error ? (
                <FormHelperText error={true}>{meta.error}</FormHelperText>
              ) : null}
            </Box>
          )}
        </Field>

        <Box data-aos={"fade-up"} data-aos-delay={200}>
          <ButtonMain type="submit" style={{ width: "fit-content" }}>
            Konfirmasi via Whatsapp
          </ButtonMain>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openNotif}
        autoHideDuration={2000}
        message={"Berhasil disalin"}
        onClose={() => setOpenNotif(false)}
      />
    </FormikProvider>
  );
}

export default Component;
