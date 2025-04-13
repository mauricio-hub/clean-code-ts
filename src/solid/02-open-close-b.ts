import axios from 'axios';
import { HttpClient } from './02-open-close-c';


export class TodoService {
    
    constructor(private http: HttpClient) {}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        console.log("hola desde el servicio de todos",data);
        return data;
    }
}


export class PostService {
    constructor(private http: HttpClient) {}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        console.log("hola desde el servicio de posts",data);
        return data;
    }
}


export class PhotosService {
    constructor(private http: HttpClient) {}
    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        console.log("hola desde el servicio de fotos",data);
        return data;
    }

}