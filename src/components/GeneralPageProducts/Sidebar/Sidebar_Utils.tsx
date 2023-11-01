export const HandleClick = {
    Category: (setCategoryState:React.Dispatch<React.SetStateAction<boolean>> ,categoryState: boolean) => {
        setCategoryState(!categoryState);
    },
    Price: (setPriceState: React.Dispatch<React.SetStateAction<boolean>>,priceState: boolean) => {
        setPriceState(!priceState);
    }
}

