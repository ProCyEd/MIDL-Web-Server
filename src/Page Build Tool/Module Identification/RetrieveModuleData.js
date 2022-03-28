
export async function retrieveModuleData(pageName) {
  var address = "http://localhost:3001/moduleData/" + pageName
  var response = await fetch(address)
  response = await response.json();
  return response;
}