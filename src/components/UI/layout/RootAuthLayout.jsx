import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavBar from '../../Navigation/AuthNavBar/AuthNavBar'

const RootAuthLayout = () => {
  return (
    <>
    <AuthNavBar />
    <Outlet />
    </>
  )
}

export default RootAuthLayout