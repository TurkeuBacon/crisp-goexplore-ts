class CrispController {

    currentControlState: CrispControlState;

    constructor() {
        this.currentControlState = CrispControlState.DEFAULT;
    }

    switchState(newControlState: CrispControlState): boolean {
        if(this.currentControlState == newControlState) {
            return false;
        }

        this.currentControlState = newControlState;
        switch(this.currentControlState) {
            case CrispControlState.DEFAULT:
                window.setAutoUpdateEnabled(true);
                break;
            case CrispControlState.MANUAL:
                window.setAutoUpdateEnabled(false);
                break;
            case CrispControlState.VARIABLE_SPEED:
                window.setAutoUpdateEnabled(true);
                /* call set speed function */
                break;
            default: 
                return false;
        }

        return true;
    }

}

enum CrispControlState {
    DEFAULT, MANUAL, VARIABLE_SPEED
}

export { CrispController, CrispControlState };