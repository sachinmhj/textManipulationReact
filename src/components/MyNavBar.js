import PropTypes from 'prop-types'
// var q=document.querySelectorAll("p");        // don't do like this. use this line inside of function like in ck function otherwise error is shown.
// function ck(){                               //don't do this. create the function inside of component.
//   var q=document.querySelectorAll("p");        
//   q[0].style.border="solid 2px green";
//   q[0].style.width="100px";
// }
function MyNavBar(props){
  function ck(){
    var q=document.querySelectorAll("p");        
    q[0].style.border="solid 2px green";
    q[0].style.width="100px";
  }
  return (
    <div>
      <p>{props.para}</p>
      <button onClick={ck}>click</button>
      <button>mouse over</button>
    </div>
  );
}
export default MyNavBar;
MyNavBar.propTypes={
  para: PropTypes.string
}