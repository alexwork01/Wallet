import { useCallback } from "react";
import { Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const useMatrics = () => {
  const getMetrics = useCallback(() => {
    const { width, height } = Dimensions.get("window");
    return {
      screenWidth: width < height ? width : height,
      screenHeight: width < height ? height : width,
      navBarHeight: Platform.OS === "ios" ? 60 : 72,
      statusBarHeight: getStatusBarHeight(),
      platformOS: Platform.OS
    };
  }, []);

  return getMetrics();
};
