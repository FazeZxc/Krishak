import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Content from './Content';


const cropList = [
    "Rice",
    "Wheat",
    "Sugarcane",
    "Barley",
    "Maize",
    "Cotton",
    "Tea",
    "Coffee",
    "Pepper",
    "Turmeric",
    "Cardamom",
    "Mustard",
    'Pulses (Dal)',
    'Groundnut (Peanut)',
    "Jute",
    "Coconut",
    'Sesame (Til)',
    'Arecanut (Betel Nut)',
    "Banana",
    "Guava",
]


export default function BasicSelect() {
    const [crop, setCrop] = React.useState('');
    const handleChange = (event) => {
        setCrop(event.target.value);
    };

    return (
        <div className='bg-[url("./assets/david-van-dijk-3LTht2nxd34-unsplash.jpg")] w-full object-cover flex flex-col justify-center gap-10'>
            <h1 className='m-1 text-[300px] tracking-widest text-center font-semibold text-teal-800 border-red-100 font-Jungle'>Crops Documentation</h1>
            <div className='flex justify-center'>
                <Box sx={{ minWidth: 150, width: 400 }}>
                    <FormControl fullWidth sx={{
                        textAlign: "center", background: "rgb(107 , 114 , 128)",
                        borderRadius: "0.75rem",
                        borderWidth: "4px", borderColor: "white", border: "4px solid white"
                    }}>

                        <Select value={crop}
                            displayEmpty
                            variant='filled'
                            onChange={handleChange}
                            sx={{
                                fontWeight: 700,
                                fontSize: "2.25rem",
                                lineHeight: "2.5rem",
                                color: "white",
                                paddingLeft: "1.5rem",
                                paddingRight: "1.5rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0.5rem"
                            }}
                        >
                            <MenuItem value="">Select</MenuItem>
                            {cropList.map((item) => {

                                return <MenuItem value={item}>{item}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <main>
                <Content crop={crop}></Content>
            </main>
        </div>
    );
}
