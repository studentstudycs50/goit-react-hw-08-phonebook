import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 50px;
  width: 432px;
  background-color: white;
  border-radius: 4px;
  margin: 20px auto;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);
  .login-title{
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    line-height: 1.63; 
    color: black;
  }
  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-label{
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.63;
    color: black;
  }
  .login-input{
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
    color: black;
    width: 400px;
    border: 1px solid #696969;
    border-radius: 4px;
    padding: 10px 15px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .button{
display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: white;
    width: 100px;
    padding: 7px 10px;
    background-color: blue;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    border: none;
    outline: none;
}
.button:hover{
    color: #fff;
    background-color: black;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    
}
`


export default Wrapper;