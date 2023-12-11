import React from "react";
import { useState } from "react";

import Rating from 'react-rating-stars-component';


const CommentForm = ({
    btnLabel,
    formSubmitHandler,
    formCancelHandler = null,
    initialText = "",
}) => {

    const [value, setValue] = useState(initialText);

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value)
        setValue("");
    };

    // Rating
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <form onSubmit={submitHandler}>
            <Rating
                count={5}
                value={rating} 
                onChange={handleRatingChange} 
                size={24}
                activeColor="#ffd700"
                
            />
            <div className="flex flex-col item-end border border-white rounded-lg p-4">
                
                <textarea
                    className="w-full focus:outline-none bg-transparent"
                    placeholder="write...."
                    rows="5"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="flex items-center gap-x-2 pt-2">
                    {formCancelHandler && (
                        <button
                            onClick={formCancelHandler}
                            className="px-6 py-2.5 rounded-lg border-red-500 text-red-500"
                        >Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary  bg-orange-500 rounded-full font-semibold text-white"
                    >{btnLabel}</button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm