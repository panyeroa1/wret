import {
  type NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import OnboardingScreen from '@features/onboarding'
import WalletSetupScreen from '@features/wallet-setup'
import ImportFromSeedScreen from '@features/wallet-setup/import-from-seed'

type AuthRoutesProps = {
  onboarding: undefined
  walletsetup: undefined
  importfromseed: undefined
}

export type AuthScreenProps = NativeStackNavigationProp<AuthRoutesProps>

const { Screen, Navigator } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="walletsetup" component={WalletSetupScreen} />
      <Screen name="importfromseed" component={ImportFromSeedScreen} />
    </Navigator>
  )
}
