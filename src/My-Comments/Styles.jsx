import { Autocomplete } from "@material-ui/lab";
import { Grid, Typography, Button, TextField ,AppBar} from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderTypography = styled(Typography)`
color: black;
font-weight:bold;
 margin: unset;
font-family: 'Poppins', sans-serif;    
                   
`
export const StyledATag = styled("a")`
background: #dedede;
padding: 5px 12px;
cursor: pointer;
text-transform: uppercase;
font-weight: 700;
font-size: 12px;
border-radius: 6px;
top: 500px;
margin: 0 10px 0 0;
`
export const StyledContentGrid = styled(Grid)`
padding: 0 30px;
`
export const StyledTextarea = styled("textarea")`
width: 100%;
    height: 81px;
    padding:10px ;
    font-size: 20px;
    font-family: inherit;
    font-weight: 500;
    background-color: #fbfbfb;
    border-radius: 5px;

`
export const Styledh3 = styled("h3")`

font-family: 'Poppins', sans-serif;
font-weight: 600;
span{
    color:#999393;
}
`
export const StyledTextareaDiv = styled("div")`
padding-right: 20px;
`
export const SuggetionsDivTag = styled("div")`
top:420px;
margin-left: 0px;
`
export const SuggetionsnameTag = styled("h4")`
font-family: 'Poppins', sans-serif;
top: 354px;
font-size: 15px;
`
export const StyledPublishButton = styled(Button)`
color:white;
background-color:#26867d;
text-transform: capitalize;
font-family: 'Poppins', sans-serif;
font-weight: bold;
:hover{
color:white;
background-color:#26867d;

}
`
export const StyledCancelButton = styled(Button)`

color:#26867d;
border:1px solid #26867d ;
text-transform: capitalize;
font-family: 'Poppins', sans-serif;
font-weight: bold;


`
export const StyledAutocomplete = styled(Autocomplete)`
height: 100%;
width:100%;
.MuiChip-root{
    margin: 3px;
    max-width: calc(100% - 6px);
    background: #d4e7e5;
    color: #66aaa2;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: 5px;
}

svg.MuiSvgIcon-root.MuiChip-deleteIcon {
    color: rgb(0 0 0 / 71%) !important;
}
`
export const StyledButtonsDiv = styled("div")`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:50px;
    width: 100%;
    column-gap: 11px;
`
export const StyledMainDiv = styled(Grid)`
height:fit-content !important;
postion:relative;

 `
export const StyledTextfield = styled(TextField)`

width: 100%; 
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #66aaa2;
    }
  }
`
export const StyledAppBar = styled(AppBar)`
color:black !important;
background-color:white !important;
`
