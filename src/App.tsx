import { async } from '@firebase/util';
import{ useState,useEffect} from 'react';
import * as C from './App.styles'
import * as Words from './services/words'
import { Word } from './types/word';

const App = () => {
  const[loading, setloading] = useState(false)
  const[word,setword]= useState<Word[]>([])

  useEffect(()=> {

    const getwords = async ()=>{
       setloading(true);
       setword (await Words.getAll())
       setloading(false)


    }
 getwords()

  },[])
  return (
    <C.Container>
      <C.Header>
      <C.HeaderText>Word-List</C.HeaderText>
      </C.Header>
      <C.Body>
 {/* area de gerar palavras*/}

 {loading &&
 <C.ScreenWarning>
 <div className="emoji"> </div>
 <div className="sss">carregando</div>

 </C.ScreenWarning>
}

  {/* area de inserção de palavras*/}

   {/* area de informação geral*/}
      </C.Body>
 
    </C.Container>

  )


}

export default App;