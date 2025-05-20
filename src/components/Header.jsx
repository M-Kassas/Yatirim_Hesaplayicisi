import logo from '../assets/investment-calculator-logo.png'
function Header() {
    return (
        <div>
            <header id="header">

                <img src={logo} alt=' logo money' />
                <h1> Yatırım Hesaplayıcısı</h1>

            </header>
        </div>
    )
}

export default Header
