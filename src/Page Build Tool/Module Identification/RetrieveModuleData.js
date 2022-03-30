import getEnviroment from "../../../enviroment";

export async function retrieveModuleData(moduleName) {
  const env = getEnviroment()
  var address = env + "/moduleData/" + moduleName
  var response = await fetch(address)
  response = await response.json();
  return response;
}