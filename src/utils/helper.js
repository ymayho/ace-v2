export const saveStateToLocalStorage = (state) => {
  try {
    const serialzeState = JSON.stringify(state);
    if( typeof window !== 'undefined' ) {
      localStorage.setItem('state', serialzeState);
      console.log("saveStateToLocalStorage");
    }
  }//End try.
  catch(error) {
    console.error(error);
  }//End catch.
}//End export const saveStateToLocalStorage.

export const loadStateFromLocalStorage = () => {
  try {
    if( typeof window !== 'undefined' ){
      const serialzeState = localStorage.getItem('state');
      console.log("loadStateFromLocalStorage")
      if(serialzeState === null){
        return undefined;
      }else{
        return JSON.parse(serialzeState);
      }
    }//if( typeof window !== 'undefined' )
    return undefined;
  }//End try.
  catch (error) {
    console.error(error);
    return undefined;
  }//End catch.
}//End export const loadStateFromLocalStorage.
