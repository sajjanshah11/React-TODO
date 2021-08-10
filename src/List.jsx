let List = (props)=>{
    return(
        <ul>
            {props.task.map((ele,index) => {
          return (
            <li key = {index}>{ele} 
            <button className="delete-btn"
              onClick = {()=> {
                props.deleteButtonHandler(ele)
              }}
            > Delete </button>
            </li>
          )
        })}
        </ul>
    )
}


export default List;