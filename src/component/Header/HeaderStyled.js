import styled from "styled-components";

const Wrapper = styled.div`
.header{
    display: flex;
    padding: 20px;
    border-bottom: 2px solid grey;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
}
.header-ul{
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
}
.header-li-item{
}
.header-li-item:not(:last-child){
    margin-right: 15px
}
.header-li-item-link{
    font-weight: 500;
    font-size: 20px;
    line-height: 1.63;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
}
.active-link{
  color: red  
}
`
export default Wrapper