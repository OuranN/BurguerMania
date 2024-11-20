import { Burguer } from "./burguer.interface";

export interface Order {
  id: number;                 
  items: Burguer[];            
  totalPrice: number;         
  customerName: string;       
  status: 'pending' | 'paid'; 
}
