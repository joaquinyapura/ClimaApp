

export const Weater = ({data}) => {

    console.log(data);
  return (

    <div>

    {data.weather? (
        <div className="w-[700px] h-[400] rounded-xl bg-gray-300 relative px-14 mt-4 text-center flex  justify-between text-gray-600" >


        <div className="w-1/2 flex flex-col justify-center  text-left ">
        <h1 className="text-5xl font-bold " >{data.name}</h1> <span>{data.sys.country}</span> 
        <h3 className="text-2xl text-orange-600">{data.main.temp} C°</h3>
        </div>

        <div className="w-1/2 flex justify-center ">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} className="w-2/3" />
        </div>

        </div>
    ): null}

    </div>


    
  )
}
