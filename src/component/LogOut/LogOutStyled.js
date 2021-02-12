import styled from "styled-components";

const Wrapper = styled.div`
 display: flex;
  margin: 0 auto;
 
  .user-hi{
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: black;
  }
.user-name{
    text-transform: uppercase;
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
`;

export default Wrapper;