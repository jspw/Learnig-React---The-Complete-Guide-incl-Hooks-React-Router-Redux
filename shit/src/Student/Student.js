import React, { Component } from 'react';
import './Student.css';
// import Radium, { StyleRoot } from 'radium'
import styled from 'styled-components'


const StyledDiv = styled.div`
        .class1{
            width: 50%;
            box-shadow: 1px 0 5px 5px #e4d4d4;
            margin-left: 5%;
            margin-top: 10px;
            padding: 5px;

        }
        /* 
        button{
            margin: 5px;
            font-size: medium;
            font-weight: bolder;
            cursor: pointer;

        } */

        .btn{
            margin: 5px;
            font-size: medium;
            font-weight: bolder;
            cursor: pointer;
            float: right;
        }

        .red{
            color: red;
        }

        .bold{
            font-weight: bold;
        }

        .large{
            font-family:  'Arial Narrow', Arial, sans-serif;
            font-size: 30px;
        }

        @media (min-width:500px): {
            width: 400px;
        }

`

const std = (props) => {

    const style = {
        '@media (min-width:500px)': {
            width: '400px'
        }
    }

    return (
        // <StyleRoot>
        <StyledDiv>
            <div className="class1" style={style} >
                <h3>Student Information:</h3>
                <button onClick={props.click} className="btn">Delete</button>
                <ul>
                    <li>Name : {props.name} </li>
                *<input onChange={props.change} value={props.name}></input>
                    <li>Registration No : {props.rull}</li>
                    <li>Department : {props.dept}</li>
                </ul>
            </div>
        </StyledDiv>
        // </StyleRoot>
    )
}

// export default Radium(std);
export default std;