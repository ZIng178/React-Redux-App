import React from "react";
import {connect} from "react-redux";
import {getData} from "../actions"

const Game=props=>{
    const handleGetData=e=>{
        e.preventDefault();
        props.getData()
    }
}