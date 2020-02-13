import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";

import { FooterItem } from "./FooterItem";
import { FooterWrapper } from "./styled";

export const Footer = memo(() => {
  const { t } = useTranslation();

  return (
    <FooterWrapper
      style={{
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }}
    >
      <FooterItem label={t("Cards")}>
        <Image source={require("../../assets/img/card.png")} />
      </FooterItem>
      <FooterItem label={t("Refill")}>
        <Image source={require("../../assets/img/phone.png")} />
      </FooterItem>
      <FooterItem label={t("Transfers")} imageName="payment">
        <Image source={require("../../assets/img/payment.png")} />
      </FooterItem>
      <FooterItem label={t("Payments")} imageName="home">
        <Image source={require("../../assets/img/home.png")} />
      </FooterItem>
      <FooterItem label={t("Other")} imageName="options">
        <Image source={require("../../assets/img/options.png")} />
      </FooterItem>
    </FooterWrapper>
  );
});
