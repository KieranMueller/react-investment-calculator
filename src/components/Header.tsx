import calcIcon from '../../public/calc.svg'

export default function Header() {
    return (
        <div className="header">
            <h1>Investment Calculator </h1>
            <img className='calc-icon' src={calcIcon} alt="Calculator Icon" />
        </div>
    )
}