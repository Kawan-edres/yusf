import { useState,useEffect } from 'react';
import './App.css';
import {storage} from './firebase';
import {ref,uploadBytes}  from 'firebase/storage';
import {v4} from 'uuid'

function App() {

  const [imgUpload,setImgUpload]=useState(null);
  const uploadImage =()=>{
    if(imgUpload===null)return;
    const imageRef=ref(storage,`images/${imgUpload.name +v4() }`);
    uploadBytes(imageRef,imgUpload).then(()=>{
      alert('uploaded');
    }  
    ).catch(err=>{
      console.log(err);
    }
    )
  }

  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
    <input type="file"  placeholder='choose file' onChange={(e)=>setImgUpload(e.target.files[0])}/>
    <button onClick={uploadImage}>Upload Image</button>
    
    </div>
  );
}

export default App;
