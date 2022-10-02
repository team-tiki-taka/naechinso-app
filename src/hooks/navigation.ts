import {OnboardingStackParamList} from '@navigations/onboarding';
import {RootStackParamList} from '@navigations/root';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const useOnboardingNavigation = () =>
  useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();
