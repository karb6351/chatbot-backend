import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuLink({to, label}) {
  return (
    <Link to={to}>{label}</Link>
  )
}
