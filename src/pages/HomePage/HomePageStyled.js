import styled from "styled-components";

const Wrapper = styled.div`
.home-title{
    font-weight: 500;
    text-align: center;
    font-size: 25px;
    line-height: 1.63;
    color: black;
    text-transform: uppercase;
}
.home-title:not(:last-child){
    margin-top: 50px;
}
.home-ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 15px;
    margin-bottom: 15px;
}
.home-li{
}
.home-li:not(:last-child){
margin-right: 15px;
}
.home-link{
font-weight: 500;
    font-size: 25px;
    line-height: 1.63;
    color: black;
  
    border-radius: 10px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 15px;
}
.home-link:hover{
    color: blue;
    
}
.active-link{
    color: red
}
`

export default Wrapper;