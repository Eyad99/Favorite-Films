// import React from 'react';
// import {useState} from 'react';

// const Main = (props)=>{
//     const [select, setSelect] = useState('');

//     const handelchange=(e)=>{
//         setSelect(e.target.value);
//         console.log(select)
//     }

//     const {esisode}=props;
//     const allesisode = esisode.map(res=>{
//         return(
//             <option className="" onChange={()=>handelchange} value={res.char_id} key={res.char_id} >
//                 {res.name}
//             </option>
            
//         )
//     })
//      return(
//          <select className="text-center">
//             {allesisode}
//          </select>
//      )
// }
// {/* <h4><strong className="text-muted">episodeis is</strong> {res.episode_id}</h4>
//     <h4><strong className="text-muted">title is</strong> {res.title}</h4>
//     <h4><strong className="text-muted">air date is</strong> {res.air_date}</h4> */}
// export default Main;








// import React, { Component } from 'react';

// class Main extends Component {
// state ={
//     char : [],
// }

//     render(){
        
//         const {esisode}= this.props;
//         const allchar =esisode.map(data=>{
//             return(
//                 <option className="" key={data.episode_id} value={data.episode_id} >{data.title}</option>

//                 /* <div>
//                 <p>{data.episode_id}</p>
//                 <p>{data.title}</p>
//                 <p>{data.season}</p>
//                 <p>{data.series}</p>
//                 <p>{data.air_date}</p>
//                 <p>{data.characters}</p>
//                 </div> */  
//             )
//         })
//         return(
//             <div>

//             <select onChange={(e)=>{const handel=e.target.value;this.setState({char : handel})}}>{allchar}</select>

//             <h4>{this.state.char}</h4>
//             </div>
    
//         )
//     }
// }
// export default Main;