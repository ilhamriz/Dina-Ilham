import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  cuci_tangan,
  handsanitizer,
  jarak,
  kerumunan,
  kesehatan,
  masker,
} from "../../../assets";
import styles from "./styles.module.scss";
import { ButtonMain } from "../../Form";

function Component({ open, setOpen }) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      open={open}
      className={styles.prokes}
    >
      <DialogTitle>
        <Box className={`${styles.prokes__title} header-3`}>
          Protokol Kesehatan
        </Box>
        <Box className="text-body">
          Demi kebaikan bersama, kami menghimbau kepada para tamu undangan agar
          selalu menerapkan protokol kesehatan.
        </Box>
      </DialogTitle>
      <DialogContent style={{ paddingTop: "32px" }}>
        <Box className={styles.prokes__content}>
          <Box className={styles.prokes__list}>
            <Box className={styles.prokes__item}>
              <img src={masker} alt="" />
              <span className="text-body-2-bold">Memakai Masker</span>
            </Box>
            <Box className={styles.prokes__item}>
              <img src={cuci_tangan} alt="" />
              <span className="text-body-2-bold">Mencuci Tangan</span>
            </Box>
            <Box className={styles.prokes__item}>
              <img src={kerumunan} alt="" />
              <span className="text-body-2-bold">Jauhi Kerumunan</span>
            </Box>
            <Box className={styles.prokes__item}>
              <img src={jarak} alt="" />
              <span className="text-body-2-bold">Menjaga Jarak 2m</span>
            </Box>
            <Box className={styles.prokes__item}>
              <img src={kesehatan} alt="" />
              <span className="text-body-2-bold">Kondisi Sehat</span>
            </Box>
            <Box className={styles.prokes__item}>
              <img src={handsanitizer} alt="" />
              <span className="text-body-2-bold">Memakai Handsanitizer</span>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <ButtonMain onClick={() => setOpen(false)}>Mengerti</ButtonMain>
      </DialogActions>
    </Dialog>
  );
}

export default Component;
