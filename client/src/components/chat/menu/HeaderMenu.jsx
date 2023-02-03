import { useState } from 'react' ;
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from '@mui/material' ;

const MenuOption = styled(MenuItem)`
    font-size : 14px ;
    padding : 15px 60px 5px 24px ;
    color : #4A4A4A ;
` ; 

const HeaderMenu = ({setOpenDrawer}) => {
    
    const [open, setOpen] = useState(false) ;

    const handleClose = () => {
        setOpen(null) ;
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget) ;
    }

    return(
        <>
            <MoreVert onClick = { handleClick } />
            <Menu
            id="fade-menu"
            anchorEl={open}
            open = {open}
            keepMounted // such that opens downword
            onClose={handleClose}
            getContentAnchorE1 = {null}
            anchorOrigin={{
                vertical : 'bottom',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuOption onClick={() =>{ handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
            <MenuOption onClick={handleClose}>My account</MenuOption>
            <MenuOption onClick={handleClose}>Logout</MenuOption>
        </Menu>
        </>
        
    )
}

export default HeaderMenu ;