import axios from 'axios';

axios.get("http://localhost:8081/grasshopper").then(x => {
    console.log((<any[]>x.data).find(x => x.Name == "Number"));
});