import { Container } from "./Sidebar_Styles";
import { Divider, Slider, ThemeProvider, ListItemButton, ListItemText, Collapse, List, createTheme } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { HandleClick } from "./Sidebar_Utils";

export default function Sidebar() {
    const [categoryState, setCategoryState] = useState(true);
    const [priceState, setPriceState] = useState(true);
    const [value, setValue] = useState([0, 5000]);

    const handleChange = (event: Event, newValue:(number[])) => {
        setValue(newValue)
    };

    const marks = [
        {
            value: 0,
            label: `R$ ${value[0]},00`,
            color: "red"
        },
        {
            value: 5000,
            label: `R$ ${value[1]},00`,
        }
    ]

    const theme = createTheme({
        typography: {
            fontSize: 20
        }
    });

    const categories = ["Todas", "Consoles", "Games", "Periféricos", "Promoções", "Mais vendidos"]

    return (
        <Container>
            <p className="sidebarTitle">Filtrar por</p>

            <Divider sx={{ color: "#FFFFFF", backgroundColor: "#ffffffb0" }} />

            <ThemeProvider theme={theme}>
                <ListItemButton onClick={() => HandleClick.Category(setCategoryState, categoryState)}>
                    <ListItemText primary="Categoria" />
                    {categoryState ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={categoryState} unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((categorie) => (
                            <ListItemButton sx={{ pl: 4 }} key={categorie}>
                                <ListItemText primary={categorie} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </ThemeProvider>

            <Divider sx={{ color: "#FFFFFF", backgroundColor: "#ffffffb0" }} />

            <ThemeProvider theme={theme}>
                <ListItemButton onClick={() => HandleClick.Price(setPriceState, priceState)}>
                    <ListItemText primary="Preço" />
                    {priceState ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={priceState} unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 6, pr: 6 }}>
                            <Slider value={value} max={5000} sx={{ '.MuiSlider-markLabel': { color: "#FFFFFF", fontSize: 14, fontWeight: "bold", justifyContent: "flex-start" }, color: "#FFFFFF", width: "100%" }} onChange={(event, value) => handleChange(event, value)} step={1} marks={marks} />
                        </ListItemButton>
                    </List>

                </Collapse>
 
            </ThemeProvider>

            <Divider sx={{ color: "#FFFFFF", backgroundColor: "#ffffffb0" }} />
        </Container>
    )
}