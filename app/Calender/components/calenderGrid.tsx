type Props = {
    month: String,
    days: any
}

const CalenderGrid = ({month, days}: Props) => {
    let numberOfDays = []
    for(let i = 0; i< days; i++){
        numberOfDays.push(<div key={i} className='w-full aspect-square border-black border'>{i+1}</div>)
    }
    return (
        <div className='w-full grid grid-cols-7 flex-shrink-0'>
            {numberOfDays}
        </div>
    )
}

export default CalenderGrid