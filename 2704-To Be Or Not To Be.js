var expect = function(val){
    return{
        toBe: (comparedval) => {
            if(val !== comparedval)
            throw new Error("Not Equal");
            else return true;
        },
        notToBe: (comparedval) => {
            if(val === comparedval)
            throw new Error("Equal");
            else return true;
        }
    }
};