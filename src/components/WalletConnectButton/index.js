import React from "react";

import { Button } from "@mui/material";
import useTranslation from "./../../context/Localization/useTranslation";

const WalletConnectButton = (props) => {
  const { t } = useTranslation();

  return <Button {...props}>{t("Connect Wallet")}</Button>;
};

export default WalletConnectButton;
