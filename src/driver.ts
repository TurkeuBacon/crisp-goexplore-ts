import { CrispController } from "./crisp-control/crisp-controller";

const CONTROLLER: CrispController = new CrispController();

setupModeSelector();
setupFrameStepButton();

function setupModeSelector() {
    let modeSelection: HTMLSelectElement = document.createElement("select");
    ["Default", "Manual", "Variable Speed"].forEach(modeName => {
        let option = document.createElement("option");
        option.text = modeName;
        modeSelection.options.add(option);
    });
    document.onchange = () => {
        console.log(modeSelection.selectedIndex);
        CONTROLLER.switchState(modeSelection.selectedIndex);
    };
    document.body.appendChild(modeSelection);
}
function setupFrameStepButton() {
    let frameStepButton: HTMLButtonElement = document.createElement("button");
    frameStepButton.textContent = "Frame Step";

    frameStepButton.onclick = () => {
        window.frameStep();
    };

    document.body.appendChild(frameStepButton);
}
