import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  titulo: string
  descricao: string
  link: string
}

const Projeto: React.FC<ProjetoProps> = ({ titulo, descricao, link }) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{`Tecnologia: ${descricao}`}</Paragrafo>
    <LinkBotao target="_blank" href={link}>
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
