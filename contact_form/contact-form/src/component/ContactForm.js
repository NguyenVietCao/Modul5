import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      birthDay: "",
      Gender: "",
      Citizen: "",
      NumberPhone: "",
      Email: "",
      CustomerType: "",
      Address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Your name must be at least 5 character")
        .max(25, "Your name must be under 25 chatacter")
        .required("Your must fill in this section!")
        .matches("\\[w]{2,}( [w]{2,})+\\i"),
      birthDay: Yup.string().required("Your must be fill in this section"),
      Gender: Yup.string().required("Yous must be fill in this section "),
      Citizen: Yup.string().required("Yous must be fill in this section "),
      NumberPhone: Yup.string().required("Yous must be fill in this section "),
      Email: Yup.string().required("Yous must be fill in this section "),
      CustomerType: Yup.string().required("Yous must be fill in this section "),
      Address: Yup.string().required("Yous must be fill in this section "),
    }),
  });
  return (
    <div>
      <>
        <form onSubmit={formik.handleSubmit}>
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>
                        Create <b>Customer</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="#addEmployeeModal"
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i>{" "}
                        <span>Create Customer</span>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="btn btn-danger"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i>{" "}
                        <span>Back To Menu</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
                <table>
                  {/* Name */}
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="name">Name</label>
                      </td>
                      <td>
                        <input
                          id="name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.name && formik.touched.name && (
                      <p>{formik.errors.name}</p>
                    )}
                    {/* Birth Day */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="birthDay">Birth Day</label>
                      </td>
                      <td>
                        <input
                          id="birthDay"
                          name="birthDay"
                          value={formik.values.birthDay}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.birthDay && formik.touched.birthDay && (
                      <p>{formik.errors.birthDay}</p>
                    )}
                    {/* Gender */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="Gender">Gender</label>
                      </td>
                      <td>
                        <input
                          id="Gender"
                          name="Gender"
                          value={formik.values.Gender}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.Gender && formik.touched.Gender && (
                      <p>{formik.errors.Gender}</p>
                    )}
                    {/* Citizen Id */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="Citizen">Citizen Id</label>
                      </td>
                      <td>
                        <input
                          id="Citizen"
                          name="Citizen"
                          value={formik.values.Citizen}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.Citizen && formik.touched.Citizen && (
                      <p>{formik.errors.Citizen}</p>
                    )}
                    {/* Number Phone */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="NumberPhone">Number Phone</label>
                      </td>
                      <td>
                        <input
                          id="NumberPhone"
                          name="NumberPhone"
                          value={formik.values.NumberPhone}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.NumberPhone &&
                      formik.touched.NumberPhone && (
                        <p>{formik.errors.NumberPhone}</p>
                      )}
                    {/* Email */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="Email">Email</label>
                      </td>
                      <td>
                        <input
                          id="Email"
                          name="Email"
                          value={formik.values.Email}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.Email && formik.touched.Email && (
                      <p>{formik.errors.Email}</p>
                    )}
                    {/* Customer Type */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="CustomerType">Customer Type</label>
                      </td>
                      <td>
                        <input
                          id="CustomerType"
                          name="CustomerType"
                          value={formik.values.CustomerType}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.CustomerType &&
                      formik.touched.CustomerType && (
                        <p>{formik.errors.CustomerType}</p>
                      )}
                    {/* Address */}
                    <tr>
                      <td>
                        {" "}
                        <label htmlFor="Address">Address</label>
                      </td>
                      <td>
                        <input
                          id="Address"
                          name="Address"
                          value={formik.values.Address}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                    {formik.errors.Address && formik.touched.Address && (
                      <p>{formik.errors.Address}</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <input type="submit" valude="submitForm" />
        </form>
      </>
    </div>
  );
};

export default ContactForm;
