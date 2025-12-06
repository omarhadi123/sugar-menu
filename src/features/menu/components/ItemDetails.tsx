import type {ItemDetailsParams} from "../types/itemDetails.types";

function ItemDetails({category, name, price}: ItemDetailsParams) {
    return (
        <>
            <div className="my-8">
                <p className="text-base text-rose-500">{category}</p>
                <h3
                    className="text-lg text-rose-900 font-semibold
                                my-1">
                    {name}
                </h3>
                <span className="text-xl font-semibold text-red">
                    ${price.toFixed(2)}
                </span>
            </div>
        </>
    );
}

export default ItemDetails;
