
function mergeUserData(users:User[],data:Purchase[],option:string):User[]{
    if(option==="purchase"){
        for(let user of users){
            user["purchases"]=data.filter((purchase)=>user.id===purchase.userId);
        }
    }else{
        for(let user of users){
            user["reviews"]=data.filter((review)=>user["id"]===review["userId"]);
        }
    }
    return users
}

type Users={
    id: number, 
    name: string,
    email: string
}
type Purchase={
    userId:number,
    item:string,
    price:number;
}
type Review={
    userId:number,
    item:string,
    review:string;
}

const users:User[]= [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
  ]
  const purchases:Purchase[] = [
    { userId: 1, item: "Laptop", price: 1200 },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
  ];
  
  console.log(mergeUserData(users,purchases,"purchase"));
  