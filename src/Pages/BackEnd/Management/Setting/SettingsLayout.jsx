import React from 'react'
import { Outlet } from 'react-router'

const SettingsLayout = () => {
    return (
        <div>
            <h1>Settings Management</h1>
            <Outlet></Outlet>

        </div>
    )
}

export default SettingsLayout