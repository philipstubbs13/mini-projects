import { Customer } from './customer';

export class App {
  constructor() {
    this.heading = 'Customer Manager';
    this.customers = [];
    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  addCustomer() {
    if(this.customerName && this.customerEmail && this.customerPhone) {
      this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));
      
      // Clear Fields
      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
    }
  }

  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }
}