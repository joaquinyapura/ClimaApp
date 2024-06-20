

export const Weater = ({data}) => {

    console.log(data);
  return (

    <div>

    {data.weather? (
        <div className="w-[700px] h-[400] rounded-xl bg-white relative p-4 mt-4 text-center flex  justify-center text-gray-600" >


        <div className="w-1/2 flex-col m-auto text-left ">
        <h1 className="text-5xl font-bold " >{data.name}</h1> 
        <h3 className="text-2xl text-orange-600">{data.main.temp} C°</h3>
        </div>

        <div className="w-1/2 flex-col">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="" srcset="" />
        </div>

        </div>
    ):null}

    </div>


    
  )
}
