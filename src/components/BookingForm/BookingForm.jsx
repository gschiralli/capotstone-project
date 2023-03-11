import "./bookingForm.css";
import dining from "../../assets/dining.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function BookingForm({ availableTimes, dispatch, submitForm }) {
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const formik = useFormik({
    initialValues: {
      date: "",
      time: availableTimes[0],
      guests: 2,
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Please select a date")
        .min(today, "Cannot book for a past date"),
      time: Yup.string().required("Please select a time"),
      guests: Yup.number()
        .required("Please enter the number of guests")
        .min(2, "Minimum of 2 guests")
        .max(8, "Maximum of 8 guests"),
      occasion: Yup.string(),
    }),
    onSubmit: (values) => {
      if (submitForm(values)) {
        navigate("/confirmation", { state: { ...values } });
      }
    },
  });

  const handleDateChange = (e) => {
    formik.setFieldValue("date", e.target.value);
    dispatch({ type: "update_time", payload: new Date(e.target.value) });
  };

  return (
    <form onSubmit={formik.handleSubmit} data-testid="form">
      <div className="form-left">
        <h1>Reserve Your Table</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem autem eos nobis, dolorem iure aliquid?
        </p>
        <div className="mt-6">
          <div className="pb-4">
            <label
              htmlFor="res-date"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.date && formik.errors.date ? "text-red-400" : ""
              } `}
            >
              {formik.touched.date && formik.errors.date
                ? formik.errors.date
                : "Choose date"}
            </label>

            <input
              type="date"
              name="date"
              id="res-date"
              required
              {...formik.getFieldProps("date")}
              onChange={handleDateChange}
            />
          </div>

          <div className="pb-4">
            <label
              htmlFor="res-time"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.time && formik.errors.time ? "text-red-400" : ""
              } `}
            >
              {formik.touched.time && formik.errors.time
                ? formik.errors.time
                : "Choose time"}
            </label>
            <select
              type="time"
              name="time"
              id="res-time"
              {...formik.getFieldProps("time")}
              required
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Country input field */}
          <div className="pb-4">
            <label
              htmlFor="guests"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.guests && formik.errors.guests
                  ? "text-red-400"
                  : ""
              } `}
            >
              {formik.touched.guests && formik.errors.guests
                ? formik.errors.guests
                : "Number of guests"}
            </label>
            <input
              type="number"
              placeholder="2"
              min="2"
              max="8"
              id="guests"
              name="guests"
              required
              {...formik.getFieldProps("guests")}
            />
          </div>
          <div className="pb-4">
            <label
              htmlFor="occasion"
              className={`block font-latoBold text-sm pb-2 ${
                formik.touched.occasion && formik.errors.occasion
                  ? "text-red-400"
                  : ""
              } `}
            >
              {formik.touched.occasion && formik.errors.occasion
                ? formik.errors.occasion
                : "Occasion"}
            </label>
            <select
              id="occasion"
              name="occasion"
              {...formik.getFieldProps("occasion")}
            >
              <option value=""></option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <input type="submit" value="Make your reservation" />
        </div>
      </div>
      <div className="img-div">
        <img src={dining} alt="dining room" />
      </div>
    </form>
  );
}

export default BookingForm;
