function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
  };
}

/*

ReturnType<typeof createPerson>

shorthand for

type ReturnType<T> =T extends (...args:any)=>infer R ? R:never;
*/
function logPerson(person: ReturnType<typeof createPerson>): void {
  console.log(person.firstName, person.lastName);
}

logPerson(createPerson("devr", "Rana"));
