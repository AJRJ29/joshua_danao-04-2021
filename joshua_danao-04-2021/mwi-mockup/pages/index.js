import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

let object1 = [
  {id: 0, firstName: "Matt", lastName: "Johnson"}, 
  {id: 1, firstName: "Bart", lastName: "Paden"}, 
  {id: 2, firstName: "Ryan", lastName: "Doss"}, 
  {id: 3, firstName: "Jared", lastName: "Malcolm"}
],
 object2 = [
  {id: 0, firstName: "Matt", lastName: "Johnson"}, 
  {id: 1, firstName: "Bart", lastName: "Paden"}, 
  {id: 6, firstName: "Jordan", lastName: "Heigle"}, 
  {id: 7, firstName: "Tyler", lastName: "Viles"}
];

let newArray = [...object1, ...object2];

let uniqNames = Array.from(newArray.reduce((init, object) => init.set(object.id, object),new Map()).values());

export default function Index() {
  return (
    <div>
      <Header/>
      <Contact/>
      <Footer names={uniqNames}/>
    </div>
  )
}
