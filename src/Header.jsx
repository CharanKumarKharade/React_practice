function Header(props) {
  console.log(props.headerInfo);
  return (
    <>
      <h2>WElcome to Heading!!!!</h2>;
      <p>
        Hi,{props.headerInfo.phone}
        <br></br>
      </p>
      ;<p>{props.cname}</p>
      <div className="name">
        <h3>hey</h3>
        <p>I'm a ReactJS Developer</p>
        <p>I'm from India</p>
        <p>I have {20 + 2} years of experience</p>
      </div>
    </>
  );
}
export default Header;
