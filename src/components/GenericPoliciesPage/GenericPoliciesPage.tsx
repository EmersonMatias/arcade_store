import { Divider } from "@mui/material";
import { PageTitle } from "../Generic_Styles";
import { Container } from "./GenericPoliciesPage_Styles";

export default function GeneriPoliciesPage({texts_1, texts_2}: IGenericPolicies) {
    return (
        <Container>
            <PageTitle className="rose">Termos e Condições</PageTitle>

            <div className="content_Container">

                <div className="content_1">
                    {texts_1.map((text) => (
                        <p className="content_text">
                            {text}
                        </p>
                    ))}
                </div>

                <div className="content_2">
                    {texts_2.map((text) => (
                        <p className="content_text">
                            {text}
                        </p>
                    ))}
                </div>


            </div>

            <Divider sx={{ backgroundColor: "#ffffffb0", marginTop: "4rem", marginBottom: "4rem" }} />

            <div className="warningText">
                As explicações e informações fornecidas aqui são apenas exemplos gerais.
                Não confie neste artigo como orientação jurídica ou como recomendações
                sobre o que você realmente deve fazer. Recomendamos que você busque orientação
                jurídica se precisar de ajuda para entender e criar seus Termos.
            </div>


        </Container>
    )
}

type IGenericPolicies = {
    texts_1: string[],
    texts_2: string[]
}

