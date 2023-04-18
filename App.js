import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { RecoilRoot } from 'recoil'

import Main from './src/Main'

export default function App() {
  return (
    <RecoilRoot>
      <StatusBar style="light" />
      <Main />
    </RecoilRoot>
  )
}
