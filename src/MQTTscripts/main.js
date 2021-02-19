var Thread = Java.type("java.lang.Tread");
var System = Java.type('java.lang.System');

function execute(action) {
    out("Executing Sccript: " + action.getName());
    for (var i = 0; i < 5; i++) {
        increase();
        Thread.sleep(500);
        decrease();
    }

    action.setExitCode(0);
    action.setResultText("done");
    out("Script: Done");
    return action;
}

function increase() {
    for (var i = 0; i <= 11; i++) {
        mqttManager.publish("base/state/temperature", i);
        out("base/state/temperature" + i);
        Thread.sleep(500);
    }
}

function decrease() {
    for (var i = 11; i > -1; i--) {
        mqttManager.publish("base/state/temperature", i);
        out("base/state/temperature" + i);
        Thread.sleep(500);
    }
}

function out(message) {
    output.print(message);
}