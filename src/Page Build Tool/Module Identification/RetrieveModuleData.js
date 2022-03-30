
export async function retrieveModuleData(moduleName) {
  var address = "http://localhost:3001/moduleData/" + moduleName
  var response = await fetch(address)
  response = await response.json();
  return response;
}