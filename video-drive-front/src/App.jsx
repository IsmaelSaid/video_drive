import React, {createContext, useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import {DisplayProducts} from "./Product.jsx";
import './App.css'
import {FormControl, FormGroup, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {ButtonAppBar} from "./AppBar.jsx";

function App() {

    const [products, setProduct] = useState([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER)
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [textSearch, setTextSearch] = useState('')
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const Fetch = async () => {
        setisLoading(true)
            fetch('https://127.0.0.1:8000/products')
                .then(response => response.json())
                .then(data => {
                    setProduct(data.data);
                    setBrands([...new Set(data.data.map((element) => element.brand))]);
                    setCategories([...new Set(data.data.map((element) => element.category))]);
                });
        setisLoading(false)
        }

        Fetch()

    }, []);


    return (
        <div style={{display: "flex", flexDirection: "column", height: '100vh'}}>
            <ButtonAppBar></ButtonAppBar>
            {!isLoading && (<div style={{height: '100%', padding: '20px'}}>
                <div style={{
                    height: '100%'
                }}>
                    <div style={{
                        display: "flex",

                    }}>
                        <div style={{padding: '20px'}}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Filtres
                            </Typography> <FormGroup style={{display: "flex"}}>
                            <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                                <InputLabel id="demo-simple-select-filled-label">Marque</InputLabel>
                                <Select
                                    label={"Marque"}
                                    variant={"filled"}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedBrand}
                                    onChange={(e) => {
                                        setSelectedBrand(e.target.value)
                                    }}
                                >
                                    <MenuItem value="">
                                        Tous
                                    </MenuItem>
                                    {brands.map((marque, index) => {
                                        return <MenuItem key={index} value={marque}>{marque}</MenuItem>
                                    })}

                                </Select>

                            </FormControl>
                            <FormControl sx={{m: 1, minWidth: 120}}>
                                <TextField id="standard-basic" label="Search" variant="filled"
                                           onChange={(e) => setTextSearch(e.target.value)}/>

                            </FormControl>

                            <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                                <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                                <Select
                                    variant={"filled"}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value)
                                    }}
                                >
                                    <MenuItem value="">
                                        Tous
                                    </MenuItem>
                                    {categories.map((type, index) => {
                                        return <MenuItem key={index} value={type}>{type}</MenuItem>
                                    })}

                                </Select>

                            </FormControl>
                            <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                                <TextField id="standard-basic" type={"number"} label="prix min" variant="filled"
                                           onChange={(e) => setMinPrice(parseInt(e.target.value) ? parseInt(e.target.value) : 0)}/>

                            </FormControl>

                            <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                                <TextField id="standard-basic" type={"number"} label="prix max" variant="filled"
                                           onChange={(e) => setMaxPrice(parseInt(e.target.value) ? parseInt(e.target.value) : Number.MAX_SAFE_INTEGER)}/>

                            </FormControl>
                        </FormGroup>


                        </div>
                        <div style={{width: '100%', padding: "20px"}}>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Les produits
                            </Typography>

                            <DisplayProducts products={products.filter((product) => {
                                return product.price > minPrice && product.price < maxPrice && (selectedBrand === '' || product.brand === selectedBrand) && (selectedCategory === '' || product.category === selectedCategory) && (textSearch === '' || [product.name, product.brand, product.category].join('').toLowerCase().includes(textSearch.toLowerCase()))
                            })}></DisplayProducts>
                        </div>
                    </div>

                </div>
            </div>)
            }

        </div>
    )
}


export default App
