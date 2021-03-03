import React,{Component} from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';
import Main from './Component/Main/main';
import Paginate from './Component/Paginate/paginate'
import Characters from './Component/Character/character';
import Questions from './Component/Question/question';
import ContactUs from './Component/ContactUs/contactus';
import Footer from './Component/Footer/footer';
import { Route,BrowserRouter,Switch } from "react-router-dom";


class App extends Component{

  state ={
    user : [],
    episodes : [],
    film : '',

  }

  componentDidMount(){
    const bb_api = ()=>{
      axios.get("https://breakingbadapi.com/api/characters").then(res=>{
        this.setState({
          user : res.data,
        })        
      })
    }
    const bbs_api=()=>{
      axios.get("https://breakingbadapi.com/api/episodes").then(res=>{
        this.setState({
          episodes : res.data,
        })
      })
    }
    
    bb_api();
    bbs_api();

  }
   
  render(){
    return(
      <div className="container-fluid">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Favorite-Films" render={()=><Main esisode={this.state.episodes} />}/>
          <Route  path="/characters" render={()=> <Characters user={this.state.user} />}  />
          <Route  path="/questions" component={Questions} />
          <Route  path="/contactus" component={ContactUs} />        
          <Route  path="/Paginate" component={Paginate} />
        </Switch>
        <Footer />
        </BrowserRouter> 
      </div>
    )
  }
}
export default App;
