const Banner = (props) => {
    return (
        <div className={`w-full h-3/5 bg-no-repeat bg-cover bg-center`} style={{ backgroundImage:`url(${props.img_url})`}}>
        </div>
    )
}

export default Banner;
