import { useNavigation } from "react-router-dom";

const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`btn btn-primary ${isSubmitting ? "disabled" : ""}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitBtn;
