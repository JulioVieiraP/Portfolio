import { useEffect, useState } from 'react'
import { FotoPerfil } from './styles'
import { AvatarApi } from '../../api/api'

const Avatar = () => {
  const [Avatar, setAvatar] = useState('')

  useEffect(() => {
    AvatarApi().then((res) => setAvatar(res.avatar_url))
  }, [])

  return <FotoPerfil src={Avatar} />
}

export default Avatar
