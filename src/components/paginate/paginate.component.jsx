import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import {connect}  from 'react-redux';
import { PaginationItem } from 'reactstrap';
import {fetchPaginate} from '../../redux/paginatePosts/fetchPaginate';
import './paginate.styles.css';

// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';



const mapDispatchedToProps = dispatch =>
({
    paginateNext :(currentUser, pageNumber)  => dispatch(fetchPaginate( currentUser, pageNumber))  
})


class Paginate extends Component{


   


    constructor(props)
    {
        super(props);
        
        // this.state = ({
        //     activePage: this.props.current_page
        // })
       
    }

  

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.props.paginateNext(this.props.currentUser, pageNumber);
        // this.setState({activePage: pageNumber});
      }




    render()

    {
        const{pagination} = this.props;
       
        
        return(
            <div>
                {pagination.total > 5 &&
                 <Pagination
                 //   activePage={this.state.activePage}
                   activePage = {pagination.current_page}
                   itemsCountPerPage={pagination.per_page}
                   totalItemsCount={pagination.total}
                   pageRangeDisplayed={10}
                   activeClass = "active"
                   prevPageText='prev'
                   nextPageText='next'
                   firstPageText='first'
                   lastPageText='last'
                   onChange={this.handlePageChange.bind(this)}
                 />
                 }
       
            </div>
        )
    }
}


export default connect(null,mapDispatchedToProps) (Paginate)