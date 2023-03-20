import { createNavigationContainerRef } from "@react-navigation/native";
import { AllScreenParamList, RootStackParamList } from "/types/navigation";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(
  name: keyof RootStackParamList,
  params?: AllScreenParamList
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}
