import { Component } from '@angular/core';

@Component({
  selector: 'app-forma',
  template: `
  <h1>
  FORMA ZA PUTOVANJE 
  </h1>
  <form action="/tutorial/action.html">
  <fieldset style="background: #f6f8ff; border: 2px solid #4238ca;">
    <legend>Registration Form</legend>

    <input type="text" placeholder="First name" name="firstname"><br /><br />
    <input type="text" placeholder="Last name" name="lastname"><br /><br />
    <input type="text" placeholder="Email" name="email"><br />

    <select name="gender">
      <option value="">-- Select Gender --</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br />

    <input type="submit" value="Submit" />
  </fieldset>

  <fieldset style="background: #f6f8ff; border: 2px solid #4238ca;">
    <legend>Travel </legend>

    <input type="text" placeholder="Country" name="firstname"><br /><br />
    <input type="text" placeholder="City" name="lastname"><br /><br />
    <input type="text" placeholder="Postal code" name="email"><br />

    <select name="gender">
      <option value="">-- Select Continent --</option>
      <option value="male">America</option>
      <option value="female">Europe</option>
      <option value="other">Asia</option>
      <option value="other">Australia</option>
      <option value="other">Africa</option>
    </select><br />

    <input type="submit" value="Submit" />
  </fieldset>
  <fieldset style="background: #f6f8ff; border: 2px solid #4238ca;">
    <legend>Money</legend>

    <input type="text" placeholder="Daily pay" name="firstname"><br /><br />
    <input type="text" placeholder="Number of days" name="lastname"><br /><br />
    <input type="text" placeholder="Procent %" name="email"><br />

   

    <input type="submit" value="Submit" />
  </fieldset>
</form>
  `,
  standalone:true,
  styles: [
    `
    form{

      width:50%;
    }
    
    h1{
      margin: auto;
      width: 20%;
      border: 2px solid green;
      padding: 10px;
      text-align: center;
      background-color:#333333;
      color:white;
      border-radius:15px;
    }
    `
  ]
})
export class FormaComponent {

}
