import Title from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, SidebarContainer, BotaoTema } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Leonardo Patrick</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        leosalema213
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema> Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
