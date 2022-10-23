import {MainStackParamList} from '@navigations/main';
import {OnboardingStackParamList} from '@navigations/onboarding';
import {
  ParamListBase,
  useNavigation as useBaseNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useMainNavigation = () =>
  useBaseNavigation<NativeStackNavigationProp<MainStackParamList>>();

export const useOnboardingNavigation = () =>
  useBaseNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();

export function useNavigation<T extends ParamListBase>() {
  return useBaseNavigation<NativeStackNavigationProp<T>>();
}
