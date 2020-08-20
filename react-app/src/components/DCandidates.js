import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/dCandidate";

const DCandidates  = (props) =>{
    //const [x,setX]=useState(0)
   // setX(5)

    useEffect(()=>{
        props.fetchAllDCandidates()
    },[])

    return (
    <div>from DCandidates</div> 
    );
}

const mapStateToProps = state =>({
    dCandidateList:state.dCandidateList
    })

    const mapActionToProps={
        fetchAllDCandidates : actions.fetchAll
    }

export default connect(mapStateToProps,mapActionToProps)(DCandidates);