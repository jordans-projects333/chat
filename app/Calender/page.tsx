import CalenderGrid from "./components/calenderGrid"
import MonthSlider from "./components/MonthSlider"
import GridContainer from "./components/GridContainer"

const Calender = () => {
    let months = [
        {
            month: 'jan',
            days: '31'
        },
        {
            month: 'feb',
            days: '28'
        },
        {
            month: 'mar',
            days: '31'
        },
        {
            month: 'apr',
            days: '30'
        },
        {
            month: 'may',
            days: '31'
        },
        {
            month: 'jun',
            days: '30'
        },
        {
            month: 'jul',
            days: '31'
        },
        {
            month: 'aug',
            days: '31'
        },
        {
            month: 'sep',
            days: '30'
        },
        {
            month: 'oct',
            days: '31'
        },
        {
            month: 'nov',
            days: '30'
        },
        {
            month: 'dec',
            days: '31'
        },
    ]
  return (
    <section className='flex justify-center items-center'>
        <div className='w-[80%] border-2 border-black'>
           <MonthSlider/>
            <div className='flex w-full'>
                <div className='border-black border flex-1 aspect-square'>Mon</div>
                <div className='border-black border flex-1 aspect-square'>Tue</div>
                <div className='border-black border flex-1 aspect-square'>Wed</div>
                <div className='border-black border flex-1 aspect-square'>Thu</div>
                <div className='border-black border flex-1 aspect-square'>Fri</div>
                <div className='border-black border flex-1 aspect-square'>Sat</div>
                <div className='border-black border flex-1 aspect-square'>Sun</div>
            </div>
            <GridContainer>
                {months.map(function(object, i){
                    return <CalenderGrid month={object.month} days={object.days} key={i}/>
                })}
            </GridContainer>
        </div>
    </section>
  )
}

export default Calender