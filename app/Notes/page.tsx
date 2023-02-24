import Categories from "./components/categories"

const NotesPage = () => {
  return (
    <div className='w-full flex flex-col mb-[20vh]'>
        <Categories category={'Projects'}/>
        <Categories category={'Uni'}/>
        <Categories category={'Physics'}/>
        <Categories category={'Projects'}/>
        <Categories category={'Uni'}/>
        <Categories category={'Physics'}/>
    </div>
  )
}

export default NotesPage