import { Container, LeftContainer, RightContainer } from "./Product_Styles";
import { ProductImageBackground } from "../../components/Product/Product_Styles";
import PurpleButton from "../../components/PurpleButton/PurpleButton";
import { ThemeProvider, ListItemButton, ListItemText, Collapse, List, createTheme, Divider } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react"
import useProductQuery from "../../hooks/useProductQuery";
import { useParams } from "react-router-dom";


export default function Product_Page() {
    const [productInformations, setProductInformations] = useState(true);
    const [refundPolicie, setRefundPolicie] = useState(false)
    const [deliveryInformations, setDeliveryInformations] = useState(false)

    const { id } = useParams()
    const { data: product } = useProductQuery(id)

    const theme = createTheme({
        typography: {
            fontSize: 20
        }
    });

    return (
        <Container>

            <LeftContainer>
                <ProductImageBackground className="leftImg">
                    <img src={product?.productImage} />
                </ProductImageBackground>
                <div className="leftDescription">
                    Sou uma descrição do produto. Este é um ótimo lugar para "vender" seu produto e chamar a atenção dos visitantes.
                    Descreva seu produto de forma clara e concisa, use palavras-chave exclusivas e mostre seu diferencial.
                </div>

            </LeftContainer>

            <RightContainer>

                <h3 className="productName">
                    {product?.name}
                </h3>

                <div className="productPrice">
                   R$ {product?.price}
                </div>


                <PurpleButton name="Adicionar ao carrinho" className="button" />

                <ThemeProvider theme={theme}>
                    <ListItemButton sx={{ width: "100%" }} onClick={() => { setProductInformations(!productInformations) }}>
                        <ListItemText primary="Informações do Produto" />
                        {productInformations ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={productInformations} unmountOnExit>
                        <List component="div" sx={{ width: "100%", paddingLeft: "3%", paddingRight: "3%", textAlign: "justify" }}>
                            <ListItemText primary="Estes são os detalhes do produto. Use este espaço para adicionar informações, como cor, tamanho, material, instruções e mais. 
                                Este também é um ótimo lugar para escrever o que torna este produto especial e como seus clientes podem se beneficiar deste item. Os clientes gostam de saber o que estão 
                                recebendo antes de comprar,portanto, forneça o máximo de informações possível para que possam comprar com confiança."
                            />

                        </List>
                    </Collapse>

                    <Divider sx={{ backgroundColor: "#ffffffb0", width: "100%" }} />

                    <ListItemButton sx={{ width: "100%" }} onClick={() => { setRefundPolicie(!refundPolicie) }}>
                        <ListItemText primary="Política de Devolução e Reembolso" />
                        {refundPolicie ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={refundPolicie} unmountOnExit>
                        <List component="div" sx={{ width: "100%", paddingLeft: "3%", paddingRight: "3%", textAlign: "justify" }}>
                            <ListItemText primary="Sou uma Política de Devolução e Reembolso. Sou um ótimo espaço para informar seus clientes como agir caso estejam insatisfeitos com uma compra. 
                                Ter uma política de reembolso ou de devolução é uma ótima forma de estabelecer a confiança e permitir que seus clientes comprem com segurança."
                            />

                        </List>
                    </Collapse>

                    <Divider sx={{ backgroundColor: "#ffffffb0", width: "100%" }} />


                    <ListItemButton sx={{ width: "100%" }} onClick={() => { setDeliveryInformations(!deliveryInformations) }}>
                        <ListItemText primary="Informações de Entrega" />
                        {deliveryInformations ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={deliveryInformations} unmountOnExit>
                        <List component="div" sx={{ width: "100%", paddingLeft: "3%", paddingRight: "3%", textAlign: "justify" }}>
                            <ListItemText primary="Sou uma Política de Devolução e Reembolso. Sou um ótimo espaço para informar seus clientes como agir caso estejam insatisfeitos com uma compra. 
                                Ter uma política de reembolso ou de devolução é uma ótima forma de estabelecer a confiança e permitir que seus clientes comprem com segurança."
                            />

                        </List>
                    </Collapse>

                </ThemeProvider>

            </RightContainer>

        </Container>
    )
}