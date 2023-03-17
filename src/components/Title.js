import './Title.css'
export default  function Title({title, subtitle}){
    return (
        < div className='title-block'>
            <h1 className="title">{title}</h1>
            <br />
            <h1 className="title">{subtitle}</h1>

        </div>
    )
}