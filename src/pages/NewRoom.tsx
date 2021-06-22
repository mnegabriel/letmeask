import { Link } from 'react-router-dom'

import illustrationSvg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { MyButton } from '../components/MyButton'
import { useAuth } from '../hooks/useAuth'

import "../styles/auth.scss"

export function NewRoom() {
    const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationSvg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de perguntas e respostas ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da Sala"
                        />
                        <MyButton type="submit">Criar Sala</MyButton>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link></p>
                </div>
            </main>
        </div>
    )
}