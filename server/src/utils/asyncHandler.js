const asyncHandler = (callFunction)=>{
    return (req, res, next)=>{
        return Promise.resolve(callFunction(req, res)).catch(next);
    }
}

export default asyncHandler;