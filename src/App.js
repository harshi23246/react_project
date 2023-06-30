import './App.css';
import {useEffect, useState} from 'react';
import {getposts} from './services/api';
 function App()=>{
  const [post,setPost]=useState([]);
  const [resArr,setResArr]=useState([]);
  const getPostsData =async()=>{
    let postData= await getPosts();
    if(postData?.data?.length>0){
      setResArr(postData?.data);
      setPost(postData?.data.slice(0,5));
    }
  }
 };
 const readMore =()=>{
  setpost(resArr.slice(0,post.length+5))
 };
 useEffect(()=>{
  getPostsData();

 },[]);
  
 const [sortState,setSortstate]= useState(none)
 const handlesort =(e) =>{
  setSortstate(e.target.value);
  if(a['title']<b['title'] )return sortState ==='des')
  if(a['title']>b['title']) return sortStatestate==='des'
  return 0;

 });
 setPost(mypost);
 return(
  <div>
    <Header setPost={setPost} post={post}/>
    <div>
      className="select"
      defaultValue={'DEFAULT'}
      onChange={(e)=>handlesort(e)
      }>
      <option value ="DEfault" disabled>
        none

      </option>
      <option value="asc">Ascending</option>
      <option value="des">des</option>
      <
    </div>
  </div>
 )