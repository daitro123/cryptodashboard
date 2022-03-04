import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

type Action = { type: string; payload?: any };
type State = { isModalOpen: boolean };
type Dispatch = (action: Action) => void;

const globalReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "DISPLAY_MODAL":
            return { ...state, isModalOpen: true };
        case "ClOSE_MODAL":
            return { ...state, isModalOpen: false };
        default:
            return state;
    }
};

interface GlobalContextProviderProps {
    children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [state, dispatch] = useReducer(globalReducer, { isModalOpen: true });

    const value = { state, dispatch };

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a CountProvider");
    }
    return context;
}

export { useGlobalContext, GlobalContextProvider };
