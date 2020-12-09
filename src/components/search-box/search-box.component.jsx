import "./search-bar.css";
// export const SearchBar=()=>{
    
    
//     

// };

// export class SearchBar extends React.Component{
//     props=['data']
//     state={
//         searchField:""
//     }
//     render(){
//         return <div> <input className="search-bar" placeholder="Search Monsters" type="search" onChange={(e)=>this. handleSearchFieldChanges(e.target.value)}></input> </div>;
//     }
//     componentDidMount(){
//         console.log(this.props.handleSearchFieldChanges)
//     }
// }

export const SearchBar=({placeholder,handleChange})=>{
    return <input
    name=""
    type="search"
    placeholder={placeholder}
    id=""
    className="search-bar"
    onChange={handleChange}
  ></input>
}
export default SearchBar;
