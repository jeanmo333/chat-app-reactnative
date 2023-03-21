/** @format */

import { ChevronLeftIcon, IconButton, ArrowBackIcon } from "native-base";
import { useNavigation } from "@react-navigation/native";

export function IconBack() {
  const navigation = useNavigation();

  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      padding={5}
      onPress={navigation.goBack}
    />
  );
}
