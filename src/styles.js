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
export const Nav = styled.nav`
  height: 2.5em;
  margin-left: 1em;

  font-size: 1em;
  text-decoration: none;
  color: #1da1f2;
 
`

export const Button = styled.button`
  /* background: ${props => props.primary ? "white" : "palevioletred"}; */
  /* color: ${props => props.primary ? "palevioletred" : "white"}; */
  background: #1da1f2;
  color: white;
  font-size: .80em;
  font-weight: 300;
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
  > input + label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute; 
      left: 0; top: 1px;
      width: 20px; 
      height: 20px;
      border: 1px solid #aaa;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3);
    }
    &:after {
      content: '✔';
      position: absolute; 
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0; 
      transform: scale(0); 
    }
  }
  /* > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  } */
  /* > input:checked + label {
    &:after {
      opacity: 1; 
      transform: scale(1);
    }
  } */
  /* > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  } */
  /* > input:disabled + label {
    color: #aaa;
  } */
  /* > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
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