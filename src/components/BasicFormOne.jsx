import { Formik } from "formik";

const BasicFormOne = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validator = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please enter your name";
    }

    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please enter valid email";
    }

    // Password validator
    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="my-4 mx-auto max-w-sm">
      <h1 className="text-3xl text-center my-6">Basic Form One</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter your name"
                className="border rounded p-1 block w-full"
              />
              {errors.name && touched.name && errors.name}
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="border rounded p-1 block w-full"
              />
              {errors.email && touched.email && errors.email}
            </div>

            <div className="mb-8">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="border rounded p-1 block w-full"
                placeholder="Enter your password"
              />
              {errors.password && touched.password && errors.password}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block p-1 w-full rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BasicFormOne;
