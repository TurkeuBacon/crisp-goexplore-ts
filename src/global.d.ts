// globals.d.ts
interface Window {
    setAutoUpdateEnabled: (autoUpdate: boolean) => void;
    frameStep: () => void;
}

// In case you're using window globally, you can extend the window interface here.
declare var window: Window;