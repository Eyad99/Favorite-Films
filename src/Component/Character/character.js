import React,{useState,useMemo} from 'react';
import { useLocation } from 'react-router-dom';
import Film from '../Films/film';
import '../Character/character.css';

const Characters=(props)=>{
const [searchname, setSearchname] = useState('')
const [searchinput, setSearchinput] = useState('')


    const { search } = useLocation();
    const match = search.match(/type=(.*)/);
    const type = match?.[1];

//     const alluser = useMemo(() => 
//     props.user.filter(val=>{
      
//       if (searchname === ""){
//         return val
        
//       }
//       else if(val.name.toLowerCase().includes(searchname.toLowerCase())){
//         return val
//       }
//       console.log("filter")
//     }).map(data=>{
//       return(
//         <div className="col" key={data.char_id}>
//           <div className="content">
//             <div className="img">
//                 <img src={data.img} alt="img" /> 
//             </div>
//             <h3 className="name">{data.name}</h3>
//             <p className="birthday">{data.birthday}</p>
//           </div>    
//         </div>
//       )
//  }), [searchname])

    const handelsearch = (event)=>{
      console.log("search")
    setSearchname(event.target.value);
    }
    // const handelfilter=()=>{
    //   console.log("button search")
    // setSearchinput(searchname)
    // }

const alluser =  props.user.filter(val=>{
      
        if (searchname === ""){
          return val
          
        }
        else if(val.name.toLowerCase().includes(searchname.toLowerCase())){
          return val
        }
      }).map(data=>{
        return(
          <div className="col" key={data.char_id}>
            <div className="content">
              <div className="img">
                  <img src={data.img} alt="img" /> 
              </div>
              <h3 className="name">{data.name}</h3>
              <p className="birthday">{data.birthday}</p>
            </div>    
          </div>
        )
   })
 
  return(
    <div className="container">
      <input className="form-control search" type="text" name="search" placeholder="Search" onChange={handelsearch} />
      {/* <button onClick={handelfilter}>search</button> */}
      <div className="row text-center mt-3">
            {alluser}
          <div>{type === 'films' && <Film />}</div>
        </div>
    </div>




  )
}
export default Characters;