import React,{useEffect,useState} from 'react'

const Posts = () => {

  const [data,setData]=useState([]);
      
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => 
        res.json())
      .then(data => {  
          setData(data);
       })
  });



  return (
    <div>
      <h1>Posts</h1>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
      
      {data.map(post =>
          <div key={post.id} style={{backgroundColor:'white',marginRight:'20px',marginLeft:'20px',marginTop:'40px', width:'20%',display:'flex',wordBreak:'break-word',flexDirection:'column',borderRadius:'15px',padding:'20px'}}>
  <h2 style={{paddingBottom:'20px',textAlign:'left'}}>{post.title}</h2>
  <h4 style={{textAlign:'left'}}>{post.body}</h4>

 </div>
        )}
        
          </div>
    </div>
  )
}

export default Posts