import { Component } from "@angular/core";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodosService } from "./services/todos.service";


@Component({
    selector:'app-todos',
    templateUrl:'./todos.component.html',
    standalone:true,
    imports:[HeaderComponent, FooterComponent, MainComponent]
})
export class TodosComponent {
    
}