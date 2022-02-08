import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeComponent } from "./Home/Home.components";

export const AppRouting = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomeComponent} exact />

            </Switch>
        </BrowserRouter>
    )
}