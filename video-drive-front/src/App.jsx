import React, {useEffect, useState} from 'react'
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
    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setBrands([...new Set(data.map((element)=>element.Brand))]);
                setCategories([...new Set(data.map((element)=>element.category))]);
            });
    }, []);


    return (<div>
        <ButtonAppBar></ButtonAppBar>

        <div style ={{display : "flex", justifyContent : "center"}}>
            <div style={{display: "flex", justifyContent: "center", backgroundColor: 'white', width : '90%', borderRadius : '10px'}}>
                <div style={{padding: '20px'}}>
                    <h1>Filtrer les produits</h1>
                    <FormGroup style={{display: "flex"}}>
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
                            <TextField id="standard-basic" label="Search" variant="filled"/>

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
                <div style={{width: '50%', padding: '20px'}}>
                    <h1>Les produits</h1>

                    <DisplayProducts products={products.filter((product) => {
                        return product.price > minPrice && product.price < maxPrice && (selectedBrand === '' || product.Brand === selectedBrand) && (selectedCategory === '' || product.category === selectedCategory)
                    })}></DisplayProducts>
                </div>
            </div>

        </div>

    </div>)
}


export default App
