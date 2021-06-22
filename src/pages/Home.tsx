import { useHistory } from 'react-router-dom'

import illustrationSvg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import { MyButton } from '../components/MyButton'
import { useAuth } from '../hooks/useAuth'

import "../styles/auth.scss"

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {

        try {
            if (!user) await signInWithGoogle()
            history.push('/rooms/new')
        } catch (e) {
            console.log(e)
        }
    }

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIcon} alt="icone do google" />
                        Crie sua sala com o Google
                    </button>
                    <p className="separator">ou entre em uma sala</p>
                    <form>

                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <MyButton type="submit">Entrar na sala</MyButton>
                    </form>
                </div>
            </main>
        </div>
    )
}