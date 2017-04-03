# ng2-login
This module let you scaffold the login component with UI and authenticate the API using token base authentication. 

# Install
$ npm install ng2-login
<br /> $ ng2-login

# Usage
<h2>Add Component to Module imports</h2>

```
import { LoginComponent } from './modules/login/login.component';
import { LoginService } from './modules/login/login.service';
...
@NgModule({
 ...
   declarations: [
        LoginComponent,
        ...
    ],
    providers: [
        LoginService
        ...
   ]
 ...
})
export class AppModule {}

```
