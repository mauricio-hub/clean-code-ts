//import axios from 'axios';


export class HttpClient { 

   /*  async get(url: string) {
        const { data,status } = await axios.get(url);
        console.log({status});
        console.log({data});
        return { data }; 
    } */

    async get(url: string) {
        const resp = await fetch(url);
        const { status } = resp;
        const data = await resp.json();
        console.log({status});
        console.log({data});
        return { data, status };
        
    }
}

