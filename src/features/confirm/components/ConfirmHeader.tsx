import orderConfirmedImg from "/assets/images/icon-order-confirmed.svg";
export default function ConfirmHeader() {
    return (
        <>
            <header>
                <img src={orderConfirmedImg} alt="" />
                <h1 className="py-2 text-4xl font-bold text-rose-900 w-1/2 lg:w-full">
                    Order Confirmed
                </h1>
                <p className=" text-base text-rose-500">
                    We hope you enjoy your food!
                </p>
            </header>
        </>
    );
}
