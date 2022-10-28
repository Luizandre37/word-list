import{Words} from '../types/word'
import { storage } from '../libs/firebase';
import {ref, listAll, getDownloadURL} from  'firebase/storage'

export const  getAll = async () => {

    let list: Words[]=[];

    const BaselistFolder = ref(storage, "BaseWord");
    const wordList = await listAll(BaselistFolder)

    for(let i  in wordList.items){

        let wordsUrl = await getDownloadURL(wordList.items[i])
        list.push({
            name:wordList.items[i].name,
            url:wordsUrl
        })
    }

    return list;

}