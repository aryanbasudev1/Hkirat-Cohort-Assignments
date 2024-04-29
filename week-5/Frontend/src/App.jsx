import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card
        name='Aryan'
        id='student'
        interests={["Week 5", "React Assignment", "Cohort 2.0"]}
        linkedIn='https://in.linkedin.com/in/aryanbasudev1?trk=people-guest_people_search-card'
        x = 'https://twitter.com/Aryan_basudev'
      ></Card>  
      <Card
        name='Harkirat Singh'
        id='instructor'
        interests={["Web 3", "Full-Stack", "Cohort 2.0"]}
        linkedIn='https://in.linkedin.com/in/kirat-li'
        x = 'https://twitter.com/kirat_tw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
      ></Card>
    </>
  )
}

export default App
