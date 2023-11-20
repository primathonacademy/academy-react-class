import { Formik, Form, Field, ErrorMessage } from "formik";

const BasicFormTwo = () => {
  const initialValues = { email: "", password: "" };

  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
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
      <h1 className="text-3xl text-center my-6">Basic Form Two</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                className="border rounded p-1 block w-full"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="mb-8">
              <Field
                type="password"
                name="password"
                className="border rounded p-1 block w-full"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block p-1 w-full rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicFormTwo;
