import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";

import theme from "./config/theme";
import i18n from "./i18n";
import { MainView } from "./screens";

const fetchFonts = () => {
  return Font.loadAsync({
    SourceSansProLight: require("./assets/fonts/SourceSansPro-Light.ttf"),
    SourceSansProRegular: require("./assets/fonts/SourceSansPro-Regular.ttf")
  });
};

export const Entrypoint = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <MainView />
      </I18nextProvider>
    </ThemeProvider>
  );
};
