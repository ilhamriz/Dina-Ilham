import css from "./Main.module.scss";
import { Snackbar } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import { CheckRSVP } from "../utils/Utils";
import { useEffect, useState } from "react";
import { Pembuka, Navbar, Music } from "../components/Layout";
import { Acara, Amplop, Galeri, Hero, Konfirmasi, Mempelai, Ucapan } from "../components/Sections";

function Component() {
  const [isRSVP, setIsRSVP] = useState(false);
  const [params, setParams] = useState(null);
  const [openNotif, setOpenNotif] = useState(false);
  const [openRSVP, setOpenRSVP] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let query = new URLSearchParams(location.search);
    const target = query.get("to");

    const rsvp = CheckRSVP(target);
    if (target && !rsvp) {
      setOpenNotif(true);
      history.push("/");
    }
    
    const newParams = target?.replaceAll("_", " ") || "";
    setParams(rsvp ? newParams : "");
    setIsRSVP(rsvp);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = openRSVP ? "hidden" : "auto";
  }, [openRSVP]);

  const [isTablet, setIsTablet] = useState(false);
  const [deviceHeight, setDeviceHeight] = useState(0);
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setIsTablet(innerWidth < 769 ? true : false);
    setIsSmallHeight(innerHeight < 651 ? true : false);
    setDeviceHeight(innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRSVP = () => {
    setOpenRSVP(false);
    setTimeout(() => {
      setShowMain(true);
    }, 500);
  };

  if (!showMain) {
    return (
      <>
        <Pembuka
          openRSVPstate={{ openRSVP, handleRSVP }}
          isTablet={isTablet}
          params={params}
          device={{ deviceHeight, isSmallHeight }}
        />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openNotif}
          autoHideDuration={2000}
          message={"Maaf, URL yang Anda gunakan salah."}
          onClose={() => setOpenNotif(false)}
        />
      </>
    );
  }

  return (
    <>
    <Navbar isRSVP={isRSVP} />

    <main>
      <Hero isTablet={isTablet} />
      <Mempelai isTablet={isTablet} />
      <Acara isTablet={isTablet} />

      {isRSVP ? (
        <Konfirmasi isTablet={isTablet} />
      ) : null}

      <Galeri />
      <Amplop isTablet={isTablet} />
      <Ucapan isTablet={isTablet} />
    </main>

    <Music />
    </>
  );
}

export default Component;