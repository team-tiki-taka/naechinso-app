import {OnboardingStackParamList} from '@navigations/onboarding';
import {MainStackParamList} from '@navigations/main';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<MainStackParamList>>();

export const useOnboardingNavigation = () =>
  useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();
