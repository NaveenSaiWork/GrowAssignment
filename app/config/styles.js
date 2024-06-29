import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.primary,
    fontSize: 18,
    // backgroundColor: colors.tertiary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  heading: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.primary,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  heading2: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.primary,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  dateRange: {
    fontSize: 15,
    color: colors.medium,
    // alignSelf: "center",
    marginBottom: 5,
  },
  goBackIcon: {
    marginRight: 20,
    marginTop: 10,
  },
  goBackText: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 10,
    marginLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.primary,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  initialsContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.secondary,
    color: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    fontSize: 16,
    color: colors.white,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtextFlatlist: {
    fontSize: 15,
    color: colors.secondary,
    alignSelf: "flex-start",
    // textTransform: "uppercase",
    marginBottom: 5,
  },
  subtext: {
    fontSize: 15,
    color: colors.secondary,
    alignSelf: "center",
    marginBottom: 5,
  },
  subtextClientInfo: {
    fontSize: 15,
    color: colors.medium,
    alignSelf: "center",
    padding: 10,
    marginBottom: 5,
  },
};
