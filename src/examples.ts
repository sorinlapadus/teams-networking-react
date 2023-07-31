export default null;
let firstName = "yes";
//firstName = false;
// Error: Type 'boolean' is not assignable to type 'string'

function getConf() {
  return {
    name: "my conf",
    x: 123,
    ready: true
  };
}

const conf = getConf();
console.info(conf.name);
// Error: Property 'nume' does not exist on type
//   '{ name: string; x: number; ready: boolean; }'
