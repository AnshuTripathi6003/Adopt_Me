
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';



// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Kane",
//       animal: "Dog",
//       breed: "Labradore",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktaiel",
//     }),
//     React.createElement(Pet, { name: "Sumo", animal: "Cow", breed: "Indian" })
//   );
// };


const App = () =>{
    return(
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams/>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById("root"));
