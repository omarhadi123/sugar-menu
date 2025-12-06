import Container from "./Container";
import ConfirmHeader from "./ConfirmHeader";
import ConfirmMain from "./ConfirmMain";
import OrderButton from "@/components/OrderButton";

function Confirm() {
    console.log("Confirm component rendered");
    return (
        <>
            <Container>
                <section className="w-full md:w-2/3 lg:w-1/3 mx-auto rounded-2xl p-4 bg-white">
                    <ConfirmHeader />
                    <ConfirmMain />
                    <OrderButton>Start New Order</OrderButton>
                </section>
            </Container>
        </>
    );
}

export default Confirm;
