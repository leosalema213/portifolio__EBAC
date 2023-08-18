import Title from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis
      nemo fugiat rerum voluptatibus illo deserunt excepturi assumenda saepe
      ducimus, mollitia ratione ea possimus officia earum accusamus tempora
      commodi architecto!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=leosalema213&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leosalema213&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
