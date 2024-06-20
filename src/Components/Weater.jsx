

export const Weater = ({data}) => {

    console.log(data);
  return (

    <div>

    {data.weather? (
        <div className="w-[700px] h-[400] rounded-xl bg-white relative p-4 mt-4 text-center flex  justify-center text-gray-400" >


        <div className="w-1/2 flex-col m-auto">
        <h1 className="text-5xl">{data.name}</h1> 
        <h3>{data.main.temp} C°</h3>
        </div>

        <div className="w-1/2 flex-col">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="" srcset="" />
        </div>

        </div>
    ):null}

    </div>


    
  )
}
