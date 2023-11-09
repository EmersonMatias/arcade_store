import PurpleButton from "../../components/PurpleButton/PurpleButton";
import { Container } from "./Contact_Styles";

export default function Contact_Page(){
    return(
        <Container>
            <h2 className="title">QUER AJUDA?</h2>

            <main className="main_Container">
                <div className="infos_Container">
                    <p className="infos_Title">Fale Conosco</p>
                    <p className="infos_Content">info@meusite.com</p>
                    <p className="infos_Content">(11) 3456-7890</p>
                    <p className="infos_Content">Rua Prates, 194 - Bom Retiro São Paulo - SP, 01121-000</p>
                </div>

                <div className="forms_Container">
                    <form>
                    <label htmlFor="name">Nome</label>
                    <input  id="name" type="text" placeholder="Nome"/>

                    <label htmlFor="surname">Sobrenome</label>
                    <input id="surname" type="text" placeholder="Sobrenome"/>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="E-mail"/>

                    <label htmlFor="phone">Telefone</label>
                    <input id="phone" type="tel" placeholder="Telefone"/>

                    
                    <label htmlFor="message">Envie uma mensagem</label>
                    <input id="message" type="text" placeholder="Envie uma mensagem"/>

                    <PurpleButton className="sendButton" name="Enviar"/>
                    </form>
                </div>
            </main>
        </Container>
    )
}