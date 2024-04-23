import { useEffect, useState } from 'react'
import Projeto from '../../components/ListaProjetos'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'
import { FetchApi } from '../../api/api'

const Projetos = () => {
  type RepoType = {
    id: number
    name: string
    description: string
    language: string
    html_url: string
  }
  const [Repos, setRepos] = useState<RepoType[]>([])

  useEffect(() => {
    FetchApi().then((res) => setRepos(res))
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {Repos.map((item) => (
          <li key={item.id}>
            <Projeto
              titulo={item.name}
              descricao={item.language}
              link={item.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
