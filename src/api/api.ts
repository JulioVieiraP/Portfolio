const FetchApi = async () => {
  const response = await fetch(
    'https://api.github.com/users/JuliovieiraP/repos'
  )
  const Data = await response.json()
  return Data
}

export default FetchApi
