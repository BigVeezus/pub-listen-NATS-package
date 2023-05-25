export enum OrderStatus {
  // Order created but ticket has not being reserved
  Created = "created",
  //The ticket the oder is trying to reserve has been reserved
  //Or cancelled by the user
  Cancelled = "cancelled",
  //The order has sucessfully reserved the ticket
  AwaitingPayment = "awaiting:payment",
  //The order has reserved ticket and User has paid
  Complete = "complete",
}
