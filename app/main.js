import ValuesController from "./Controllers/ValuesController.js";
import VmachineController from "./Controllers/VmachineController.js"
class App {
  valuesController = new ValuesController();
  vmachineController = new VmachineController();

}

window["app"] = new App();
