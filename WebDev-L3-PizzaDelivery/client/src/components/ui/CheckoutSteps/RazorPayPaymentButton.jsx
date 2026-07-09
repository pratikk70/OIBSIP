import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Import Actions
import { setRazorPayPaymentDetails } from '../../../redux/slices/cartSlice';

// Import Components
import Button from '../Button';

function RazorPayPaymentButton({ amount, orderId }) {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outline"
      type="button"
      className="w-full rounded-full mt-2"
      onClick={() => {
        // DEMO BYPASS: Simulates a successful Razorpay response instantly
        // This completely skips the blocked Razorpay servers
        dispatch(
          setRazorPayPaymentDetails({
            razorPayPaymentId: `pay_demo_${Math.floor(Math.random() * 1000000)}`,
            razorPayOrderId: orderId,
            razorPaySignature: 'bypass_signature_12345',
          })
        );
      }}
    >
      Simulate Payment Success
    </Button>
  );
}

RazorPayPaymentButton.propTypes = {
  amount: PropTypes.number.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default RazorPayPaymentButton;