function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

function greetUsers(users: string[]): string[]{
    return users.map(user => greeter(user));
}

console.log(greetUsers(user)); //Correct