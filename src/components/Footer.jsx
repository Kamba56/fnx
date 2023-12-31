import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/log.svg";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row text-white font-light bg-blue-50">

      <div className="flex-1 order-2 lg:order-1 pt-10 pb-12 px-[5%] hidden lg:flex flex-col items-start gap-8 bg-blue-50">
        <Link to='/' className="w-16">
          <img src={logo} alt="Logo" />
        </Link>

        <FooterNav />
        

        <p className="text-blue-10 text-sm">FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-semibold text-brown-50">Company Number 682114 </span>. FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <span className="font-semibold text-brown-50">registration number C441669 </span>.</p>
<ul className="flex gap-3 justify-between font-medium underline text-sm text-center">
          <NavLink to='/about/disclaimer'>Disclaimer</NavLink>
          <Link to='/about/privacy'>Privacy Policy</Link>
          <Link to='/about/sustainability'>SFDR  Disclosures</Link>
        </ul>
        <p className="font-light text-xs">©️ 2023 FNX Dublin Limited, All Rights Reserved.</p>
        
      </div>

      <div className="flex-1 pt-10 pb-12 px-[5%] order-1 lg:order-2 hidden lg:flex flex-col items-start gap-8 bg-brown-50">
        <div className="flex flex-col gap-4">
        <h3 className="font-medium text-base">Stay in the loop!</h3>
        <h3 className="font-medium text-base text-blue-50">Subscribe to our newsletter for service updates</h3>
        </div>
        <div className="flex rounded-lg p-[2px] items-center w-full max-w-lg justify-between bg-white">
          <input type="email" placeholder="Your Email Address" name="" id="" className="bg-none pl-3 border-none outline-none w-full" />
          <button className="px-6 text-center flex items-center justify-center py-3 text-base font-normal rounded text-white hover:shadow-lg bg-blue-50">Subscribe</button>
        </div>
        
      </div>

      <div className="flex-1 pt-10 px-[5%] flex lg:hidden flex-col items-start gap-10">
        <Link to='/' className="w-16">
          <img src={logo} alt="Logo" />
        </Link>

        <FooterNav />
        <div className="flex flex-col gap-3">
        <h3 className="font-medium text-base">Stay in the loop!</h3>
        <h3 className="font-medium text-base text-brown-50">Subscribe to our newsletter for service updates</h3>
        </div>
        

        <div className="flex rounded-lg p-[2px] items-center w-full max-w-lg justify-between bg-white">
          <input type="email" placeholder="Your Email Address" name="" id="" className="bg-none pl-3 border-none outline-none w-full" />
          <button className="px-6 text-center flex items-center justify-center py-3 text-base font-normal rounded text-white hover:shadow-lg bg-brown-50">Subscribe</button>
        </div>

        <p className="text-blue-10 text-sm">FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-semibold text-brown-50">Company Number 682114 </span>. FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <span className="font-semibold text-brown-50">registration number C441669 </span>.</p>
      </div>

      <div className="flex-1 pt-10 pb-16 px-[5%] flex lg:hidden flex-col items-start gap-8">
        

        <ul className="flex gap-3 justify-between font-medium underline text-sm text-center">
          <NavLink to='/about/disclaimer'>Disclaimer</NavLink>
          <Link to='/about/privacy'>Privacy Policy</Link>
          <Link to='/about/sustainability'>SFDR  Disclosures</Link>
        </ul>

        <p className="font-light text-xs">©️ 2023 FNX Dublin Limited, All Rights Reserved.</p>
      </div>


      {/* <div className="flex flex-col gap-5 lg:flex-row items-start lg:justify-between mb-8">
        <Link to='/' className="w-16">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-2xl">Send us an email or give us your information and we wil get back to you.</h3>
          <div className="w-fit self-end">
            <Button name="Contact Us" color="brown" linkTo="/contact" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-blue-10 text-lg">FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-semibold">Company Number <span className="text-brown-50">682114</span> </span>. FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <span className="font-semibold">registration number <span className="text-brown-50">C441669</span> </span>.</p>

        <ul className="flex flex-col gap-3 font-semibold text-lg">
          <NavLink to='/about/disclaimer'>DISCLAIMER</NavLink>
          <Link to='/about/privacy'>PRIVACY POLICY</Link>
          <Link to='/about/sustainability'>SFDR  Disclosures</Link>
        </ul>
      </div>

      <p className="font-light text-sm">©️ 2023 FNX Dublin Limited, All Rights Reserved.</p> */}
    </footer>
  )
};

export default Footer;
