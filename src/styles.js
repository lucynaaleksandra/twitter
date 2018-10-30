// import React, { Component } from 'react'
import styled from 'styled-components'


export const Wrapper = styled.section`
  padding: 4em;
  font-family: "Open Sans", sans-serif;
  /* background: #282c34; */
  background: white;
  border: 1px solid #1da1f2;
  width: 756px;
`
export const Button = styled.button`
  /* background: ${props => props.primary ? "white" : "palevioletred"}; */
  /* color: ${props => props.primary ? "palevioletred" : "white"}; */
  background: #1da1f2;
  color: white;
  font-size: .80em;
  margin: 1em;
  padding: 0.50em 1.25em;
  border: 1px solid #1da1f2;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #1d7ebb;
    color: white;
    font-weight: 400;
  }
`
export const Checkbox = styled.div`
  display: inline-block;
  font-size: .75em;
  > input {
    position: relative;
    /* padding-left: 35px; */
    cursor: pointer;
    &:before {
      /* content: ""; */
      /* position: absolute;  */
      /* left: 0; top: 1px; */
      /* width: 20px;  */
      /* height: 20px; */
      /* border: 1px solid #aaa; */
      /* border-radius: 3px; */
      /* box-shadow: inset 0 1px 3px rgba(0,0,0,.3); */
    }
    &:after {
      /* content: '✔'; */ */
      position: absolute; 
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s;
    }
  }
  /* > input:not(:checked) + label {
    &:after {
      opacity: 0; 
      transform: scale(0); 
    }
  } */
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  width: 20em;
  color: ${props => props.inputColor || "gray"};
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  font-size: .75em;
`
// dark-blue: #1d7ebb
// blue: #1da1f2