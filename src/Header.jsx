function Header({ headerInfo, cname, children }) {
  return (
    <>
      <h2>WElcome to Heading!!!!</h2>;{children}
      <p>
        Hi,{headerInfo.email}
        {headerInfo.phone}
        <br></br>
      </p>
      ;<p>{cname}</p>
      <div className="name">
        <h3>hey</h3>
        <p>I'm a ReactJS Developer</p>
        <p>I'm from India</p>
        <p>I have {0.1 + 0} years of experience</p>
      </div>
    </>
  );
}
export default Header;
