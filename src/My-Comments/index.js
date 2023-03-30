import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as StyledDom from "./Styles"
import { Grid } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { Typography } from '@material-ui/core';



const filterOptions = createFilterOptions({
  matchFrom: 'start',
  limit: 5,
  trim: true,
});

var data = require("./MOCK_DATA.json");
const url = 'https://comments.free.beeceptor.com/my/api/path'

export default function Mycomments() {
  const [selectlang, setselectlang] = React.useState([])
  const [value, setvalue] = React.useState()


  const array = []
  const Push = async () => {

    for (var key in selectlang) {
      const text = selectlang[key].id 
      array.push(text)
    }
    try {
      const resp = await axios.post(url, { comment: value, SelectedId: array });
      console.log(resp.data);

    } catch (error) {
      console.log(error.response);

    }
    window.location.reload();
  }

  const GetTags = (e, val) => {
    setselectlang(val)

  }

  return (
    <>
      <StyledDom.StyledMainDiv container>
        <Grid item xs={12} lg={12} sm={12}>
          <Box sx={{ flexGrow: 1 }} >
            <StyledDom.StyledAppBar position="static" >
              <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <StyledDom.HeaderTypography variant="h5">Add Comment</StyledDom.HeaderTypography>
              </Toolbar>
            </StyledDom.StyledAppBar>
          </Box>
          <Typography gutterBottom></Typography>
          <StyledDom.StyledContentGrid className='maincontent' item xs={12} lg={12} sm={12}>
            <StyledDom.Styledh3>My contribution</StyledDom.Styledh3>
            <StyledDom.StyledTextareaDiv>
              <StyledDom.StyledTextarea value={value} onChange={(e) => setvalue(e.target.value)}></StyledDom.StyledTextarea>
            </StyledDom.StyledTextareaDiv>
            <StyledDom.Styledh3>Tags&nbsp;<span>(maximum 10)</span></StyledDom.Styledh3>

            <StyledDom.StyledAutocomplete
              multiple
              limitTags={5}
              id="multiple-limit-tags"
              filterOptions={filterOptions}
              options={data}
              getOptionLabel={options => (options.Value)}
              disableClearable
              value={selectlang}
              freeSolo={selectlang.length >= 10 ? false : true}
              filterSelectedOptions={true}
              getOptionDisabled={(option) => (selectlang.length === 10 || selectlang.includes(option) ? true : false)}
              onChange={GetTags}
              renderInput={(params) => (
                <StyledDom.StyledTextfield   {...params} className='text' />
              )}
            />
            <StyledDom.SuggetionsnameTag>Suggested Tags : </StyledDom.SuggetionsnameTag>
            <StyledDom.SuggetionsDivTag>
              <StyledDom.StyledATag>Fever</StyledDom.StyledATag>
              <StyledDom.StyledATag>HeadAche</StyledDom.StyledATag>
              <StyledDom.StyledATag>migraine</StyledDom.StyledATag>
            </StyledDom.SuggetionsDivTag>
          </StyledDom.StyledContentGrid >
          <StyledDom.StyledButtonsDiv >
            <StyledDom.StyledCancelButton variant="outlined " onClick={() => window.location.reload()}>Cancel </StyledDom.StyledCancelButton>
            <StyledDom.StyledPublishButton variant="outlined " onClick={() => Push()}>Publish </StyledDom.StyledPublishButton>
          </StyledDom.StyledButtonsDiv>
        </Grid>
      </StyledDom.StyledMainDiv>
    </>
  )


}








