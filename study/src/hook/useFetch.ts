import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [url]);

    return data;
}

//fetch로 구현
// import { useEffect, useState } from "react";

// export default function useFetch(url : string){
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(url)
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setData(data);
//             });
//     }, [url]);
//     return data;
// }