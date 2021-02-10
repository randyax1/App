import { types } from "../types/types"


export const setErrorAction = (err) => ({
type: types.uiSetError,
payload: err
});

export const setRemoveErrorAction = () => ({
    type: types.uiRemoveError,
    
    });

export const setStartLoading = () => ({
    type: types.uiStartLoading,

        
     });

export const setFinishLoading = () => ({
    type: types.uiFinishLoading,
        
            
      });
