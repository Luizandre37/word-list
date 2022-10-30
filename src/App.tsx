
import { SlControlPlay} from "react-icons/sl";


import { async } from '@firebase/util';
import axios from 'axios';
import{ useState,useEffect} from 'react';
import * as C from './App.styles'
import * as Words from './services/words'
import { Word } from './types/word';

const App = () => {

const[word, setword]= useState([])


  useEffect(()=>{

    getWord()


  },[])

  const getWord = ()=>{

    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
   

    
  }


  return(

    <>
    <C.Header>
      <C.Logo>LOGO</C.Logo>
      <C.Avatar></C.Avatar>
    </C.Header>
    <C.Container>
      <C.PlayerBox>
        <C.Player></C.Player>
        <C.H1>< SlControlPlay/><C.Input><input type="range"/></C.Input></C.H1>
        
        

        <C.P>LOREM IPSUM DOLOR IRIDIUM</C.P>
        <C.Row>
          <C.Button>LOREM</C.Button>
          <C.Button>LOREM</C.Button>
        </C.Row>
      </C.PlayerBox>
      <C.WordBox>
        <C.Row>
          <C.Button>Word</C.Button>
          <C.Button>History</C.Button>
          <C.Button>Favorites</C.Button>
        </C.Row>
        <C.H2>Word List</C.H2>
        <C.WordBoxList>
          {[word].map((words) => (
            
            <>
              {" "}
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              <C.WordItem></C.WordItem>
              
             
            </>
          ))}
        </C.WordBoxList>
      </C.WordBox>
    </C.Container>
  </>
);
}





  export default App;


