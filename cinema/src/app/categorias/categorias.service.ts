import { Injectable } from "@angular/core";
import { Categoria } from "./categoria/categoria.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CINEMA_API } from "../app.api";

@Injectable()
export class CategoriasService{
    constructor(private http: HttpClient){}

    listarCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`);
    }
}