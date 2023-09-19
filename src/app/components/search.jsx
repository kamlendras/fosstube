import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Bounce from 'react-reveal/Bounce';
// import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import SearchIcon from '@mui/icons-material/Search';
const Item = styled(Paper)(({ theme }) => ({


  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 5000,

  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '70rem',
  margin: 80,
  padding: 0,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 500,


  border: '1px solid rgba(0,0,0,.25)',
  '& li[data-focus="true"]': {
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: 'rgb(7, 106, 225);',
    color: 'white',
  },
}));




export default function Search() {


  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });
  return (


    <>
 

      <div className="search_wrap search_wrap_3">
        <div className="search_box">
          <div {...getRootProps()}>

            <Input className="input"  {...getInputProps()} placeholder="search..." />
            {groupedOptions.length > 0 ? (
              <Bounce bottom>     <Listbox {...getListboxProps()}>
                {groupedOptions.map((option, index) => (
               <>  <li {...getOptionProps({ option, index })}>{option.title}</li></> 
                ))}
              </Listbox></Bounce>
            ) : null}
          </div>
        
          <div className="btn btn_common">

            <SearchIcon className="fas fa-search,SearchIcon" />

          </div>
        </div>
      </div>
  





    </>









  );
}

// Top 
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
 
];