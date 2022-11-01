import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './ui/screens/Home'
import Login from './ui/screens/Login'
import ForgotPassword from './ui/screens/ForgotPassword'
import ChangePassword from './ui/screens/ChangePassword'
import Settings from './ui/screens/Settings'
import Profile from './ui/screens/Profile'
import Splash from './ui/screens/Splash'
import { useEffect, useState } from 'react'
import SignUp from './ui/screens/SignUp'

const Stack = createNativeStackNavigator()

export default function App() {
  const [initialRoute, setInitialRoute] = useState()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setInitialRoute('Login')
    } else {
      setInitialRoute('Home')
    }
  }, [initialRoute, user])

  const onReady = () => {
    console.log('🚀 Navigation ready!')
    setLoading(false)
    setInitialRoute('Login')
  }

  if (loading) {
    return <Splash />
  }

  return (
    <NavigationContainer
      initialState={initialRoute}
      onReady={onReady}
      onStateChange={state => console.log('Navigation', state?.name)}>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
