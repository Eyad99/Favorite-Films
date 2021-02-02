import React,{Component} from 'react';
import ReactPaginate from 'react-paginate';

class Paginate extends Component{
    state ={
        offset : 0,
        tableDate : [],
        orgtableDate : [],
        perPage : 10 ,
        curPage : 0
    }
    componentDidMount(){
        this.getapi();
    }

     getapi = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        const slice = data.slice(this.state.offset,this.state.offset + this.state.perPage);
        this.setState({
            pageCount : Math.ceil(data.length / this.state.perPage),
            orgtableDate : data,
            tableDate : slice
        })
        
     }

     handelPageClick = e =>{
         const selectPage = e.selected;
         const offset = selectPage * this.state.perPage;

         this.setState({
             curPage : selectPage,
             offset : offset
         },()=>{
             this.loadMoreData()
         })
     }

     loadMoreData = () =>{
        const data = this.state.orgtableDate;
        const slice = data.slice(this.state.offset,this.state.offset + this.state.perPage);
        this.setState({
            pageCount : Math.ceil(data.length / this.state.perPage),
            tableDate : slice
        })

     }
    render(){
        return(
            <div className="table-responsive">
            <table className="table text-center">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>  
                    {
                        this.state.tableDate.map((tdata,i)=>(
                            <tr key={i}>
                                <td>{tdata.id}</td>
                                <td>{tdata.name}</td>
                                <td>{tdata.email}</td>
                                <td>{tdata.body}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ReactPaginate
            previousLabel = {"Prev"}
            nextLabel = {"Next"}
            breakLabel = {"..."}
            breakClassName = {"break-me"}
            pageCount = {this.state.pageCount}
            marginPagesDisplayed = {2}
            pageRangeDisplayed = {5}
            onPageChange = {this.handelPageClick}
            containerClassName = {"pagination"}
            subContainerClassName = {"pages pagination"}
            activeClassName = {"active"}
            pageClassName ={"page-item"}
            pageLinkClassName ={"page-link"}
            nextClassName ={"page-link"}
            previousClassName ={"page-link"}

            />
            </div>
        )
    }
}
export default Paginate