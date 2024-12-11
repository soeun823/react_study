function 맵테스트(){
    const myArray = ["apple","banana","orange"]
    return(
        <div>
            {
            myArray.map((item) =>{
                return <li>{item}</li>
            })
            }
        </div>
    );
}
export default 맵테스트;