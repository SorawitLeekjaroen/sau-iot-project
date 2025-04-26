import React from "react";
// import Box from '@mui/material/Box';
// import { Typography } from "@mui/material";
import {Box,Typography,Avatar,TextField,Button} from "@mui/material";
import img2 from '../assets/img02.png';
import { Link } from "react-router-dom";

function LoginUI() {
    return (
        <>
            <Box sx={{width:500,boxShadow:3,borderRadius:2,mx:'auto',mt:10,p:10,
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'
            }}>
                <Avatar src={img2} sx={{width:100,height:100,mb:2}}/>
                <Typography sx={{fontSize:40,fontWeight:'bold',color:'#1976D2'}}>
                    Welcome To IOT SAU
                </Typography>
                <Typography sx={{fontSize:30,fontWeight:'bold',color:'#1976D2'}}>
                    LOGIN PAGE
                </Typography>
                <Box sx ={{width:600,height:10,background:'#fb07ff',mt:5}}/>
                <Box sx ={{width:600,mt:5}}>
                <Typography sx={{fontWeight:'bold'}}>
                    ชื่อผู้ใช้
                </Typography>
                <TextField variant='outlined' placeholder='กรุณากรอกชื่อผู้ใช้' fullWidth sx={{mt:1}}/>
                <Typography sx={{fontWeight:'bold',mt:3}}/>
                รหัสผ่าน
                <TextField variant='outlined' placeholder='กรุณากรอกรหัสผ่าน' fullWidth sx={{mt:1}}/>
                <Button component={Link} to='/' variant='contained' color='primary' fullWidth sx={{mt:4,height:50}}>
                <Typography sx={{fontWeight:'bold',fontSize:20}}>
                    เข้าสู่ระบบ
                </Typography>
                </Button>
                <Button variant="text" sx={{mt:2,display:'block',mx:'auto'}}>
                <Typography sx={{fontWeight:'bold',fontSize:20,}}>
                    ลงทะเบียน
                </Typography>
                </Button>
                </Box>
                </Box>
                

        </>
    )
}
export default LoginUI;